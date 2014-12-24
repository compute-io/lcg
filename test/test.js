'use strict';

//var assert = require( 'assert' );

var chai = require( 'chai' );
var assert = chai.assert;

var lcg = require( '../lib/index.js' );

var NUMBER_TO_GENERATE = 12;


//-----------------------------------------------
// For testing only.
// 
// TODO. Provide JSDoc documentation
// TODO. Test params for type.
// Returns a list of n random numbers generated
// by successive calls to randfunc, a function
// of 0 parameters that generates PRNs with 
// successive calls.
function genRandList( n, randFunc ) {
	var i;
	var randlist = [ ];
	for( i = 0; i < n; i++ ) {
		randlist[ i ] = randFunc();
	}
	return randlist;
};
	
// seed = 1
var testDataNumRec1 = [0.242586125267011, 0.145007362656764, 0.138744172239091, 0.873302822407942, 0.600536210276436, 0.212086116062517, 0.531352662728798, 0.444202482907196, 0.711130221239817, 0.965628377611576, 0.316142517754874, 0.407295906174600];

// seed = 12345678
var testDataNumRec2 = [0.984259987242641, 0.457605587065968, 0.977101817716426, 0.150250359973987, 0.257800082796160, 0.845991555063981, 0.580065960334645, 0.168595344372371, 0.581952866437823, 0.881826220490889, 0.853287790367979, 0.207892714630762];

var lcgRandLs1 = genRandList( NUMBER_TO_GENERATE, lcg.rand );

lcg.srand( 12345678 );
var lcgRandLs2 = genRandList( NUMBER_TO_GENERATE, lcg.rand );

var epsilon = 1e-12;

describe( 'lcg rand module tests', function() {
	describe( 'seed = 1, lcgRandLs1 prns', function() {
		it( 'should be closeTo testDataNumRec1 prns', function() {
			var i;
			for(i = 0; i < NUMBER_TO_GENERATE; i++) {
				console.log("Comparing " + testDataNumRec1[i] + " and " + lcgRandLs1[i]);
				assert.closeTo(testDataNumRec1[i], lcgRandLs1[i], epsilon, 'close');
			}
		});
	});
	describe( 'seed = 12345678, lcgRandLs2 prns', function() {
		it( 'should be closeTo testDataNumRec2 prns', function() {
			var i;
			for(i = 0; i < NUMBER_TO_GENERATE; i++) {
				console.log("Comparing " + testDataNumRec2[i] + " and " + lcgRandLs2[i]);
				assert.closeTo(testDataNumRec2[i], lcgRandLs2[i], epsilon, 'close');
			}
		});
	});
});



