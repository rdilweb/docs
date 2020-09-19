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

=== "npm"
    ```bash
    npm install -g static-server-rdil
    ```

=== "Yarn"
    ```bash
    yarn global add static-server-rdil
    ```

=== "npx"
    ```bash
    npx static-server-rdil [OPTIONS HERE]
    ```

## Usage

Run this in a terminal:

```bash
static-server-rdil [OPTIONS HERE]
```

## Configuration

To configure specific options, please see the help menu by running `static-server-rdil --help`.

### Example

```bash
static-server-rdil --port 6001 --root site_output/
```

## Source

The source can be found [on GitHub](https://github.com/rdilweb/static-server).
