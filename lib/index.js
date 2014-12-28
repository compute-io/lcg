/**
*
*	COMPUTE: lcg
*
*
*	DESCRIPTION:
*		- A linear congruential pseudorandom number generator (lcg).
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

// VARIABLES //

var MASK = 123459876,
	M = 2147483647,
	A = 16807;


// LCG //

/**
* FUNCTION: lcg( [seed] )
*	Returns a linear congruential pseudorandom number generator. If not provided a seed, a seed is generated based on the current time.
*
* @param {Number} [seed] - random number generator seed
* @returns {Function} generator
*/
function lcg( val ) {
	var seed;
	if ( typeof val !== 'number' || val !== val ) {
		throw new TypeError( 'lcg()::invalid input argument. Seed must be numeric.' );
	}
	if ( arguments.length ) {
		seed = val;
	} else {
		seed = Date.now() % 100000000;
	}
	/**
	* FUNCTION: lcg()
	*	Linear congruential pseudorandom number generator.
	*
	* @returns {Number} pseudorandom floating-point number between 0 and 1.
	*/
	return function lcg() {
		var rand;
		seed = seed ^ MASK;
		seed = ( A * seed ) % M;
		rand = seed / M;
		seed = seed ^ MASK;
		return rand;
	};
} // end FUNCTION lcg()


// EXPORTS //

module.exports = lcg;


