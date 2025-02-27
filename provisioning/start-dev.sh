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
