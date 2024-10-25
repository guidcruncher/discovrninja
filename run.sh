#!/bin/bash

export CADDYCONFIG="$PWD""/caddy/caddy.d"
export DNSHOSTS="$PWD""/dnsmasq/discovered-hosts"

gulp dev
