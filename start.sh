#!/bin/bash

caddy start -c /etc/caddy/Caddyfile --pidfile /etc/caddy/caddy.pid

dnsmasq -k -a 0.0.0.0 --port=5353 --hostsdir=/etc/dnsmasq.d/discovered-hosts/  --resolv-file=/etc/dnsmasq.d/upstream-servers.conf
