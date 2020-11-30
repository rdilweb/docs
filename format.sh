#!/bin/bash

# todo: can we find a neater way to do this?

npm i -g prettier
prettier --write **/*.{js,html,css,md,json,yml}
prettier --write **/**/*.{js,html,css,md,json,yml}
prettier --write **/**/**/*.{js,html,css,md,json,yml}
