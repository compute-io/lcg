Linear Congruential Generator
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> A linear congruential pseudorandom number generator (lcg). 


## Installation

``` bash
$ npm install compute-lcg
```
For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

To use the module,

``` javascript
var lcg = require( 'compute-lcg' );
```


#### lcg( [seed] )

Returns a pseudorandom number generator.

``` javascript
var rand = lcg();
```

To seed the generator, provide a `numeric` seed

``` javascript
var rand = lcg( 1234 );
```

#### rand()

Returns a pseudorandom floating-point `number` between `0` and `1`.

``` javascript
var val = rand();
```


## Notes

For a general lcg reference, see [Wikipedia](#ref-wikipedia). Linear congruential generators use the following recurrence relation:

<pre>
X_{n+1} = ( a*X_n + c ) mod m
</pre>

In this implementation, the constants `a`, `c`, and `m` have the following values: 

<pre>
a = 16807
c = 0
m = 2^31 - 1 => 2147483647
</pre>

The values for `a`, `c`, and `m` are taken from Park and Miller, ["Random Number Generators: Good Ones Are Hard To Find"](#ref-park-miller). Park's and Miller's article is also the basis for a recipe in the second edition of [_Numerical Recipes in C_](#ref-numerical-recipes-1). For the most part, this implementation follows [_Numerical Recipes_](#ref-numerical-recipes-1).  


### Period

The generator has a period of approximately 2.1e9 [[4]](#ref-numerical-recipes-2). 




## Examples

``` javascript
var lcg = require( 'compute-lcg' );

// Create a new (unseeded) generator:
var rand = lcg();

// Generate some pseudorandom numbers...
for ( var i = 0; i < 10; i++ ) {
	console.log( rand() );
}

// Create a new (seeded) generator:
rand = lcg( 1 );
for ( var j = 0; j < 10; j++ ) {
	console.log( rand() );
}

// Create a new generator seeded with the same seed as previous generator:
rand = lcg( 1 );
for ( var k = 0; k < 10; k++ ) {
	console.log( rand() );
}
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


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

Test data generated from the C code published in [_Numerical Recipes_](#ref-numerical-recipes-1).


## References

<a name="ref-wikipedia"></a>
1. Wikipedia. [Linear Congruential Generator](https://en.wikipedia.org/wiki/Linear_ congruential_ generator)

<a name="ref-park-miller"></a>
2. S.K. Park and K.W. Miller (1988). "Random Number Generators: Good Ones Are Hard To Find". Communications of the ACM 31 (10): 1192-1201.

<a name="ref-numerical-recipes-1"></a>
3. William H. Press, et. al., _Numerical Recipes in C: The Art of Scientific Computing_, Section 7.1 "Uniform Deviates" (2d ed. 1992) (hereinafter _Numerical Recipes_).  

<a name="ref-numerical-recipes-2"></a>
4. _Numerical Recipes_, p. 279.


## License

[MIT license](http://opensource.org/licenses/MIT). 

---
## Copyright

Copyright &copy; 2014. rgizz.


[npm-image]: http://img.shields.io/npm/v/compute-lcg.svg
[npm-url]: https://npmjs.org/package/compute-lcg

[travis-image]: http://img.shields.io/travis/compute-io/lcg/master.svg
[travis-url]: https://travis-ci.org/compute-io/lcg

[coveralls-image]: https://img.shields.io/coveralls/compute-io/lcg/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/lcg?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/lcg.svg
[dependencies-url]: https://david-dm.org/compute-io/lcg

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/lcg.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/lcg

[github-issues-image]: http://img.shields.io/github/issues/compute-io/lcg.svg
[github-issues-url]: https://github.com/compute-io/lcg/issues
