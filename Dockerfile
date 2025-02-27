FROM guidcruncher/node-base:lts-alpine AS base
 
RUN apk add --no-cache jq git sudo shadow
RUN addgroup sudo
RUN addgroup docker
RUN useradd user -s /bin/bash -m
RUN addgroup user sudo
RUN addgroup user docker
RUN echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers

RUN mkdir -p /app/dist /app/.defaults

FROM base AS build

WORKDIR /home/node/build

COPY package*.json ./

RUN npm ci --no-fund --no-audit --silent --cache ./.npm --prefer-offline

COPY . .
RUN npx gulp prebuild js
COPY ./src/client/public/img/ ./dist/client/public/img/
COPY ./src/client/public/weather/ ./dist/client/public/weather/

RUN npm run buildprod

ENV NODE_ENV=production
ARG NODE_ENV=production
RUN cp ./dist/* /app/dist -r
RUN cp ./package*.json /app/dist
RUN cp ./src/client/themes/bootstrap5.3.3/* /app/themes/bootstrap5.3.3/ -r

WORKDIR /app/dist/
RUN npm ci --omit=dev --no-fund --only=production --no-audit --silent --cache /home/node/build/.npm --prefer-offline
RUN npm cache clean --force
RUN date +%s > /app/dist/builddate

FROM base AS production
WORKDIR /app
COPY ./provisioning/userpasswd /app/userpasswd
COPY ./provisioning/useradd /app/useradd
COPY ./provisioning/start.sh /app/start.sh
COPY ./provisioning/entrypoint.sh /app/entrypoint.sh
RUN chmod  +x /app/userpasswd /app/useradd /app/entrypoint.sh /app/start.sh
COPY ./provisioning/defaults/ /app/.defaults/

WORKDIR /app/dist

COPY --from=build /app/dist .

WORKDIR /hone/node

COPY --from=build /app/.defaults /app/.defaults
COPY --from=build /app/start.sh /app/start.sh
COPY --from=build /app/entrypoint.sh /app/entrypoint.sh
COPY --from=build /app/useradd /app/useradd
COPY --from=build /app/userpasswd  /app/userpasswd

ENV NODE_CONFIG_DIR=/app/config/
ENV NODE_ENV=production
ENV NODE_PATH=./build
ENV TZ=UTC

EXPOSE 5001

WORKDIR /app

RUN mkdir -p /home/user

ENV THEME_BASE=/home/user/themes
ENV CLIENT_BASE=/app/dist/client
ENV CACHE_BASE=/home/user/cache
ENV NODE_CONFIG_DIR=/home/user/config
ENV IN_DOCKER=true
ENV NODE_ENV=production
ENV CADDY_CFG=/home/user/config/caddyfile.d/
ENV DNS_CFG=/home/user/config/dnsmasq.d/
ENV JWT_SECRET="7GYyXKwiM06C1bgTJIg3AwtQjSq9anBU2r-aGXV_sqcA"
ENV IN_DOCKER=true
ENV PACKAGE_VERSION=Production
ENV BUILDDATE=0
ENV STARTDATE=0

ENTRYPOINT [ "/bin/sh", "-e", "-c", "/app/entrypoint.sh" ]
