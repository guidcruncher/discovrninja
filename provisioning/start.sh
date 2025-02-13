#!/bin/sh
echo "Setting up directories"
cd /home/node/app
mkdir -p /home/node/config/dnsmasq.d
mkdir -p /home/node/config/caddyfile.d

if [ ! -z "$TZ" ]; then
echo "Configuring timezone"
target="/usr/share/zoneinfo/$TZ"
  if [ -f "$target" ]; then
    cp /usr/share/zoneinfo/"$TZ" /etc/localtime
  fi
fi

echo "Checking for theme"
if [ ! -f /home/node/app/client/public/themes/bootstrap5.3.3/bootstrap.min.css ]; then
  mkdir -p /home/node/app/client/public/themes/bootstrap5.3.3/
  cp /home/node/node/client/themes/bootstrap5.3.3/* /home/node/node/client/public/themes/bootstrap5.3.3/ -R
fi

echo "Checking for configuration" 
if [ ! -f /home/node/config/config.yaml ]; then
  cp /home/node/.defaults/config.default /home/node/config/config.yaml
fi

echo "Checking for desktop" 
if [ ! -f /home/node/config/desktop.yaml ]; then
cp /home/node/.defaults/desktop.default /home/node/config/desktop.yaml
fi 

echo "Checking for iconsets"
if [ ! -f /home/node/config/iconsets.json ]; then
  cp /home/node/.defaults/iconsets.default /home/node/config/iconsets.json
fi

echo "Checking for services"
if [ ! -f /home/node/config/services.yaml ]; then
  cp /home/node/.defaults/services.default /home/node/config/services.yaml
fi

echo "Setting environment variables"
export CLIENT_BASE=/home/node/app/client
export CACHE_BASE=/home/node/cache 
export NODE_CONFIG_DIR=/home/node/config
export IN_DOCKER=false
export NODE_ENV=production
export CADDY_CFG=/home/node/config/caddyfile.d/
export DNS_CFG=/home/node/config/dnsmasq.d/
export JWT_SECRET="7GYyXKwiM06C1bgTJIg3AwtQjSq9anBU2r-aGXV_sqcA"

echo "Checking if running in Docker"
if [ -f /.dockerenv ]; then
	export IN_DOCKER=true
fi

echo "Determining build version"
export PACKAGE_VERSION=Development
if [ -f /home/node/app/package.json ]; then
 export PACKAGE_VERSION=$(cat /home/node/app/package.json | jq ".version" -r)
fi

echo "Determining build date"
export BUILDDATE=$(date +%s)
if [ -f /home/node/app/builddate ]; then
export BUILDDATE=$(cat /home/node/app/builddate)
fi

echo "Starting server process"
export STARTDATE=$(date +%s)
cd /home/node/app
node main --config=/home/node/config/config.yaml
tail -f  /dev/null
