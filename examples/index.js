'use strict';

var lcg = require( './../lib' );

var i;
var N_EXAMPLES = 5;

lcg.srand( 1 );

for ( i = 0; i < N_EXAMPLES; i++ ) {
	console.log( lcg.rand() );
}


