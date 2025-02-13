FROM guidcruncher/node-base:lts-alpine AS build
 
RUN apk add --no-cache jq git

RUN mkdir -p /home/node/app /home/node/config /home/node/config /home/node/cache /home/node/.defaults
WORKDIR /home/node/.build

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build

COPY ./provisioning/userpasswd /home/node/userpasswd
COPY ./provisioning/useradd /home/node/useradd
COPY ./provisioning/start.sh /home/node/start.sh
RUN chmod +x /home/node/userpasswd /home/node/useradd /home/node/start.sh
COPY ./provisioning/defaults/iconsets.json /home/node/.defaults/iconsets.default
COPY ./provisioning/defaults/config.yaml /home/node/.defaults/config.default
COPY ./provisioning/defaults/desktop.yaml /home/node/.defaults/desktop.default
COPY ./provisioning/defaults/services.yaml /home/node/.defaults/services.default

ENV NODE_ENV=production
ARG NODE_ENV=production
RUN cp ./dist/* /home/node/app -R
RUN cp ./package*.json /home/node/app

WORKDIR /home/node/app/
RUN npm i --production --include prod
RUN rm -r /home/node/.build
RUN date +%s > /home/node/app/builddate

ENTRYPOINT [ "/bin/sh", "-e", "-c" ]

FROM build AS production

WORKDIR /home/node/app/

ENV NODE_CONFIG_DIR=/home/node/config/
ENV NODE_ENV=production
ENV NODE_PATH=./build
ENV TZ=UTC

EXPOSE 5001

WORKDIR /home/node
 
CMD [ "/home/node/start.sh" ]
