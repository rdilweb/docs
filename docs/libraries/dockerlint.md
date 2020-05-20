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

Finally, run `python3 main.py [OPTIONS]`. See the options section below for more details.

### Options

Here are some of the options you can pass to the command line interface:

* `-d PATH/TO/DOCKERFILE`, `--dockerfile PATH/TO/DOCKERFILE` - The path to the Dockerfile (**required**).
* `-R`, `--junit` - Pass this to enable the creation of JUnit reports.
* `--help` - Show the help menu and exit.
- `--version` - Show the program version and exit.
