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

// NOTE: generated from the C code published in Numerical Recipes.

// seed = 1
var fixture1 = [
	0.242586125267011,
	0.145007362656764,
	0.138744172239091,
	0.873302822407942,
	0.600536210276436,
	0.212086116062517,
	0.531352662728798,
	0.444202482907196,
	0.711130221239817,
	0.965628377611576,
	0.316142517754874,
	0.407295906174600
];

// seed = 12345678
var fixture2 = [
	0.984259987242641,
	0.457605587065968,
	0.977101817716426,
	0.150250359973987,
	0.257800082796160,
	0.845991555063981,
	0.580065960334645,
	0.168595344372371,
	0.581952866437823,
	0.881826220490889,
	0.853287790367979,
	0.207892714630762
];


// TESTS //

describe( 'compute-lcg', function() {

	it( 'should export a function', function test() {
		expect( lcg ).to.be.a( 'function' );
	});

	it( 'should return a function', function test() {
		expect( lcg() ).to.be.a( 'function' );
	});

	it( 'should throw an error if not provided a numeric seed', function test() {
		var values = [
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

		it( 'should return comparable results to the published C implementation', function test() {
			var N = fixture1.length,
				rand = lcg( 1 ),
				arr = rand( N );

			for ( var i = 0; i < N; i++ ) {
				assert.closeTo( arr[ i ], fixture1[ i ], 1e-12 );
			}
		});
	});

	describe( 'seed = 12345678', function tests() {

		it( 'should return comparable results to the published C implementation', function test() {
			var N = fixture2.length,
				rand = lcg( 12345678 ),
				arr = rand( N );

			for ( var i = 0; i < N; i++ ) {
				assert.closeTo( arr[ i ], fixture2[ i ], 1e-12 );
			}
		});
	});
});



