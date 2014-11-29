htfrand
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> PRNG


## Installation

``` bash
$ npm install compute-htfrand
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

To use the module,

``` javascript
var htfmod = require( 'compute-htfrand' );

// seed !== 0
var htfrand = htfmod.makeRand(seed);
```

#### htfrand()

Generates pseudorandom numbers.

## Examples

``` javascript
var foo = require( 'compute-htfrand' );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```

## Notes

The module htfrand is a pseudorandom number generator, of the linear
congruential type.  See the Wikipedia article on this.  (1)

Such generators, including htfrand, are of the form

<pre>
	X_n+1 = (a * X_n + c) mod m
</pre>

Here: 

<pre>
a = 16807
c = 0
m = 2^31 - 1 => 2147483647
</pre>

The values for a, c, and m for htfrand are taken from Park and 
Miller (2), as are the initials 'htf', which alludes to their title 
phrase "Hard to Find."  

Park's and Miller's article is also the starting point for a recipe in _Numerical Recipes in C_ (3) (hereinafter _Press_). Further modifications of this module are contemplated, following certain refinements from _Press_.  

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

## References

1. https://en.wikipedia.org/wiki/Linear_congruential_generator

2. S.K. Park and K.W. Miller (1988). "Random Number Generators: 
Good Ones Are Hard To Find". Communications of the ACM 31 
(10): 1192–1201.

3. William H. Press, et. al, Numerical Recipes in C: The Art
of Scientific Computing, Section 7.1 "Uniform Deviates" (2d ed.
1992).  




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
