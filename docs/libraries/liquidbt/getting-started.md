# Getting Started with LiquidBT

Getting started is relatively simple. Just install, configure, and use.

## Prerequisits

LiquidBT requires Python 3.4 or later to be installed on your system.

## Install

To install, execute the command listed under your system's name:

??? note "macOS"
    `sudo python3 -m pip install --upgrade liquidbt`

??? note "Linux"
    `python3 -m pip install --upgrade --user liquidbt`

??? note "Windows"
    `python -m pip install --upgrade --user liquidbt`

## Migrating From setuptools

If you are using setuptools right now, you can change over pretty easily.

1. [Install](#install) LiquidBT.
2. Change the directory that the source is in (*not* the root directory)'s
name to include a `.s` at the end. Don't make it a file, just add the `.s` suffix
to the folder's name. This tells Liquid that you want this to be the source directory.
3. You will need to basically rewrite your `setup.py` to fit Liquid's API.
First, copy the arguments you pass to `setuptools.setup`, and save it somewhere
you can use it. You will need it later. Once you do this, you can delete the contents
of your `setup.py`, and proceed to step 4.
4. If your saved setuptools config has any of these fields, remove them from your backup:
`name`, `include_package_data`, `zip_safe`, `packages`.
5. Add this code, replacing the placeholders with your own actual data:

```python
import liquidbt
# the build plugin contains the core functionality
from liquidbt_plugin_build import (
    BuildConfiguration, BuildPackageSet, SourceDist,
    WheelBinaryDist, Build
)  # most packages opt to make source dists and wheel dists

theset = BuildPackageSet()

config = BuildConfiguration(
    "packagename",
    # PASTE the setuptools args you saved here
)
config.add_format(SourceDist())
config.add_format(WheelBinaryDist())

# you can create a new BuildConfiguration for
# every package if this is a monorepo, and
# add them here
theset.add(config)

# the plugins all handle functionality, liquidbt.main
# is just a wrapper to delegate tasks to the loaded
# plugins.
# you can also add any plugins to this list after build,
# since most plugins require the build plugin to be in memory
# for one reason or another.
liquidbt.main(plugins=[
    Build(theset)
])
```

You have now migrated. You can now run `setup.py` to build,
and if you add any plugins you can run `setup.py somePluginAddedCommand`.