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
*		[1] Based on Park and Miller, "Random Number Generators: Good Ones Are Hard To Find".
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
*		rgizz. gztown2216@yahoo.com. 2014.
*
*/

'use strict';

// VARIABLES //

//**********************
var DebugOutputInt = 0;
//**********************


var M = 2147483647, A = 16807;


// LCG //

/**
* FUNCTION: randint(max)
*	Returns a pseudorandom integer from 1 to max (inclusive), generated using Math.random().
*
* @param {Number} max - maximum size of integer to be returned
* @returns {Integer}
*/
function randint(max) {
	return Math.floor(1 + max*Math.random());
}

/**
* FUNCTION: lcg([seed])
*	Returns a linear congruential pseudorandom number generator. If not provided a seed, a seed is generated from Math.random().
*
* @param {Number} [seed] - random number generator seed
* @returns {Function} generator
*/
function lcg(seed) {
	var internalState;
	if (arguments.length) {
		if (typeof seed !== 'number' || seed !== seed || seed % 1 !== 0 || 
				seed < 1 || seed > 2147483646) {
			throw new TypeError( 'lcg()::invalid input argument. Seed must be a positive integer <= 2147483647.' );
		}
		internalState = seed;
	} else {
		// Seed with Math.random()
		seed = randint(M-1);
		internalState = seed;
	}
	/**
	* FUNCTION: lcg([N])
	*	Linear congruential pseudorandom number generator.
	*  
	* @param {Number} [N] - number of pseudorandom numbers to return
	* @returns {Number|Array} pseudorandom floating-point number(s) strictly between 0 and 1
	*/
	return function lcg(N) {
		var arr,
			rand;
		if (! arguments.length) {
			internalState = (A * internalState) % M;
			//*********************
			if(DebugOutputInt) {
				rand = internalState;
			} else {
				rand = internalState/M;
			}
			//*********************
			return rand;
		} else { 
			if (typeof N !== 'number' || N !== N || N%1 !== 0 || N < 1) {
				throw new TypeError('lcg()::invalid input argument. Array length must be a positive integer.');
			}
			arr = new Array(N);
			for (var i = 0; i < N; i++) {
				internalState = (A * internalState) % M;
				//*********************
				if(DebugOutputInt) {
					arr[i] = internalState;

				} else {
					arr[i] = internalState / M;
				}
			}
			return arr;
		}
	};
} // end FUNCTION lcg()


// EXPORTS //
module.exports = lcg;

