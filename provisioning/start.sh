#!/bin/sh

echo "Setting up directories"
cd /app/dist
mkdir -p "$NODE_CONFIG_DIR"/dnsmasq.d
mkdir -p "$NODE_CONFIG_DIR"/caddyfile.d

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
if [ ! -f "$NODE_CONFIG_DIR"/config.yaml ]; then
  cp /app/.defaults/config.yaml "$NODE_CONFIG_DIR"/config.yaml
  sudo chown user:user "$NODE_CONFIG_DIR"/config.yaml
fi

echo "Checking for desktop" 
if [ ! -f "$NODE_CONFIG_DIR"/desktop.yaml ]; then
  cp /app/.defaults/desktop.yaml "$NODE_CONFIG_DIR"/desktop.yaml
  sudo chown user:user "$NODE_CONFIG_DIR"/desktop.yaml
fi

echo "Checking for iconsets"
if [ ! -f "$NODE_CONFIG_DIR"/iconsets.json ]; then
  cp /app/.defaults/iconsets.json "$NODE_CONFIG_DIR"/iconsets.json
  sudo chown user:user "$NODE_CONFIG_DIR"/iconsets.json
fi

echo "Checking for repositories"
if [ ! -f "$NODE_CONFIG_DIR"/repositories.json ]; then
  cp /app/.defaults/repositories.json "$NODE_CONFIG_DIR"/repositories.json
  sudo chown user:user "$NODE_CONFIG_DIR"/repositories.json
fi

echo "Checking for services"
if [ ! -f "$NODE_CONFIG_DIR"/services.yaml ]; then
  cp /app/.defaults/services.yaml "$NODE_CONFIG_DIR"/services.yaml
  sudo chown user:user "$NODE_CONFIG_DIR"/services.yaml
fi

echo "Checking if running in Docker"
if [ -f /.dockerenv ]; then
	export IN_DOCKER=true
fi

echo "Starting server process"
export STARTDATE=$(date +%s)

if [ "$NODE_ENV" == "production" ]; then
  cd /app/dist
  node main --config="$NODE_CONFIG_DIR"/config.yaml
else
  npm run dev
fi
