htfrand
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

A linear congruential pseudorandom number generator. 

## Installation

*Please note: this module is not ready for installation.*

``` bash
$ npm install compute-htfrand
```
For use in the browser, use [browserify](https://github.com/substack/node-browserify).

## Usage: htfrand

To use the module with htfrand:

``` javascript
var htfmod = require( 'compute-htfrand' );

// seed !== 0
var htfrand = htfmod.makeRand( seed );
```

#### htfrand()

Each call to htfrand() returns a pseudorandom number X: 0 < X < 2,147,483,647.

## Usage: htfshuff

To use the module with htfshuff:

``` javascript
var htfmod = require( 'compute-htfrand' );

// seed !== 0
var htfrand = htfmod.makeRand( seed );
var htfshuff = htfmod.mkHtfShuff( htfrand );
```

#### htfshuff()

Each call to htfshuff() returns a pseudorandom number X: 0 < X < 2,147,483,647.

## Examples

*Please note: there are no examples as yet.*

``` javascript
var foo = require( 'compute-htfrand' );
```

To run the example code from the top-level application directory,

   ``` bash
   $ node ./examples/index.js
   ```

## Notes

The module htfrand is a pseudorandom number generator, of the linear congruential type.  *See generally* Wikipedia on linear congruential generators.  (1)

Such generators, including htfrand, are of the form:

<pre>
X_n+1 = (a * X_n + c) mod m
</pre>

In htfrand, the constants a, c, and m have the following values: 

<pre>
a = 16807
c = 0
m = 2^31 - 1 => 2147483647
</pre>

The values for a, c, and m in htfrand are taken from Park and Miller, "Random Number Generators: Good Ones Are Hard To Find" (2); the letters 'htf' in htfrand are from the phrase "Hard to Find" in the title of the article.  Park's and Miller's article is also the starting point for a recipe in the second (1992) edition of _Numerical Recipes in C_ (3).  

Numerical Recipes states that this generator has a period of approximately 2.1e9. (4)  

A second function, htfshuff, is also exported by this module.  The htfshuff function, following Numerical Recipes, subjects the output of htfrand to a Bays-Durham shuffle.  

### Bays-Durham Shuffle Description

I have not seen the Bays-Durham paper; Herzog and Lord, however, have a good write-up of the algorithm, and Numerical Recipes has an illustrative figure.  Here is a general description.

Suppose, by way of example, you have a (not very good) random number generator rand() that outputs 5, 10, 15, ...

To Bays-Durham-shuffle the output of rand(), make a table T of size K, let us say, for example, 6.  

1. Initialize T with K successive calls to rand() => T1 = (5 10 15 20 25 30). 

2. Get the next random number R from another call to rand() => R1 = 35.  

3. Generate an index j into T from R by: (R + 1) mod K. => j1 = (35 + 1) mod 6 = 0.  

4. Get the next shuffled output from T[j] => our first shuffled output number X1 is T[j1] => T[0] => 5.  

5. Now replace T[j] with R. => T[0] = 35 => T2 = (35 10 25 20 25 30).  

6. Repeat steps 2-5 for X2, X3, etc.  

For example, to get X2:  R2 = rand() => 40.  j2 = (40 + 1) mod 6 => 5.  X2 = T[5] => 30.  Set T[5] to R2 => T[5] = 40 => T2 = (35 10 25 20 25 40).

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

Test data for this module, for htfrand, come from _ML for the Working Programmer_ (6).  

Other tests utilize a toy random number generator using values a = 3, m = 31, and c = 0, which values, and test data, come from Herzog and Lord. (7).

## References

1. https://en.wikipedia.org/wiki/Linear_congruential_generator

2. S.K. Park and K.W. Miller (1988). "Random Number Generators: Good Ones Are Hard To Find". Communications of the ACM 31 (10): 1192-1201.

3. William H. Press, et. al., *Numerical Recipes in C: The Art of Scientific Computing*, Section 7.1 "Uniform Deviates" (2d ed. 1992) (hereinafter Numerical Recipes).  

4. Numerical Recipes, p. 279.

5. Bays, Carter, & Durham, S.D. 1976. ACM Transactions on Mathematical Software, Vol. 2, p. 59; Thomas N. Herzog and Graham Lord, *Applications of Monte Carlo Methods to Finance and Insurance* p. 19 (2002) (portions available online at http://books.google.com/books?id=ibpfxsxuCUAC&pg=PA19&lpg=PA19&dq=bays+durham+shuffle&source=bl&ots=r6LmFaOgIA&sig=i3o41mPpHejHNgkSPd7QDx0NIOg&hl=en&sa=X&ei=GJ92VMWDBc3fsASb1oKYDg&ved=0CCQQ6AEwATgU#v=onepage&q=bays%20durham%20shuffle&f=false.  See also Numerical Recipes, p. 280-81.

6. L.C. Paulson, *ML for the Working Programmer*, p. 109 (2d ed. 1996).  

7. Herzog and Lord, p. __.  

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
