#!/bin/sh
id

if [ "$UID" != "0" ] && [ "$GID" != "0" ]; then
groupmod -g $GID user
usermod -u $UID -g $GID user
find /app/ -exec chown -v-h $UID '{}' \;
find /app/ -exec chgrp -v$GID '{}' \;
fi

if [[ -S /var/run/dockeor.sock ]]; then
dockergid=$(stat -c '%g' '/var/run/docker.sock')

if ! getent group "$dockergid" >/dev/null; then
addgroup -g "$dockergid" docker
fi

dockergname=$(getent group "$dockergid" | cut -d: -f1)

if ! groups node | grep -q  "\b${dockergname}\b"; then
addgroup -g "$dockergid" node
fi
fi

sudo -u user "$@"
