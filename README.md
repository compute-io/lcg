htfrand
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

A pseudorandom number generator of linear congruential type.  

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

Park's and Miller's article is also the starting point for a recipe in _Numerical Recipes in C_ (3) (hereinafter _Press_). Further modifications of this module are contemplated, following certain refinements from _Press_, including, in particular, a Bays-Durham shuffle.  (7).      

The Press books states that this generator has a period of approximately 2.1e9. (6)  

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

Test data for this module (tests are not yet fully integrated within the module) for htfrand come from _ML for the Working Programmer_ (4).  

Other test data utilize a toy random number generator using values a = 3, m = 31, and c = 0, which values, and test data, come from Herzog and Lord. (5).

## References

1. https://en.wikipedia.org/wiki/Linear_congruential_generator

2. S.K. Park and K.W. Miller (1988). "Random Number Generators: 
Good Ones Are Hard To Find". Communications of the ACM 31 
(10): 1192–1201.

3. William H. Press, et. al, *Numerical Recipes in C: The Art
of Scientific Computing*, Section 7.1 "Uniform Deviates" (2d ed.
1992).  

4. L.C. Paulson, *ML for the Working Programmer* p. 109 (2d ed. 1996).  

5. Thomas N. Herzog and Graham Lord, *Applications of Monte Carlo Methods to Finance and Insurance* p. 19 (2002) (portions available online at http://books.google.com/books?id=ibpfxsxuCUAC&pg=PA19&lpg=PA19&dq=bays+durham+shuffle&source=bl&ots=r6LmFaOgIA&sig=i3o41mPpHejHNgkSPd7QDx0NIOg&hl=en&sa=X&ei=GJ92VMWDBc3fsASb1oKYDg&ved=0CCQQ6AEwATgU#v=onepage&q=bays%20durham%20shuffle&f=false.  

6. Press, p. 279.

7. Bays, Carter, & Durham, S.D. 1976. ACM Transactions on Mathematical Software, Vol. 2, p. 59.  See also Herzog and Lord, cited above at n. 5.  


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
