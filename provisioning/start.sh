#!/bin/sh
echo "Setting up directories"
cd /home/app
mkdir -p /home/app/config/dnsmasq.d
mkdir -p /home/app/config/caddy.d

if [ ! -z "$TZ" ]; then
echo "Configuring timezone"
target="/usr/share/zoneinfo/$TZ"
  if [ -f "$target" ]; then
    cp /usr/share/zoneinfo/"$TZ" /etc/localtime
  fi
fi

echo "Checking for theme"
if [ ! -f /home/app/client/public/themes/bootstrap5.3.3/bootstrap.min.css ]; then
  mkdir -p /home/app/client/public/themes/bootstrap5.3.3/-  cp /home/app/client/themes/bootstrap5.3.3/* /home/app/client/public/themes/bootstrap5.3.3/ -R
fi

echo "Checking for configuration" 
if [ ! -f /home/app/config/config.yaml ]; then
  cp /home/app/.defaults/config.default /home/app/config/config.yaml
fi

echo "Checking for desktop" 
if [ ! -f /home/app/config/desktop.yaml ]; then
cp /home/app/.defaults/desktop.default /home/app/config/desktop.yaml
fi 

echo "Checking for iconsets"
if [ ! -f /home/app/config/iconsets.json ]; then
  cp /home/app/.defaults/iconsets.default /home/app/config/iconsets.json
fi

echo "Checking for services"
if [ ! -f /home/app/config/services.yaml ]; then
  cp /home/app/.defaults/services.default /home/app/config/services.yaml
fi

echo "Setting environment variables"
export CLIENT_BASE=/home/app/client/
export NODE_CONFIG_DIR=/home/app/config
export IN_DOCKER=false
export NODE_ENV=production
export CADDY_CFG=/etc/caddy/caddyfile.d/
export DNS_CFG=/home/app/config/dnsmasq.d/
export JWT_SECRET="7GYyXKwiM06C1bgTJIg3AwtQjSq9anBU2r-aGXV_sqcA"

echo "Checking if running in Docker"
if [ -f /.dockerenv ]; then
	export IN_DOCKER=true
fi

echo "Determining build version"
if [ -f /home/app/server/package.json ]; then
 export PACKAGE_VERSION=$(cat /home/app/server/package.json | jq ".version" -r)
fi

echo "Determining build date"
export BUILDDATE=$(cat /home/app/server/builddate)

echo "Starting server process"
node server/main --config=/home/app/config/config.yaml

