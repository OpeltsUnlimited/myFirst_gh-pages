#!/bin/bash
shopt -s extglob
rm -r gh-pages/!(.git)
cp -r build/* gh-pages/