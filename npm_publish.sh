#!/bin/sh

git add .
git commit -a -m "$1"
git push origin master
npm version minor
npm publish
