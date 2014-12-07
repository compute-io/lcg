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

// var module_alias = require( 'module_name' );


// FUNCTIONS //

var randmod = {};

//-----------------------------------------------
// Use this function for testing only.
// 
// Returns a function that generates successive
// pseudorandom numbers in the form 
// xii = ( a * xi ) % m, with x0 set to seed.
// TODO. Provide JSDoc documentation
// TODO. Ensure parameters are numbers and are not 0. 
randmod.makeRandWithAM = function( a, m, seed ) {
	var xi = seed;	
	return function() {
		xi = ( a * xi ) % m;
		return xi;
	};
};

//-----------------------------------------------
// Returns a function (htfrand) that generates successive
// pseudorandom numbers in the form
// xii = ( 16807 * xi ) % 2147483647, with
// x0 set to seed.
// TODO. Provide JSDoc documentation
// TODO. Ensure seed is a number and not 0. 
randmod.makeHtfRand = function( seed ) {
	return randmod.makeRandWithAM( 16807, 2147483647, seed );
};

//-----------------------------------------------
// This function is for testing only.
// 
// TODO. Provide JSDoc documentation
// TODO. Test params for type.
// Returns a list of n random numbers generated
// by successive calls to randfunc, a function
// of 0 parameters that generates PRNs with 
// successive calls.
randmod.genRandList = function( n, randFunc ) {
	var i;
	var randlist = [ ];
	for( i = 0; i < n; i++ ) {
		randlist[ i ] = randFunc();
	}
	return randlist;
};
	

// EXPORTS //

module.exports = randmod;



