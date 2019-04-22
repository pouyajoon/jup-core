#!/bin/sh


npm run build

cp -r dist/* publish/
cp -r package.json publish/
cp -r tslint.json publish/
cp -r tsconfig.json publish/
cp -r README.md publish/

git add .
git commit -a -m "$1"
git push origin master

npm version patch

cd publish
npm publish
cd ..
