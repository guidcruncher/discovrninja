#!/bin/sh
echo "Setting up directories"
cd "$APP_BASE"
mkdir -p "$DNS_CFG"
mkdir -p "$CADDY_CFG"

if [ ! -z "$TZ" ]; then
echo "Configuring timezone"
target="/usr/share/zoneinfo/$TZ"
  if [ -f "$target" ]; then
    cp /usr/share/zoneinfo/"$TZ" /etc/localtime
  fi
fi

echo "Checking for theme"
if [ ! -f "$THEME_BASE"/bootstrap5.3.3/bootstrap.min.css ]; then
  mkdir -p "$THEME_BASE"/bootstrap5.3.3/
  cp ./client/themes/bootstrap5.3.3/* "$THEME_BASE"/bootstrap5.3.3/ -R
fi

echo "Checking for configuration" 
if [ ! -f "$NODE_CONFIG_DIR"/config.yaml ]; then
  cp /home/node/.defaults/config.yaml "$NODE_CONFIG_DIR"/config.yaml
fi

echo "Checking for desktop" 
if [ ! -f "$NODE_CONFIG_DIR"/desktop.yaml ]; then
cp /home/node/.defaults/desktop.yaml "$NODE_CONFIG_DIR"/desktop.yaml
fi 

echo "Checking for iconsets"
if [ ! -f "$NODE_CONFIG_DIR"/iconsets.json ]; then
  cp /home/node/.defaults/iconsets.json "$NODE_CONFIG_DIR"/iconsets.json
fi

echo "Checking for repositories"
if [ ! -f "$NODE_CONFIG_DIR"/repositories.json ]; then
  cp /home/node/.defaults/repositories.json "$NODE_CONFIG_DIR"/repositories.json
fi

echo "Checking for services"
if [ ! -f "$NODE_CONFIG_DIR"/services.yaml ]; then
  cp /home/node/.defaults/services.yaml "$NODE_CONFIG_DIR"/services.yaml
fi

echo "Checking if running in Docker"
if [ -f /.dockerenv ]; then
	export IN_DOCKER=true
fi

echo "Determining build version"
export PACKAGE_VERSION=Development
if [ -f "$APP_BASE"/package.json ]; then
 export PACKAGE_VERSION=$(cat "$APP_BASE"/package.json | jq ".version" -r)
fi

echo "Determining build date"
export BUILDDATE=$(date +%s)
if [ -f "$APP_BASE"/builddate ]; then
export BUILDDATE=$(cat "$APP_BASE"/builddate)
fi

echo "Starting server process"
export STARTDATE=$(date +%s)
cd "$APP_BASE"
node main --config="$NODE_CONFIG_DIR"/config.yaml
