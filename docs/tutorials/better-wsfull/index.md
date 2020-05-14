# Better workspace-full

Better workspace-full is a fork of Gitpod's workspace-full (see [gitpod-io/workspace-images](github:gitpod-io/workspace-images)).

It has multiple quality-of-life changes over the normal workspace-full.

## Using

To use the image, start a workspace in Gitpod, and create a `.gitpod.yml` file if you don't have one already.

In the file, add this line: `image: rdilpickle/better-wsfull`.
If you already have an `image` object, just replace it with the string definition.
Next commit and push your changes.

!!! warning "Application of Image"
    The image **will not take effect until you create a new workspace from the repository after
    you commit the `.gitpod.yml`.

## Language/Framework Support

Here are some languages and frameworks we may or may not support.

## Python

We support Python just like the upstream image.

One change we have made is we don't use Pyenv, but instead build our version of Python from source.

This fixes a lot of issues caused by Pyenv.

## Apache2, PHP, Nginx

Apache2, PHP, and Nginx have been removed in an effort to save space. You can always add them back.

## Ruby

Ruby comes preinstalled, along with [RVM](https://rvm.io/), [RubyGems](https://rubygems.org/), [Bundler](https://bundler.io/), and Solargraph.

## Go

Golang comes preinstalled, along with a number of handy packages that can aide in your development experience.

## Node.js

Node.js comes preinstalled, along with [npm](https://npmjs.com/), [npx](https://github.com/npm/npx/), [TypeScript (tsc)](https://typescriptlang.org/), and [Yarn v1](https://classic.yarnpkg.com/).

## Homebrew

[Homebrew for Linux](https://brew.sh/) comes preinstalled.
