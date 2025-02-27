#!/bin/sh

if [ ! -f /home/app/config/Caddyfile ]; then
  cp /home/defaults/Caddyfile.default /home/app/config/Caddyfile
fi

caddy fmt --overwrite /etc/caddy/Caddyfile
caddy reload --config /etc/caddy/Caddyfile
