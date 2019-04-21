#!/bin/sh

# git add .
# git commit -a -m "$1"
# git push origin master

npm run build
npm version patch

cp -r dist/* publish/
cp -r package.json publish/
cp -r README.md publish/

cd publish
npm publish
cd ..
