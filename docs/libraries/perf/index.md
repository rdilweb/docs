# Perf

<div align="center">
    <img src="/assets/images/Perf_logo.png" width=300 height=300 alt="Perf Logo" />
</div>

!!! danger "Deprecation"
    This project has reached the [*deprecated*](../../about/support-policy.mddeprecated-unsupported) phase, and will not be getting any new features.
    It will be officially archived on September 1st, 2020.

Python optimization can be a key to making your code, a web app, data analyzer, machine learning algorithim, or whatever it is, run at its full potential.

Don't frustrate people by building slow software, build software, and let Perf monitor performance.

## Features

* Fast, efficient checking
* Pyflakes integration built-in
* Easy to use

## Installing

Running this command is all you need to do:

```bash
$ python3 -m pip install analyze-perf
```

That will install the tool from the pre-built binaries.
Finally, you can run this command to run the tool against your source:

```bash
$ analyze-perf -d path/to/source
```

or, for a single file:

```bash
$ analyze-perf -f file.py
```

## Source

The source can be found [on GitHub](https://github.com/RDIL/Perf).
