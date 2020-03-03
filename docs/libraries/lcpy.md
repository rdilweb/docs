# Python Library `lcpy`

`lcpy`, or lowercase values in Python, is a simple library that allows you to use values like `true` instead of `True`.
I created this when I was teaching a student Python who kept forgetting to put in proper uppercase letters.
It is super simple, and has very few drawbacks.

## Installation

The name of the package on PyPI is `lc-py`. (Sorry, `lcpy` was already taken!)

!!! tip "Installing Packages"
    See [this guide](https://packaging.python.org/tutorials/installing-packages/) for how to install packages.

## Usage

To use the library, you will first need to put this at the top of any Python files that you want to use the lowercase values in:

```python
from lcpy import *
```

and that is basically it, you can now use it.

### Single-imports

Some static analysis tools don't enjoy it when you use `*` imports.
You can import single values by doing:

```python
# replace false with the value you want
from lcpy import false
```

## Values

If you read the [usage section](#usage) and now have a basic understanding, here are the values you can use:

* `true`
* `false`
* `none`
* `exception` (**new** in v1.1.0)

The following values can only be used in `v2.0.0` and above:

* `indexerror`
* `environmenterror`
* `eoferror`
* `oserror`
* `processlookuperror`
* `fileexistserror`
* `filenotfounderror`
* `floatingpointerror`
* `recursionerror`
* `referenceerror`
* `runtimeerror`
* `arithmeticerror`
* `assertionerror`
* `attributeerror`
* `baseexception`
* `blockingioerror`
* `brokenpipeerror`
* `buffererror`
* `childprocesserror`
* `connectionabortederror`
* `connectionrefusederror`
* `connectionreseterror`
* `interruptederror`
* `isadirectoryerror`
* `ioerror`
* `importerror`
* `indentationerror`
* `keyerror`
* `lookuperror`
* `modulenotfounderror`

!!! warning "Directly Using v2.0.0"
    I strongly suggest you don't use v2.0.0, instead
    opt for v2.0.1 or higher. v2.0.0 has broken links
    to documentation, and it helps for users to know
    what to read for more information about the library.

## Source

The source can be found [on GitHub](https://github.com/RDIL/lcpy).
