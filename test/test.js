'use strict';


var assert = require( 'assert' );
var randMod = require( '../lib/index.js' );

var toyRandFunc = randMod.makeRandWithAM(3,31,9);
var toyRandList = randMod.genRandList( 30, toyRandFunc );
var toyRandExpectedList = 
	[27,19,26,16,17,20,29,25,13,8,24,10,30,28,22,
	4,12,5,15,14,11,2,6,18,23,7,21,1,3,9];

var htfRandFunc = randMod.makeHtfRand( 1 );
var randList = randMod.genRandList( 10000, htfRandFunc );

// START Temp code
var itemp;
var Ntemp = 33;
for(itemp = 0; itemp < Ntemp; itemp++) {
	console.log( randList[ itemp ] );
}

console.log( "first call to shuffRand = " + shuffRand() );

// END Temp code


randList.reverse();
var randList16 = randList.slice(0,16);

var expectedResult = [1043618065,
1484786315, 925166085, 1614852353, 721631166,
173942219, 1229443779, 789328014, 570809709, 
1760109362, 270600523, 2108528931, 16480421, 
519782231, 162430624, 372212905];

describe( 'htfrand module tests', function() {
	describe( 'randList16 test', function() {
		it( 'should be equal to expectedResult', function() {
			assert.deepEqual(randList16, expectedResult);
		});
	});
	describe('toyRandList test', function() {
		it( 'should be equal to toyRandExpectedList', function() {
			assert.deepEqual( toyRandList, toyRandExpectedList );
		});
	});
});


// MODULES //

//var // Expectation library:
//	chai = require( 'chai' ),

	// Module to be tested:
//	lib = require( './../lib' );


// VARIABLES //

//var expect = chai.expect,
//	assert = chai.assert;


// TESTS //

/*
describe( 'compute-htfrand', function tests() {

	it( 'should export a function', function test() {
		expect( lib ).to.be.a( 'function' );
	});

	it( 'should do something' );

});
*/

