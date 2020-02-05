# Perf

<div align="center">
    <img src="/assets/PyPerf_logo.png" width=300 height=300 alt="Perf Logo" />
</div>

Python optimization can be a key to making your code, a web app, data analyzer, machine learning algorithim, or whatever it is, run at its full potential.

Don't frustrate people by building slow software, build software, and let Perf monitor performance.

## Installing

Since Perf is still in development, this option is not yet usable.

Running this command is all you need to do:

```bash
$ python3 -m pip install perf
```

That will install the tool from the pre-built binaries.
Finally, you can run this command to run the tool against your source:

```bash
$ perf -d path/to/source
```

or, for a single file:

```bash
$ perf -f file.py
```

## Source

The source can be found [on GitHub](https://github.com/RDIL/Perf).
