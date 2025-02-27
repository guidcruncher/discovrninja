#!/bin/sh

echo "Setting up directories"
cd /app/dist
mkdir -p /home/user/config/dnsmasq.d
mkdir -p /home/user/config/caddyfile.d

if [ ! -z "$TZ" ]; then
echo "Configuring timezone"
target="/usr/share/zoneinfo/$TZ"
  if [ -f "$target" ]; then
    cp /usr/share/zoneinfo/"$TZ" /etc/localtime
  fi
fi

echo "Checking for theme"
if [ ! -f /home/user/themes/bootstrap5.3.3/bootstrap.min.css ]; then
  mkdir -p /home/user/themes/bootstrap5.3.3/
  cp ./client/themes/bootstrap5.3.3/* /home/user/themes/bootstrap5.3.3/ -R
  sudo chown user:user /home/user/themes/bootstrap5.3.3/ -R
fi

echo "Checking for configuration" 
if [ ! -f /home/user/config/config.yaml ]; then
  cp /app/.defaults/config.yaml /home/user/config/config.yaml
  sudo chown user:user /home/user/config/config.yaml
fi

echo "Checking for desktop" 
if [ ! -f /home/user/config/desktop.yaml ]; then
  cp /app/.defaults/desktop.yaml /home/user/config/desktop.yaml
  sudo chown user:user /home/user/config/desktop.yaml
fi

echo "Checking for iconsets"
if [ ! -f /home/user/config/iconsets.json ]; then
  cp /app/.defaults/iconsets.json /home/user/config/iconsets.json
  sudo chown user:user /home/user/config/iconsets.json
fi

echo "Checking for repositories"
if [ ! -f /home/user/config/repositories.json ]; then
  cp /app/.defaults/repositories.json /home/user/config/repositories.json
  sudo chown user:user /home/user/config/repositories.json
fi

echo "Checking for services"
if [ ! -f /home/user/config/services.yaml ]; then
  cp /app/.defaults/services.yaml /home/user/config/services.yaml
  sudo chown user:user /home/user/config/services.yaml
fi


echo "Checking if running in Docker"
if [ -f /.dockerenv ]; then
	export IN_DOCKER=true
fi

echo "Starting server process"
export STARTDATE=$(date +%s)

if [ "$NODE_ENV" == "production" ]; then
  cd /app/dist
  node main --config=/home/user/config/config.yaml
else
  npm run dev
fi
