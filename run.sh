#!/bin/bash

export CADDYCONFIG="$PWD""/caddy/caddy.d"
export DNSHOSTS="$PWD""/dnsmasq/dnsmasq.d"

gulp dev
