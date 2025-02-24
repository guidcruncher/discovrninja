#!/bin/bash

cat $(find /home/node/src/client/public/js/lib/ -type f -name "*.js" | sort) >/home/node/dist/client/public/js/main.js

printf "%s\n%s" "$(cat $(find /home/node/src/client/public/js/lib/ -type f -name "*.min.js" | sort))" "$(cat $(find /home/node/src/client/public/js/lib/ -type f -name "*.js" -not -name "*.min.js" | sort) | npx uglifyjs -c -m))" > /home/node/dist/client/public/js/main.min.js



