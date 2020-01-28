# Python library `discord-sentry-reporting`

`discord-sentry-reporting` takes a discord.py `Client` object, and makes it so errors are reported to [Sentry](https://sentry.io/).

## Installing

The name of the PyPI package is `discord-sentry-reporting`.

## Usage

Here is an example bot that uses it:

```python
import discord
from discord_sentry_reporting import use_sentry

bot = discord.AutoShardedClient()

use_sentry(
    bot,
    dsn="your-dsn@sentry.io"
    # pass any other keyword arguments here
    # they will be passed to the Sentry SDK
)


@bot.event
async def on_message(message):
    assert 1 == 0
    # resulting AssertionError will be reported!

bot.run("token")
```
