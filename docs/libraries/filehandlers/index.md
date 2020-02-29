# Python Library `filehandlers`

`filehandlers` is a library for working with files.

## Installation

The name of the package on PyPI is `filehandlers`.

!!! tip "Installing Packages"
    See [this guide](https://packaging.python.org/tutorials/installing-packages/) for how to install packages.

## Usage

See the subpages for more information.

## Concept

filehandlers is built on a relatively simple model.

### File

A file is represented with an instance of `filehandlers.AbstractFile`.

!!! important "Initializing an `AbstractFile`"
    The actual file *will not be changed or even inspected* when creating an instance of `AbstractFile`.

### Manipulation

Now, say you want to change that file... that is where the `filehandlers.FileManipulator` class comes in.
You need to pass the `AbstractFile` instance when creating a `FileManipulator` because
otherwise the manipulator can't do it's job.

The manipulator includes code for a number of common functions that could be replicated with other code, but the goal of creating
this model/API is to simplify it!

### Simple Example

Here is a quick example that shows how to use filehandlers to write to a file:

```python
# load in filehandlers
from filehandlers import FileManipulator, AbstractFile

# define the file
my_cool_file = AbstractFile("log.txt")

# create FileManipulator
my_cool_files_changer = FileManipulator(my_cool_file)

# write data to file 5 times
for i in range(5):
    my_cool_files_changer.wrap_file().write("Message #" + i + ": " + debug_message)
```

and that is it!

You can see the full API documentation [here](./api.md).

## Source

The source can be found [on GitHub](https://github.com/RDIL/filehandlers).
