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
*		[1]
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

// FUNCTIONS //

var  lcg = {};

var a = 16807;
var m = 2147483647;
var seed = 1;
var MASK = 123459876;

//-----------------------------------------------
// Seed random number generator
lcg.srand = function( user_seed ) {
	seed = user_seed;
}

//-----------------------------------------------
// Generates successive pseudorandom numbers 
// in the form xii = ( a * xi ) % m, 
// with x0 set to seed, using
//  the above values for a and m.
// TODO. Provide JSDoc documentation
// TODO. Ensure parameters are numbers and are not 0. 
lcg.rand = function( ) {
	seed = seed ^ MASK;
	seed = ( a * seed ) % m;
	var ans = seed/m;
	seed = seed ^ MASK;
	return ans;
}

// EXPORTS //

module.exports = lcg;


