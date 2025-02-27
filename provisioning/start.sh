#!/bin/sh

echo "Setting up directories"
cd /app/dist
mkdir -p /app/config/dnsmasq.d
mkdir -p /app/config/caddyfile.d

if [ ! -z "$TZ" ]; then
echo "Configuring timezone"
target="/usr/share/zoneinfo/$TZ"
  if [ -f "$target" ]; then
    cp /usr/share/zoneinfo/"$TZ" /etc/localtime
  fi
fi

echo "Checking for theme"
if [ ! -f /app/themes/bootstrap5.3.3/bootstrap.min.css ]; then
  mkdir -p /app/themes/bootstrap5.3.3/
  cp ./client/themes/bootstrap5.3.3/* /app/themes/bootstrap5.3.3/ -R
fi

echo "Checking for configuration" 
if [ ! -f /app/config/config.yaml ]; then
  cp /app/.defaults/config.yaml /app/config/config.yaml
fi

echo "Checking for desktop" 
if [ ! -f /app/config/desktop.yaml ]; then
cp /app/.defaults/desktop.yaml /app/config/desktop.yaml
fi 

echo "Checking for iconsets"
if [ ! -f /app/config/iconsets.json ]; then
  cp /app/.defaults/iconsets.json /app/config/iconsets.json
fi

echo "Checking for repositories"
if [ ! -f /app/config/repositories.json ]; then
  cp /app/.defaults/repositories.json /app/config/repositories.json
fi

echo "Checking for services"
if [ ! -f /app/config/services.yaml ]; then
  cp /app/.defaults/services.yaml /app/config/services.yaml
fi


echo "Checking if running in Docker"
if [ -f /.dockerenv ]; then
	export IN_DOCKER=true
fi

echo "Determining build version"
export PACKAGE_VERSION=Development
if [ -f /app/dist/package.json ]; then
 export PACKAGE_VERSION=$(cat /app/dist/package.json | jq ".version" -r)
fi

echo "Determining build date"
export BUILDDATE=$(date +%s)
if [ -f /app/dist/builddate ]; then
export BUILDDATE=$(cat /app/dist/builddate)
fi

echo "Starting server process"
export STARTDATE=$(date +%s)

if [ "$NODE_ENV" == "production" ]; then
  cd /app/dist
  node main --config=/app/config/config.yaml
else
  npm run dev
fi
