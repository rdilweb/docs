# npm Library `static-server-rdil`

Simple static web server.

## Installing

Run this in a terminal:

```bash
npm i -g static-server-rdil
```

## Usage

Run this in a terminal:

```bash
static-server [OPTIONS HERE]
```

Or, for more portability, use this command (with this method you won't need to install it like described above):

```bash
npx static-server-rdil [OPTIONS HERE]
```

Arguments (all are optional):

* `--port`: [`Number`] port number, defaults to `3000`.
* `--root`: [`String`] root folder, defaults to working directory.
* `--no-request-logging`: [`Switch`] if this option is present, `Serving /<path>` messages will not be outputted to the console.
* `--no-emojis`: [`Switch`] if this option is present, emojis will not be outputted to the console.

For example:

```bash
static-server --port 5001 --root site_output/
```
