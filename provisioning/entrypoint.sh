#!/bin/sh

if [[ -S /var/run/docker.sock ]]; then
  dockergid=$(stat -c '%g' '/var/run/docker.sock')

  if ! getent group "$dockergid" >/dev/null; then
    groupmod -g $dockergid docker
  fi

  dockergname=$(getent group "$dockergid" | cut -d: -f1)

  if ! groups user | grep -q  "\b${dockergname}\b"; then
    addgroup -g "$dockergid" user
  fi
fi

#if [ "$UID" != "0" ] && [ "$GID" != "0" ]; then
#  groupmod -g $GID user
#  usermod -u $UID -g $GID user
#fi

export PACKAGE_VERSION=Development
if [ -f /app/dist/package.json ]; then
  export PACKAGE_VERSION=$(cat /app/dist/package.json | jq ".version" -r)
fi

export BUILDDATE=$(date +%s)
if [ -f /app/dist/builddate ]; then
  export BUILDDATE=$(cat /app/dist/builddate)
fi

ls -lR /app/provisioning/

if [ "$NODE_ENV" == "production" ]; then
  sudo -u user -E /app/start.sh
else
  sudo -u user -E /app/provisioning/start.sh
fi
