# npm Library `parse-repr`

A lightweight Python `__repr__` parser for JavaScript.

## Installing

Run this in a terminal:

```bash
npm install parse-repr
```

or, with Yarn:

```bash
yarn add parse-repr
```

## Usage

1. Import the library into your code:
  ```js
  // with es6+ import
  import ParseRepr from 'parse-repr';

  // or, with require
  var ParseRepr = require('parse-repr');
  ```
2. Create an instance of the class, passing the repr in as the only argument:
  ```js
  var foo = new ParseRepr('<MyClass example repr here yay>');
  ```
3. Access the `ParseRepr` API to get what you need out of it. See the [API section](#api).

## API

### `constructor(repr: string)`

Basic constructor.

> **Argument** repr (string): The unparsed repr.
> 
> **Throws `Error`**: If you don't pass a repr or pass undefined.

### `parse()`

Parses the repr.
This is automatically called by the constructor and should only be called if you change the repr.

### `getObjectTypeName(): string`

Get the name of the object type (e.g. in `"<User me>"`, the object type would be "User").

> **Returns**: The name of the object type

### `getUnparsedRepr(): string`

> **Returns**: The unparsed repr.

### `getParts(): string[]`

Get the repr parts.
In the case your repr looks like `"<User 123456 Billy>"`,
`["123456", "Billy"]` will be returned.

In the case your repr looks like `"<User id=123456 firstName=Billy>"`,
this will be `["id=123456", "firstName=Billy"]`.

If you want actual key-value pairs for this, see [`getKeyValuePairs()`](#getKeyValuePairs).

> **Returns**: The list of elements in the repr.

### `getKeyValuePairs()`

Gives you an object with the key-value pairs named in the repr.

> **Returns**: An object as described above.
> **Throws `Error`**: If the repr doesn't use key-value pairs.

## Source

The source can be found [on GitHub](https://github.com/RDIL/parse-repr).
