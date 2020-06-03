# LiquidBT Plugins

LiquidBT plugins are classes that extend or modify functionality of LiquidBT.

## Use a Plugin

To use a plugin, you need to:

1. Import it at the top of your LiquidBT configuration file.
2. Create an instance of the plugin's class in the `plugins` list that you pass
to `liquidbt.main`.
3. The plugin will be loaded!

## Make a Plugin

Making a plugin is simple.

1. Create a new Python package following the naming scheme `liquidbt_plugin_pluginname`.
2. In your `__init__.py`, add this import:
```python
from liquidbt.plugins import Plugin
```
3. Add a `class` with the name of your plugin that extends the forementioned `Plugin` class.
In this class, you can override any of the mentioned fields in the up-to-date API reference.
4. Instruct your users to import and use your plugin. Easy as that.

### Transformer Plugins

A transformer plugin is a plugin that can change the code
(*not the source*, the code that is compiled by setuptools).

To make a transformer, you need to set your plugin up like this:

```python
from liquidbt.plugins import Plugin

class MyPlugin(Plugin):
    def transform(code):
        # code will be a multiline string of the source code

        # the string returned will be given to setuptools
        return code

    def load(ctx):
        self.ctx = ctx
        self.ctx.register_transformer(self.transform)
```

To change the code, you will need to add the `process_code(code: str) -> str` method to the class.
This method accepts the parameter `code`, which is a multiline string of the current file being evaluated's
contents. It must return the changed version of the code (also a multiline string).

!!! tip "Avoiding Transformation"
    If you don't need to modify the file's contents,
    (for example if you make a plugin that comments
    out all code (bear with me here), and you want to
    skip certain files) you can just return the `code`
    parameter, which will ensure that your plugin doesn't
    change anything.
