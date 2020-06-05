# Python Library `dockerlint`

dockerlint is a tool that allows you to analyze Docker images for issues related to size and functionality.

## Features

* Very quick
* Works on Linux and macOS (Windows support coming soon)
* Analyze images based on AlpineLinux, Ubuntu, Debian, and more
* Export results in the popular JUnit format

## Requirements

To run the tool, you will need to have Python 3 and GNU Make installed on your system.

## Usage

To build the tool, download it, and run `make install-deps && make` (first time setup).
This will build the needed internals into Python packages so it can run.

Finally, run `python3 main.py --help` to see what you can do with dockerlint!
