#!/bin/bash

docker buildx create --name discovrninja-builder --node discovrninja-builder --platform linux/arm64 --use --bootstrap
docker buildx prune --builder discovrninja-builder -f,




docker buildx build --pull --no-cache --load --platform linux/arm64 --builder discovrninja-builder -t "guidcruncher/discovrninja:development" .
docker buildx rm discovrninja-builder -f



oõdocker compose up f
