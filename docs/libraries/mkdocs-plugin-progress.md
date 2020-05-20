# mkdocs-plugin-progress

[mkdocs-plugin-progress](https://github.com/rdilweb/mkdocs-plugin-progress) is a plugin that outputs build updates in real time to the console.

## Installation

The name of the package on PyPI is `mkdocs-plugin-progress`.

!!! tip "Installing Packages"
    See [this guide](https://packaging.python.org/tutorials/installing-packages/) for how to install packages.

Next, add the following lines to your `mkdocs.yml`:

```yaml
plugins:
  - search
  - progress
```

!!! warning "Remember to re-add the `search` plugin"
    If you have no `plugins` entry in your config file yet, you'll likely also
    want to add the `search` plugin. MkDocs enables it by default if there is
    no `plugins` entry set.

## Usage

After completing the steps above, try running the build, and you should see the output!

## Source

The source can be found [on GitHub](https://github.com/rdilweb/mkdocs-plugin-progress).
