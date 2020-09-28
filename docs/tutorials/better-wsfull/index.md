# Better workspace-full

Better workspace-full is a fork of Gitpod's workspace-full (see [gitpod-io/workspace-images](github:gitpod-io/workspace-images)).

It has multiple quality-of-life changes over the normal workspace-full, and is a ton smaller.

## OS

Unlike workspace-full, better-wsfull uses Debian instead of Ubuntu, which saves roughly 300 megabytes from the final image.

## Using

To use the image, start a workspace in Gitpod, and create a `.gitpod.yml` file if you don't have one already.

In the file, add this line: `image: rdilpickle/better-wsfull`.
If you already have an `image` object, just replace it with the string definition.
Next commit and push your changes.

!!! warning "Applying the image"
    The image will not take effect until you create a new workspace from the repository after
    you commit the `.gitpod.yml`.

## Language/Framework Support

Here are some languages and frameworks we may or may not support.

### Python

We support Python just like the upstream image.

One change we have made is we don't use Pyenv, but instead use Python as a base image.

This fixes a lot of issues caused by Pyenv.

### Node.js

Node.js comes preinstalled, along with [npm](https://npmjs.com/), [npx](https://github.com/npm/npx/), [TypeScript (tsc)](https://typescriptlang.org/), and [Yarn v1](https://classic.yarnpkg.com/).

### C

`gdb` comes preinstalled.

### Java

Java 8 (a recent AdoptOpenJDK version), Maven, and Gradle come preinstalled.
