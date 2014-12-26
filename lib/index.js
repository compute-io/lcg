/**
*
*	COMPUTE: lcg
*
*
*	DESCRIPTION:
*		- Linear Congruential Generator 
*
*
*	NOTES:
*		[1] Based on W. Press, et al., Numerical Recipes in C (2d ed. 1992)
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. rgizz.
*
*
*	AUTHOR:
*		rgizz. rgizz@users.noreply.github.com. 2014.
*
*/

'use strict';

// MODULES //

var  lcg = {};

var a = 16807;
var m = 2147483647;
var seed = 1;
var MASK = 123459876;
var SEEDED = false;

/**
* FUNCTION: isNumber( n )
* Helper function -- is n a number?
*
* @param {n} Object to test for if-number 
*/
function isNumber(n) {
	return (typeof(n) === "number") && ( ! isNaN(n) );
}

/**
* FUNCTION: srand( n ) 
* Seeds random number generator.
* 
* @param {n} Number, the seed
*/
lcg.srand = function( user_seed ) {
	if( isNumber(user_seed) ) {
		seed = user_seed;
		SEEDED = true;
	} else {
		throw new TypeError( 'lcg.srand()::invalid input argument. Must provide a number.' );
	}
}

/**
* FUNCTION: rand()
* Returns a pseudorandom number
*
* @returns {Number} - a floating point number between 0.0 and 1.0.
*
* Generates successive pseudorandom numbers 
* in the form x2 = ( a * x1 ) % m, 
* the above values for a and m.
* If the user does not provide a seed using srand(n), 
* a seed is taken from the current time.
*/
lcg.rand = function() {
	if( ! SEEDED ) {
		seed = Date.now() % 100000000;
		SEEDED = true;
	}
	seed = seed ^ MASK;
	seed = ( a * seed ) % m;
	var ans = seed/m;
	seed = seed ^ MASK;
	return ans;
}

// EXPORTS //

module.exports = lcg;


