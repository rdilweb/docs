# npm Library `static-server-rdil`

A simple static web server.

??? question "Reece, why should I use this one over any of the others?"
    This is a fair question. As of checking on January 10th 2020, there
    are 68 pages of results for searching 'static server' on npm. This
    static server has many features, including (but not limited to):

    * It has emojis.
    * It automatically renders Markdown into HTML.
    * It has a lot of customizable components (such as the last two features!).
    * All production code is run through [Babel](https://babeljs.io).
    * It is still being actively developed.

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

## Configuration

To configure specific behavior, you can pass any of these options via the command line (all are optional):

* `--port <PORT>`: port number, defaults to `3000`.
* `--root <DIRECTORY>`: root folder to serve, defaults to the working directory.
* `--no-request-logging`: if this option is present, `Serving /<path>` messages will not be outputted to the console.
* `--no-emojis`: if this option is present, emojis will not be outputted to the console.
* `--ignore-errors`: if this option is present, server errors won't be outputted to the console.
* `--enhanced-security`: if this option is present, headers for extra security will be sent with responses.
* `--no-render-markdown`: if this option is present, Markdown to HTML rendering will be disabled.
* `--quiet`: if this option is present, request logging and errors will be silenced.

(If an option doesn't have a visible input after it, it is a switch.)

### Example

```bash
static-server --port 5001 --root site_output/
```
