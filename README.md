lcg
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

A linear congruential pseudorandom number generator. 

## Installation

``` bash
$ npm install compute-lcg
```
For use in the browser, use [browserify](https://github.com/substack/node-browserify).

## Usage: lcg

To use the module with lcg:

``` javascript
var lcg = require( 'compute-lcg' );

randNum = lcg.rand();

or

lcg.srand( <number_seed> );
randNum = lcg.rand();

```

#### lcg.rand()

Each call to lcg.rand() returns a pseudorandom number X: 0.0 < X < 1.0.

#### lcg.srand( <some_number> )

A call to lcg.srand( nseed ) seeds the random number generator with the number nseed.  If srand() is not called first, lcg.rand() is seeded with the system time.  

## Examples

``` javascript
var lcg = require( 'compute-lcg' );
```

To run the example code from the top-level application directory,

   ``` bash
   $ node ./examples/index.js
   ```

## Notes

The module lcg provides a pseudorandom number generator, of the linear congruential type.  For a general reference, see the Wikipedia article on linear congruential generators (1).

Such generators, including lcg.rand(), are of the form:

<pre>
X_n+1 = ( a*X_n + c ) mod m
</pre>

In lcg.rand(), the constants a, c, and m have the following values: 

<pre>
a = 16807
c = 0
m = 2^31 - 1 => 2147483647
</pre>

The values for a, c, and m in lcg are taken from Park and Miller, "Random Number Generators: Good Ones Are Hard To Find" (2); Park's and Miller's article is also the basis for a recipe in the second (1992) edition of _Numerical Recipes in C_ (3); the code in this module for the most part follows _Numerical Recipes_.  

### Period

Numerical Recipes states that this generator has a period of approximately 2.1e9. (4)  

## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```

#### Test Notes

Test data for this module are generated from the C code in *Numerical Recipes*.

## References

1. https://en.wikipedia.org/wiki/Linear_ congruential_ generator

2. S.K. Park and K.W. Miller (1988). "Random Number Generators: Good Ones Are Hard To Find". Communications of the ACM 31 (10): 1192-1201.

3. William H. Press, et. al., *Numerical Recipes in C: The Art of Scientific Computing*, Section 7.1 "Uniform Deviates" (2d ed. 1992) (hereinafter Numerical Recipes).  

4. Numerical Recipes, p. 279.

## License

[MIT license](http://opensource.org/licenses/MIT). 

---
## Copyright

Copyright &copy; 2014. rgizz.


[npm-image]: http://img.shields.io/npm/v/compute-htfrand.svg
[npm-url]: https://npmjs.org/package/compute-htfrand

[travis-image]: http://img.shields.io/travis/compute-io/htfrand/master.svg
[travis-url]: https://travis-ci.org/compute-io/htfrand

[coveralls-image]: https://img.shields.io/coveralls/compute-io/htfrand/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/htfrand?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/htfrand.svg
[dependencies-url]: https://david-dm.org/compute-io/htfrand

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/htfrand.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/htfrand

[github-issues-image]: http://img.shields.io/github/issues/compute-io/htfrand.svg
[github-issues-url]: https://github.com/compute-io/htfrand/issues
