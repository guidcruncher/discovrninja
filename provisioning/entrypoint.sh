#!/bin/sh

if [ "$UID" != "0" ] && [ "$GID" != "0" ]; then
groupmod -g $GID node
usermod -u $UID -g $GID node
find /home/node/dist -exec chown -v-h $UID '{}' \;
find /home/node/dist -exec chgrp -v$GID '{}' \;
fi

dockergid=$(stat -c '%g' '/var/run/docker.sock')

if ! getent group "$dockergid" >/dev/null; then
addgroup --gid "$dockergid" docker
fi

dockergname=$(getent group "$dockergid" | cut -d: -f1)

if ! groups node | grep --quiet "\b${dockergname}\b"; then
usermod --append --groups "$dockergid" node
fi

sudo -u node "$@"
