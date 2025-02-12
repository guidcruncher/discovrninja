FROM guidcruncher/node-base:lts-alpine3.20 AS base

RUN apk add --no-cache jq git

RUN npm i -g gulp-cli

RUN mkdir -p /home/app/.defaults/ /home/app/config/ /home/app/build/dist /home/app/build/client/dist /ho me/app/build/src /home/app/build/ config /home/app/server /home/app/client /home/app/node_modules /etc/caddy/caddyfile.d	/etc/caddy/includes

FROM base AS build

WORKDIR /home/app/build
COPY gulpfile.mjs ./gulpfile.mjs
COPY package.json ./package.json
COPY ./src/ ./src/
COPY ./src/client/ ./client/
COPY ./config/* ./config/
COPY ./tsconfig.* .
COPY nest-cli.json .

RUN npm i && \
    apk del .build-deps && \
    gulp js && \
    npm run build && \
    rm -r ./node_modules && \
    npm i --omit=dev

# Assemble

WORKDIR /home/app

RUN cp ./build/node_modules/* /home/app/node_modules -R && \
    cp ./build/dist/* ./server/ -R && \
    date +"%s" > ./server/builddate && \
    cp ./build/package.json /home/app/server/package.json && \
    cp ./build/client/* /home/app/src/cient -R && \
    cp ./build/client/* /home/app/client/ -R && \
    rm -r ./build && \
    mkdir -p /docker/stacks/

COPY ./provisioning/userpasswd /home/app/userpasswd
COPY ./provisioning/useradd /home/app/useradd
COPY ./provisioning/start.sh /home/app/start.sh
COPY ./provisioning/defaults/iconsets.json /home/app/.defaults/iconsets.default
COPY ./provisioning/defaults/config.yaml /home/app/.defaults/config.default
COPY ./provisioning/defaults/desktop.yaml /home/app/.defaults/desktop.default
COPY ./provisioning/defaults/services.yaml /home/app/.defaults/services.default

RUN chmod +x /home/app/userpasswd /home/app/useradd /home/app/start.sh

ENTRYPOINT [ "/bin/sh", "-e", "-c" ]

FROM build AS production

WORKDIR /home/app/

ENV NODE_CONFIG_DIR=/home/app/config/
ENV NODE_ENV=production
ENV NODE_PATH=./build
ENV TZ=UTC

EXPOSE 5001
 
CMD [ "/home/app/start.sh" ]

