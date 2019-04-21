#!/bin/sh


npm run build
npm version patch

cp -r dist/* publish/
cp -r package.json publish/
cp -r README.md publish/

git add .
git commit -a -m "$1"
git push origin master

cd publish
npm publish
cd ..
