#!/bin/sh
cd /home/app


if [ ! -z "$TZ" ]; then
target="/usr/share/zoneinfo/$TZ"
  if [ -f "$target" ]; then
    cp /usr/share/zoneinfo/"$TZ" /etc/localtime
  fi
fi

if [ ! -f /home/app/client/public/themes/bootstrap5.3.3/bootstrap.min.css ]; then
  mkdir -p /home/app/client/public/themes/bootstrap5.3.3/
  cp /home/app/client/themes/bootstrap5.3.3/* /home/app/client/public/themes/bootstrap5.3.3/ -R
fi

if [ ! -f /home/app/config/config.yaml ]; then
  cp /home/app/config.default /home/app/config/config.yaml
fi

if [ ! -f /home/app/config/desktop.yaml ]; then
  cp /home/app/desktop.default /home/app/config/desktop.yaml
fi

if [ ! -f /home/app/config/services.yaml ]; then
  cp /home/app/services.default /home/app/config/services.yaml
fi

if [ ! -f /etc/caddy/CaddyfileUser ]; then
  echo "" > /etc/caddy/CaddyfileUser
fi

export CLIENT_BASE=/home/app/client/
export NODE_CONFIG_DIR=/home/app/config
export IN_DOCKER=false
export NODE_ENV=production
export CADDY_CFG=/etc/caddy/caddyfile.d/

if [ -f /.dockerenv ]; then
	export IN_DOCKER=true
fi

if [ -f /home/app/server/package.json ]; then
 export PACKAGE_VERSION=$(cat /home/app/server/package.json | jq ".version" -r)
fi

export BUILDDATE=$(cat /home/app/server/builddate)

dnsmasq --conf-file=/etc/dnsmasq.conf --listen-address=0.0.0.0 --pid-file=/home/dnsmasq.pid
caddy start --config /etc/caddy/Caddyfile --pidfile /home/caddy.pid
node server/main --config=/home/app/config/config.yaml

