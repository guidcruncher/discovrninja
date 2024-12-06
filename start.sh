#!/bin/sh
cd /home/app

if [ ! -z "$TZ" ]; then
target="/usr/share/zoneinfo/$TZ"
  if [ -f "$target" ]; then
    cp /usr/share/zoneinfo/"$TZ" /etc/localtime
  fi
fi

if [ ! -f /home/app/config/config.yaml ]; then
  cp /home/app/config.default /home/app/config/config.yaml
fi

if [ ! -f /home/app/config/desktop.yaml ]; then
  cp /home/app/desktop.default /home/app/config/desktop.yaml
fi

if [ ! -f /home/app/config/services.yaml ]; then
  cp /home/app/services.default /home/app/config/services.yaml
fi

export NODE_CONFIG_DIR=/home/app/config

export NODE_ENV=production

node server/main --config=/home/app/config/config.yaml

