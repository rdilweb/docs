# Getting Started with LiquidBT

Getting started is relatively simple. Just install, configure, and use.

## Prerequisits

LiquidBT requires Python 3.4 or later to be installed on your system.

## Install

The name of the package on PyPI is `liquidbt`.

!!! tip "Installing Packages"
    See [this guide](https://packaging.python.org/tutorials/installing-packages/) for how to install packages.

## Migrating From setuptools

If you are using setuptools right now, you can change over pretty easily.

1. [Install](#install) LiquidBT.
2. Change the directory that the source is in (*not* the root directory)'s
name to include a `.s` at the end. Don't make it a file, just add the `.s` suffix
to the folder's name. This tells LiquidBT that you want this to be the source directory.
3. You will need to rewrite your `setup.py` to fit LiquidBT's API.
First, copy the arguments you pass to `setuptools.setup`, and save it somewhere
you can use it. *You will need them later*. Once you do this, you can delete the contents
of your `setup.py`, and proceed to step 4.
4. If your saved setuptools config has any of these fields, remove them from your backup:
`name`, `include_package_data`, `zip_safe`, `packages`.
5. Add this code, replacing the placeholders with your own actual data:

```python
import liquidbt
# the build plugin contains the core functionality
from liquidbt.build_tools.typeClasses import (
    PackageConfig, SourceDist, WheelBinaryDist
)  # most packages opt to make source dists and wheel dists

package_one = BuildConfiguration(
    "name-of-package-for-pypi",
    # PASTE the setuptools args you saved here

    # set the dist formats to build:
    formats=[SourceDist(), WheelBinaryDist()]
)

"""
The plugins all handle functionality, liquidbt.main
is just a wrapper to delegate tasks to the loaded plugins.
You can also add any plugins to this list after build,
since most plugins require the build plugin to be in memory
for one reason or another.
"""
liquidbt.main(packages=[package_one])
```

You have now migrated. You can now run `setup.py` to build,
and if you add any plugins that add commands you will be
able to run `setup.py somePluginAddedCommand`.
