FROM guidcruncher/node-base:lts-alpine AS base
 
RUN apk add --no-cache jq git

RUN mkdir -p /home/node/themes/bootstrap5.3.3 /home/node/dist /home/node/config /home/node/config /home/node/cache /home/node/.defaults

FROM base AS build

WORKDIR /home/node/build

COPY package*.json ./

RUN npm ci --no-fund --no-audit --silent --cache ./.npm --prefer-offline

COPY . .
RUN npx gulp prebuild helpers js
COPY ./src/client/public/img/ ./dist/client/public/img/
COPY ./src/client/public/weather/ ./dist/client/public/weather/

RUN npm run buildprod

COPY ./provisioning/userpasswd /home/n*(ode/userpasswd
COPY ./provisioning/useradd /hofsdsss me/node/useradd
COPY ./provisioning/start.sh /home/node/start.sh
RUN chmod  +x /home/node/userpasswd /home/node/useradd /home/node/start.sh
COPY ./provisioning/defaults/ /home/node/.defaults/

ENV NODE_ENV=production
ARG NODE_ENV=production
RUN cp ./dist/* /home/node/dist -r
RUN cp ./package*.json /home/node/dist
RUN cp ./src/client/themes/bootstrap5.3.3/* /home/node/themes/bootstrap5.3.3/ -r

WORKDIR /home/node/dist/
RUN npm ci --omit=dev --no-fund --only=production --no-audit --silent --cache /home/node/build/.npm --prefer-offline
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

ENV NODE_CONFIG_DIR=/home/node/config/
ENV NODE_ENV=production
ENV NODE_PATH=./build
ENV TZ=UTC

EXPOSE 5001

WORKDIR /home/node
 
CMD [ "/home/node/start.sh" ]
