#!/bin/bash

for file in ./client/helpers/*.js; do
name="$(basename $file)"
namenoext="${name::-3}"
js="$(sed $file -e "s/module.exports = (Handlebars) => {/function _$namenoext(Handlebars) {\n/g")"
echo "$js"
echo "_$namenoext(Handlebars);"
echo 
done

