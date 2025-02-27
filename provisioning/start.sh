#!/bin/sh

if [ "$UID" != "0" ] && [ "$GID" != "0" ]; then
  groupmod -g $GID node
  usermod -u $UID -g $GID node
  find /home/node/dist -exec chown -v -h $UID '{}' \;
  find /home/node/dist -exec chgrp -v $GID '{}' \;
fi

dockergid=$(stat -c '%g' '/var/run/docker.sock')

if ! getent group "$dockergid" >/dev/null; then
	addgroup --gid "$dockergid" docker
fi

dockergname=$(getent group "$dockergid" | cut -d: -f1)

if ! groups node | grep --quiet "\b${dockergname}\b"; then
	usermod --append --groups "$dockergid" node
fi

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

if [ "$NODE_ENV" == "production" ]; then
  cd /home/node/dist
  node main --config=/home/node/config/config.yaml
else
  npm run dev
fi
