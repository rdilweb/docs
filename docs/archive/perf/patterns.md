# Patterns

Here are the patterns the tool recognises, and how to fix them.

## Enumeration - Slow Duplicate Checking

You are using a slow way of duplicate checking between 2 lists.
Use [this](https://stackoverflow.com/a/17735466) instead.

## String Joining

Joining strings can be very slow, even when the strings are small.

BAD:

```python
mystring += "other string"
```

```python
string = string1 + string2
```

GOOD:

```python
myvar = 2

string = "some variable: %s" % str(myvar)
```

```python
myname = "Reece"
mylastname = "Dunham"

# .join is way faster then a lot of methods commonly used!
myfullname = " ".join([myname, mylastname])
```

## Importing

Every time you import a module in Python, a process is run that essentially pulls the module in.
The only problem with it is that it has to actually pull all the methods in, which can be time consuming.
For example, here is the result of trying to import a few well known and widely used packages:

```python
>>> import timeit
>>> timeit.timeit("import sys")
0.727546946000075
>>> timeit.timeit("import os")
0.38068347300577443
>>> timeit.timeit("import six")
0.2798340549925342
>>> timeit.timeit("import sys, os")
0.9899256650096504
>>> timeit.timeit("import os, sys, six")
1.3059439809876494
```

As you can see, just importing 3 packages can take a full second!

So when possible, you should limit the number of imports you have.
Any file that has more then 15 will be flagged by Perf.
