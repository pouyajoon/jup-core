#!/bin/sh

# git add .
# git commit -a -m "$1"
# git push origin master

npm run build

cp -r dist/* publish/
cp -r package.json publish/
cp -r README.md publish/
npm version minor
npm publish
