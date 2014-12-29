'use strict';

var lcg = require( './../lib' );

// Create a new (unseeded) generator:
var rand = lcg();

// Generate some pseudorandom numbers...
console.log( '\nUnseeded:\n' );
for ( var i = 0; i < 10; i++ ) {
	console.log( rand() );
}

// Create a new (seeded) generator:
rand = lcg( 1 );

console.log( '\nSeeded:\n' );
for ( var j = 0; j < 10; j++ ) {
	console.log( rand() );
}

// Create a new generator seeded with the same seed as the previous generator:
rand = lcg( 1 );

console.log( '\nSeeded (same seed):\n' );
console.log( rand( 10 ).join( '\n' ) );


