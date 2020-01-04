#!/usr/bin/env bash

set -eu

cd ../conan-conquering-calculator
yarn
yarn run build
cp -r dist/* ../conan-conquering-calculator-demo/
