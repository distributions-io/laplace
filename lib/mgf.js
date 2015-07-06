'use strict';

/**
* FUNCTION: getMGF( mu, b )
*	Returns a moment generating function for a Laplace distribution with with location paramter `mu` and scale parameter `b`.
*
* @private
* @param {Number} mu - location parameter
* @param {Number} b - scale prameter
* @returns {Function} moment generating function (MGF)
*/
function getMGF( mu, b ) {
	/**
	* FUNCTION: mgf( t )
	*	Evaluates the moment generating function at input value `t`.
	*
	* @private
	* @param {Number} t - input value
	* @returns {Number} evaluated MGF
	*/
	return function mgf( t ) {
		if ( Math.abs( t ) < 1/b ) {
			return Math.exp( mu * t ) / ( 1 - Math.pow( b * t, 2) );
		} else {
			return NaN;
		}
	};
} // end FUNCTION getMGF()


// EXPORTS //

module.exports = getMGF;
