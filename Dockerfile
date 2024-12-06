FROM node:22.9.0-alpine3.20 AS base

RUN apk add --no-cache nano bash curl sqlite tzdata bind-tools && \
    apk add --virtual .build-deps python3 make gcc g++  && \
    mkdir -p /home/app/config/ /home/app/build/dist /home/app/build/client/dist /home/app/server /home/app/client /home/app/node_modules && \
    npm update -g npm && \
    npm i -g pnpm --force && \
    pnpm self-update

FROM base AS build

WORKDIR /home/app/build

COPY . .

RUN pnpm i && \
    npm i @nestjs/core @nestjs/common && \
    apk del .build-deps && \
    npm run build

# Assemble

WORKDIR /home/app

RUN cp ./build/node_modules/* /home/app/node_modules -R && \
    cp ./build/dist/* ./server/ -R && \
    cp ./build/client/* /home/app/client/ -R && \
    cp ./build/start.sh /home/app/start.sh && \
    cp ./build/config/config.yaml /home/app/config/config.yaml && \
    rm -r ./build && \
    mkdir -p /docker/stacks/ && \
    chmod +x /home/app/start.sh

ENTRYPOINT [ "/bin/bash", "-e", "-c", "/home/app/start.sh" ]

FROM build AS production

WORKDIR /home/app/

ENV NODE_CONFIG_DIR=/home/app/config/
ENV NODE_ENV=production
ENV NODE_PATH=./build
ENV TZ=UTC

EXPOSE 5001

CMD [ "/home/app/start.sh" ]
 
