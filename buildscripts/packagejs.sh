#!/bin/bash

cat $(find ./src/client/public/js/lib/ -type f -name "*.js" | sort) >./dist/client/public/js/main.js

printf "%s\n%s" "$(cat $(find ./src/client/public/js/lib/ -type f -name "*.min.js" | sort))" "$(cat $(find ./src/client/public/js/lib/ -type f -name "*.js" -not -name "*.min.js" | sort) | npx uglifyjs -c -m))" > ./dist/client/public/js/main.min.js



