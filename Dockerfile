FROM guidcruncher/node-base:lts-alpine AS development
 
RUN apk add --no-cache jq git

RUN mkdir -p /home/node/themes/bootstrap5.3.3 /home/node/app /home/node/config /home/node/config /home/node/cache /home/node/.defaults
WORKDIR /home/node/build

COPY package*.json ./

RUN npm ci

COPY . .

FROM guidcruncher/node-base:lts-alpine as build

WORKDIR /home/node/build

COPY package*.json ./
COPY --from=development /home/node/build/node_modules ./node_modules
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
RUN cp ./src/client/themes/bootstrap5.3.3/* /home/node/themes/bootstrap5.3.3/ -R

WORKDIR /home/node/app/
RUN npm ci --only=production && npm cache clean --force
RUN date +%s > /home/node/app/builddate

FROM guidcruncher/node-base:lts-alpine AS production

WORKDIR /home/node/app

COPY --from=build /home/node/app .

WORKDIR /hone/node

COPY --from=build /home/node/.defaults /home/node/.defaults
COPY --from=build /home/node/start.sh /home/node/start.sh
COPY --from=build /home/node/useradd /home/node/useradd
COPY --from=build /home/node/userpasswd  /home/node/userpasswd

ENTRYPOINT [ "/bin/sh", "-e", "-c" ]

WORKDIR /home/node/app/

ENV NODE_CONFIG_DIR=/home/node/config/
ENV NODE_ENV=production
ENV NODE_PATH=./build
ENV TZ=UTC

EXPOSE 5001

WORKDIR /home/node
 
CMD [ "/home/node/start.sh" ]
