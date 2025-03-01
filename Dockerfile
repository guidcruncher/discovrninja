FROM guidcruncher/node-base:lts-alpine AS base
 
RUN apk add --no-cache jq git sudo su-exec shadow

RUN addgroup -g 1002 -S docker && \
    addgroup -S sudo && \
    useradd user -s /bin/bash -m && \
    addgroup user docker && \
    addgroup root docker && \
    addgroup user sudo && \
    addgroup root sudo && \
    echo "%sudo ALL=(ALL:ALL) NOPASSWD: ALL" >> /etc/sudoers && \
    echo "root ALL=(ALL:ALL) NOPASSWD: ALL" >> /etc/sudoers && \
    echo "user ALL=(ALL:ALL) NOPASSWD: ALL" >> /etc/sudoers

RUN mkdir -p /home/node/themes/bootstrap5.3.3 /home/node/dist /home/node/config /home/node/config /home/node/cache /home/node/.defaults

FROM base AS build

WORKDIR /home/node/build

COPY package*.json ./

RUN npm ci --no-fund --no-audit --silent --prefer-offline

COPY . .
RUN npx gulp prebuild js
COPY ./src/client/public/img/ ./dist/client/public/img/
COPY ./src/client/public/weather/ ./dist/client/public/weather/

RUN npm run buildprod
RUN npm run uglify
RUN npm run uglifycss

COPY ./provisioning/userpasswd /home/node/userpasswd
COPY ./provisioning/useradd /home/node/useradd
COPY ./provisioning/start.sh /home/node/start.sh
RUN chmod  +x /home/node/userpasswd /home/node/useradd /home/node/start.sh
COPY ./provisioning/defaults/ /home/node/.defaults/

ENV NODE_ENV=production
ARG NODE_ENV=production
RUN cp ./dist/* /home/node/dist -r
RUN cp ./package*.json /home/node/dist
RUN cp ./src/client/themes/bootstrap5.3.3/* /home/node/themes/bootstrap5.3.3/ -r

WORKDIR /home/node/dist/
RUN npm ci --omit=dev --no-fund --only=production --no-audit --silent --prefer-offline
RUN npm cache clean --force
RUN date +%s > /home/node/dist/builddate

FROM base AS production

WORKDIR /home/node/dist

COPY --from=build /home/node/dist .

WORKDIR /hone/node

COPY --from=build /home/node/.defaults /home/node/.defaults
COPY --from=build /home/node/start.sh /home/node/start.sh
COPY --from=build /home/node/useradd /home/node/useradd
COPY --from=build /home/node/userpasswd  /home/node/userpasswd

ENTRYPOINT [ "/bin/sh", "-e", "-c" ]

ENV HOST_IP=""
ENV APP_BASE=/home/node/dist
ENV THEME_BASE=/home/node/themes
ENV CLIENT_BASE=/home/node/dist/client
ENV CACHE_BASE=/home/node/cache
ENV NODE_CONFIG_DIR=/home/node/config
ENV IN_DOCKER=true
ENV NODE_ENV=production
ENV CADDY_CFG=/home/node/config/caddyfile.d/
ENV DNS_CFG=/home/node/config/dnsmasq.d/
ENV JWT_SECRET="7GYyXKwiM06C1bgTJIg3AwtQjSq9anBU2r-aGXV_sqcA"
ENV IN_DOCKER=true
ENV PACKAGE_VERSION=Production
ENV BUILDDATE=0
ENV STARTDATE=0
ENV TZ=UTC

EXPOSE 5001



WORKDIR /home/node
 
CMD [ "/home/node/start.sh" ]
