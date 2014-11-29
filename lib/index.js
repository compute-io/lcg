/**
*
*	COMPUTE: htfrand
*
*
*	DESCRIPTION:
*		- PRNG
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

// var module_alias = require( 'module_name' );


// FUNCTIONS //

/**
* FUNCTION: foo()
*	{{ foo description }}.
*/
function foo() {

} // end FUNCTION foo()

var randmod = {};

//-----------------------------------------------
// TODO. Provide JSDoc documentation
// TODO. Ensure parameters are numbers and are not 0. 
// Returns a function that generates successive
// pseudorandom numbers in the form 
// xii = ( a * xi ) % m, with x0 set to seed.
randmod.makeRandWithAM = function( a, m, seed ) {
	var xi = seed;	
	return function() {
		xi = ( a * xi ) % m;
		return xi;
	}
};

//-----------------------------------------------
// TODO. Provide JSDoc documentation
// TODO. Ensure seed is a number and not 0. 
// Returns a function that generates successive
// pseudorandom numbers in the form
// xii = ( 16807 * xi ) % 2147483647, with
// x0 set to seed.
randmod.makeRand = function(seed) {
	return randmod.makeRandWithAM(16807, 2147483647, seed);
};

//-----------------------------------------------
// TODO. Provide JSDoc documentation
// TODO. Test params for type.
// Returns a list of n random numbers generated
// by successive calls to randfunc, a function
// of 0 parameters that generates PRNs with 
// successive calls.
randmod.genRandList = function( n, randFunc ) {
	var i;
	var randlist = [];
	for( i = 0; i < n; i++ ) {
		randlist[ i ] = randFunc();
	}
	return randlist;
};
	

// EXPORTS //

module.exports = randmod;



