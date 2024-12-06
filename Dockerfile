FROM node:22.9.0-alpine3.20 AS base

RUN apk add --no-cache nano curl tzdata bind-tools && \
    apk add --virtual .build-deps python3 make gcc g++  && \
    mkdir -p /home/app/config/ /home/app/build/dist /home/app/build/client/dist /home/app/server /home/app/client /home/app/node_modules

FROM base AS build

WORKDIR /home/app/build

COPY . .

RUN npm i && \
    apk del .build-deps && \
    npm run build && \
    rm -r ./node_modules && \
    npm i --omit=dev

# Assemble

WORKDIR /home/app

RUN cp ./build/node_modules/* /home/app/node_modules -R && \
    cp ./build/dist/* ./server/ -R && \
    cp ./build/client/* /home/app/client/ -R && \
    cp ./build/start.sh /home/app/start.sh && \
    cp ./build/config/config.example.yaml /home/app/config.default && \
    cp ./build/config/desktop.example.yaml /home/app/desktop.default && \
    cp ./build/config/services.example.yaml /home/app/services.default && \
    rm -r ./build && \
    mkdir -p /docker/stacks/ && \
    chmod +x /home/app/start.sh

ENTRYPOINT [ "/bin/sh", "-e", "-c" ]

FROM build AS production

WORKDIR /home/app/

ENV NODE_CONFIG_DIR=/home/app/config/
ENV NODE_ENV=production
ENV NODE_PATH=./build
ENV TZ=UTC

EXPOSE 5001

CMD [ "/home/app/start.sh" ]

