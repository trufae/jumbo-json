jumbo-json
==========

Huge and asynchronous JSON parser and stringifier.

The native NodeJS JSON APIs are synchornous, this means that a single line of code can spend several seconds to be executed blocking any other operation happening in the program.

Also, turns out that Node have some restrictions that can be easily spotted by creating huge strings or huge objects that result in heap exhaustion or string limit reached.

This library provides a stream-like way to stringify an object, as well as consuming a stream to create an object out of a string.

Status
------

Right now only the stringifier is implemented.

Author
------

* Sergi Alvarez <pancake@nowsecure.com>
