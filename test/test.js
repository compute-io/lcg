/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	lcg = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// FIXTURES //

// NOTE: generated from independent implementation.

// seed = 1
var fixture1 = [
	7.82636925942561e-06,
	0.131537788143166,
	0.755605322195033,
	0.458650131923449,
	0.532767237412169,
	0.21895918632809,
	0.0470446162144861,
	0.678864716868319,
	0.679296405836612,
	0.934692895940828
];

// seed = 12345678
var fixture2 = [
	0.621834785967057,
	0.177247748327091,
	0.00290613342211867,
	0.84338442554855,
	0.762040194478836,
	0.609548605796671,
	0.683417624646527,
	0.20001743417234,
	0.693016134525191,
	0.522172964886843
];


// TESTS //

describe( 'compute-lcg', function() {

	it( 'should export a function', function test() {
		expect( lcg ).to.be.a( 'function' );
	});

	it( 'should return a function', function test() {
		expect( lcg() ).to.be.a( 'function' );
	});

	it( 'should throw an error if not provided a positive integer seed', function test() {
		var values = [
			0,
			-1,
			8.0325,
			'5',
			NaN,
			null,
			undefined,
			[],
			{},
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				lcg( value );
			};
		}
	});

	it( 'should throw an error if provided a non-positive integer array length', function test() {
		var rand = lcg(),
			values;

		values = [
			'5',
			3.14,
			-1,
			0,
			NaN,
			null,
			undefined,
			[],
			{},
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				rand( value );
			};
		}
	});

	it( 'should return a numeric value', function test() {
		var rand = lcg();
		expect( rand() ).to.be.a( 'number' );
	});

	it( 'should return an array of numeric values', function test() {
		var rand = lcg(),
			arr = rand( 10 );

		expect( arr ).to.be.an( 'array' );
		for ( var i = 0; i < arr.length; i++ ) {
			expect( arr[i] ).to.be.a( 'number' );
		}
	});

	it( 'should always return the same sequence if seeded', function test() {
		var rand1 = lcg( 1 ),
			rand2 = lcg( 1 );

		for ( var i = 0; i < 10000; i++ ) {
			assert.strictEqual( rand1(), rand2() );
		}

		var arr1 = rand1( 100 ),
			arr2 = rand2( 100 );

		assert.deepEqual( arr1, arr2 );
	});

	describe( 'seed = 1', function test() {

		it( 'should return comparable results to independent implementation', function test() {
			var N = fixture1.length,
				rand = lcg( 1 ),
				arr = rand( N );

			for ( var i = 0; i < N; i++ ) {
				assert.closeTo( arr[ i ], fixture1[ i ], 1e-12 );
			}
		});
	});

	describe( 'seed = 12345678', function tests() {

		it( 'should return comparable results to independent implementation', function test() {
			var N = fixture2.length,
				rand = lcg( 12345678 ),
				arr = rand( N );

			for ( var i = 0; i < N; i++ ) {
				assert.closeTo( arr[ i ], fixture2[ i ], 1e-12 );
			}
		});
	});
});



