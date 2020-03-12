# Tar Command Cheat-Sheet

Here is a basic guide to the Unix `tar` command.

## Individual Options Letters

* `c` - Create archive
* `f` - Specify the filename of archive (typically used with the `c` option)
* `t` - List files in archive
* `r` - Append to archive
* `s` - Preserve order of files
* `v` - Verbose mode (extra output)
* `z` - (De)compress archive with Gzip
* `w` - Ask before performing actions that could be destructive

## Examples

* `tar xsf ARCHIVE` - decompress the specified archive
* `tar cf ARCHIVE FILE FILE` - create an archive with the specified files
