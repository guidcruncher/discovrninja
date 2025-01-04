FROM guidcruncher/node-base:22.9.0-alpine3.20 AS base

RUN apk add --no-cache dnsmasq caddy jq git

RUN npm i -g gulp-cli

RUN mkdir -p /home/defaults/ /home/app/config/ /home/app/build/dist /home/app/build/client/dist /ho me/app/build/src /home/app/build/ config /home/app/server /home/app/client /home/app/node_modules /etc/caddy/caddyfile.d	/etc/caddy/includes

FROM base AS build

WORKDIR /home/app/build
COPY gulpfile.mjs ./gulpfile.mjs
COPY package.json ./package.json
COPY ./src/ ./src/
COPY ./client/ ./client/
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
    cp ./build/client/* /home/app/client/ -R && \
    cp ./build/config/config.example.yaml /home/defaults/config.default && \
    cp ./build/config/desktop.example.yaml /home/defaults/desktop.default && \
    cp ./build/config/services.example.yaml /home/defaults/services.default && \
    rm -r ./build && \
    mkdir -p /docker/stacks/

COPY ./provisioning/start.sh /home/app/start.sh
COPY ./provisioning/caddyreload.sh /home/app/caddyreload.sh
COPY ./provisioning/dnsmasqreload.sh /home/app/dnsmasqreload.sh
COPY ./provisioning/Caddyfile /etc/caddy/Caddyfile
COPY ./provisioning/dns-resolv.conf /home/defaults/dns-resolv.conf.default
COPY ./provisioning/dnsmasq.conf /home/defaults/dnsmasq.conf.default 
COPY ./provisioning/Caddyfile-user /home/defaults/Caddyfile.default
COPY ./provisioning/dnsmasq.conf /etc/dnsmasq.conf
COPY ./provisioning/cors.conf /etc/caddy/includes/cors.conf
RUN chmod +x /home/app/start.sh /home/app/caddyreload.sh /home/app/dnsmasqreload.sh

ENTRYPOINT [ "/bin/sh", "-e", "-c" ]

FROM build AS production

WORKDIR /home/app/

ENV NODE_CONFIG_DIR=/home/app/config/
ENV NODE_ENV=production
ENV NODE_PATH=./build
ENV TZ=UTC

EXPOSE 3000
 
CMD [ "/home/app/start.sh" ]

