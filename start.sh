  #!/bin/bash

cp /usr/share/zoneinfo/"$TZ" /etc/localtime

echo "nameserver 9.9.9.9" > /app/dnsmasq/upstream-servers.conf
echo "nameserver 149.112.112.112" >> /app/dnsmasq/upstream-servers.conf

caddy start -c /app/caddy/Caddyfile --pidfile /app/caddy/caddy.pid

dnsmasq --conf-file=/app/dnsmasq/dnsmasq.conf --conf-dir=/app/dnsmasq/dnsmasq.d,*.conf -a 0.0.0.0 --port=5353 --hostsdir=/app/dnsmasq/dnsmasq.d/  --resolv-file=/app/dnsmasq/upstream-servers.conf

npx tsx ./src/app.ts
