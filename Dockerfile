FROM node:22.9.0-alpine3.20

RUN apk add --no-cache nano bash curl sqlite tzdata dnsmasq caddy

ENV OS_ENV=docker
ENV TZ=UTC

RUN mkdir -p /etc/caddy/caddy.d /etc/caddy/certificates /etc/dnsmasq.d/discovered-hosts/

WORKDIR /app

COPY ./package.json /app/
COPY ./tsconfig.json /app/
RUN npm install

COPY ./caddy/Caddyfile /etc/caddy/Caddyfile
COPY ./dnsmasq/dnsmasq.conf /etc/dnsmasq.conf
COPY ./dnsmasq/dnsmasq.d/* /etc/dnsmasq.d/
COPY ./src/* /app/
COPY start.sh /app/
RUN chmod +x /app/start.sh

EXPOSE 5000
EXPOSE 5443
EXPOSE 5053

CMD [ "/bin/bash", "/app/start.sh" ]
