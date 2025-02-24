#!/bin/bash

sed  -e $'$a\\\n' $(find /home/node/src/client/public/js/lib/ -type f -name "*.js" | sort) >/home/node/dist/client/public/js/main.js
 
printf "%s\n%s" "$(sed  -e $'$a\\\n' $(find /home/node/src/client/public/js/lib/ -type f -name "*.min.js" | sort))" "$(sed  -e $'$a\\\n' $(find /home/node/src/client/public/js/lib/ -type f -name "*.js" -not -name "*.min.js" | sort) | npx uglifyjs -c))" > /home/node/dist/client/public/js/main.min.js



