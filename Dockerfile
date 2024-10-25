FROM node:22.9.0-alpine3.20

RUN apk add --no-cache nano bash curl sqlite tzdata dnsmasq caddy

ENV PORT=5001
ENV HOST="0.0.0.0"
ENV OS_ENV=docker
ENV TZ=UTC

RUN mkdir -p /app/caddy/caddy.d /app/caddy/certificates /app/dnsmasq/dnsmasq.d/discovered-hosts/ /app/src

WORKDIR /app

COPY ./package.json /app/
COPY ./* /app/

RUN npm install

COPY ./caddy/Caddyfile /app/caddy/Caddyfile
COPY ./dnsmasq/dnsmasq.conf /app/dnsmasq/dnsmasq.conf
COPY ./dnsmasq/dnsmasq.d/* /app/dnsmasq/dnsmasq.d/
COPY ./src/* /app/src/
COPY start.sh /app/
RUN chmod +x /app/start.sh

EXPOSE 5000
EXPOSE 5001
EXPOSE 5443
EXPOSE 5053

CMD [ "/bin/bash", "/app/start.sh" ]


