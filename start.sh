#!/bin/bash
cd /home/app

if [ ! -z "$TZ" ]; then
target="/usr/share/zoneinfo/$TZ"
  if [ -f "$target" ]; then
    cp /usr/share/zoneinfo/"$TZ" /etc/localtime
  fi
fi

export NODE_CONFIG_DIR=/home/app/config

export NODE_ENV=production

node server/main --config=/home/app/config/config.yaml

