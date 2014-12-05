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
//function foo() {

//} // end FUNCTION foo()

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
	
//-----------------------------------------------
// This function is for testing only.
// 
// frand is the random number generator function
//  whose output we are shuffling.
// shufTab is the shuffle table, which is filled
//  with K calls to frand().
// K is the size of shuffle table.
// TODO. Provide JSDoc documentation
// TODO. Test params for type.
randmod.mkHtfShuffWithK = function( frand, shufTab, K ) {
	return function() {
		var Ri, j, Xj;

		// Ri is the next random number from frand
		Ri = frand();

		// Generate j, an index into shufTab
		j = ( Ri + 1 ) % K;

		// Xj is the random number we will return, which 
		//  we get from the jth position in the shuffle table.
		Xj = shufTab[ j ];

		// We put Ri in the shuffle table in Xj's old position
		shufTab[ j ] = Ri;

		return Xj;
	}
}

//-----------------------------------------------
// The parameter htfrand is the random number generator function
//  whose output we are shuffling.
// Returns a htfshuff() function -- htfrand with its output 
//  Bays-Durham-shuffled.
randmod.mkHtfShuff = function( htfrand ) {
	// K is the size of shuffle table.
	var K = 32;
	// shufTab is the shuffle table, which is filled
	//  with K calls to frand().
	var shufTab = new Array( K );
	var i;
	for(i = 0; i < K; i++) {
		shufTab[ i ] = htfrand();	
	}
	console.log( "shufTab = " + shufTab );
	return function() {
		var Ri, j, Xj;

		// Ri is the next random number from frand
		Ri = htfrand();

		// Generate j, an index into shufTab
		j = ( Ri + 1 ) % K;

		// Xj is the random number we will return, which 
		//  we get from the jth position in the shuffle table.
		Xj = shufTab[ j ];

		// We put Ri in the shuffle table in Xj's old position
		shufTab[ j ] = Ri;

		return Xj;
	}
}



// EXPORTS //

module.exports = randmod;



