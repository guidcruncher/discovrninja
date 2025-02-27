#!/bin/sh

if [ "$UID" != "0" ] && [ "$GID" != "0" ]; then
groupmod -g $GID user
usermod -u $UID -g $GID user
  if [ "$NODE_ENV" == "production" ]; then
    chown -R -v -h $UID /app/cache /app/dist /app/themes /app/config
    chown -v -h $UID /app/userpasswd /app/start.sh /app/useradd
    chgrp -R -v $GID /app/cache /app/dist /app/themes /app/config
    chgrp -v $GID /app/userpasswd /app/start.sh /app/useradd
  fi
fi

if [[ -S /var/run/docker.sock ]]; then
  dockergid=$(stat -c '%g' '/var/run/docker.sock')

  if ! getent group "$dockergid" >/dev/null; then
    addgroup -g "$dockergid" docker
  fi

  dockergname=$(getent group "$dockergid" | cut -d: -f1)

  if ! groups user | grep -q  "\b${dockergname}\b"; then
    addgroup -g "$dockergid" user
  fi
fi
 
su -p -c /app/start.sh user
