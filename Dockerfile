FROM node:22.9.0-alpine3.20

RUN apk add --no-cache nano bash curl sqlite tzdata dnsmasq caddy bind-tools

ENV PORT=5001
ENV HOST="0.0.0.0"
ENV OS_ENV=docker
ENV TZ=UTC
ENV DNSHOSTS=/app/dnsmasq/discovered-hosts/
ENV CADDYCONFIG=/app/caddy/caddy.d/

RUN mkdir -p /app/src
RUN mkdir -p /app/caddy/caddy.d
RUN mkdir -p /app/caddy/certificates
RUN mkdir -p /app/dnsmasq/dnsmasq.d
RUN mkdir -p /app/dnsmasq/discovered-hosts/

WORKDIR /app

COPY ./eslint.config.mjs /app
COPY ./package.json /app
COPY ./gulpfile.mjs /app
COPY ./start.sh /app
COPY ./environment.d.ts /app
COPY ./package-lock.json /app
COPY ./tsconfig.json /app
COPY ./src/ /app/src

RUN npm install

RUN npx gulp build

COPY ./caddy/Caddyfile /app/caddy/Caddyfile
COPY ./dnsmasq/dnsmasq.conf /app/dnsmasq/dnsmasq.conf
RUN chmod +x /app/start.sh

EXPOSE 5000
EXPOSE 5001
EXPOSE 5443
EXPOSE 5053

CMD [ "/bin/bash", "/app/start.sh" ]


