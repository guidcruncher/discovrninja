#!/bin/sh
echo "Setting up directories"
cd /home/node/dist
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
export THEME_BASE=/home/node/themes
if [ ! -f /home/node/themes/bootstrap5.3.3/bootstrap.min.css ]; then
  mkdir -p /home/node/themes/bootstrap5.3.3/
  cp ./client/themes/bootstrap5.3.3/* /home/node/themes/bootstrap5.3.3/ -R
fi

echo "Checking for configuration" 
if [ ! -f /home/node/config/config.yaml ]; then
  cp /home/node/.defaults/config.yaml /home/node/config/config.yaml
fi

echo "Checking for desktop" 
if [ ! -f /home/node/config/desktop.yaml ]; then
cp /home/node/.defaults/desktop.yaml /home/node/config/desktop.yaml
fi 

echo "Checking for iconsets"
if [ ! -f /home/node/config/iconsets.json ]; then
  cp /home/node/.defaults/iconsets.json /home/node/config/iconsets.json
fi

echo "Checking for repositories"
if [ ! -f /home/node/config/repositories.json ]; then
  cp /home/node/.defaults/repositories.json /home/node/config/repositories.json
fi

echo "Checking for services"
if [ ! -f /home/node/config/services.yaml ]; then
  cp /home/node/.defaults/services.yaml /home/node/config/services.yaml
fi

echo "Setting environment variables"
export CLIENT_BASE=/home/node/dist/client
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
if [ -f /home/node/dist/package.json ]; then
 export PACKAGE_VERSION=$(cat /home/node/dist/package.json | jq ".version" -r)
fi

echo "Determining build date"
export BUILDDATE=$(date +%s)
if [ -f /home/node/dist/builddate ]; then
export BUILDDATE=$(cat /home/node/dist/builddate)
fi

echo "Starting server process"
export STARTDATE=$(date +%s)
cd /home/node/dist
node main --config=/home/node/config/config.yaml
