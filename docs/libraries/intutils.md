# Python Library `intutils`

`intutils` is a small library for manipulating integers. If you have any functions that deal with integers, *please* feel free to add them.

## Installation

The name of the package on PyPI is `intutils`.

!!! tip "Installing Packages"
    See [this guide](https://packaging.python.org/tutorials/installing-packages/) for how to install packages.

## Usage

Start by importing the library. From there, you can use any of these functions:

| **Function**                                                  | **Description**                         | **New In** |
|---------------------------------------------------------------|-----------------------------------------|------------|
| `is_even(number: int) -> bool`                                | Returns if the passed number is even.   | 1.0.0      |
| `is_odd(number: int) -> bool`                                 | Returns if the passed number is odd.    | 1.0.0      |
| `is_int(testable: object) -> bool`                            | Returns if the passed object is an int. | 1.1.0      |
| `divisible_by_no_decimals(number: int, divisor: int) -> bool` | Returns if the passed number can be divided by the other passed number without the result containing decimals. | 1.1.0 |
| `def sort_greatest_to_least(mylist: list) -> list:`           | Returns the passed integer list, sorted from greatest to least. | 2.0.0 |

!!! note "Type Hints"
    The functions listed in the table all have type hints. I suggest you use them, but they aren't forced.

## Source

The source can be found [on GitHub](https://github.com/rdilweb/intutils).
