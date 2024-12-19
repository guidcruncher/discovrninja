#!/bin/sh
cd /home/app
mkdir -p /home/app/config/dnsmasq.d

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
  cp /home/defaults/config.default /home/app/config/config.yaml
fi

if [ ! -f /home/app/config/desktop.yaml ]; then
  cp /home/defaults/desktop.default /home/app/config/desktop.yaml
fi

if [ ! -f /home/app/config/services.yaml ]; then
  cp /home/defaults/services.default /home/app/config/services.yaml
fi

if [ ! -f /home/app/config/Caddyfile ]; then
  cp /home/defaults/Caddyfile.default /home/app/config/Caddyfile
fi

if [ ! -f /home/app/config/dns-resolv.conf ]; then
  cp /home/defaults/dns-resolv.conf.default /home/app/config/dns-resolv.conf
fi

if [ ! -f /home/app/config/dnsmasq.conf ]; then
  cp /home/defaults/dnsmasq.conf.default /home/app/config/dnsmasq.conf
fi

if [ ! -f /home/app/config/dnsmasq.d/hosts.conf ]; then
  echo "" > /home/app/config/dnsmasq.d/hosts.conf
fi

export CLIENT_BASE=/home/app/client/
export NODE_CONFIG_DIR=/home/app/config
export IN_DOCKER=false
export NODE_ENV=production
export CADDY_CFG=/etc/caddy/caddyfile.d/
export DNS_CFG=/home/app/config/dnsmasq.d/

if [ -f /.dockerenv ]; then
	export IN_DOCKER=true
fi

if [ -f /home/app/server/package.json ]; then
 export PACKAGE_VERSION=$(cat /home/app/server/package.json | jq ".version" -r)
fi

export BUILDDATE=$(cat /home/app/server/builddate)

dnsmasq --conf-file=/home/app/config/dnsmasq.conf --pid-file=/home/dnsmasq.pid
caddy start --config /etc/caddy/Caddyfile --pidfile /home/caddy.pid
node server/main --config=/home/app/config/config.yaml

