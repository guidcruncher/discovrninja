#!/bin/sh
cd /home/app

kill $(cat /home/dnsmasq.pid)
rm /home/dnsmasq.pid

dnsmasq --conf-file=/home/app/config/dnsmasq.conf --pid-file=/home/dnsmasq.pid
