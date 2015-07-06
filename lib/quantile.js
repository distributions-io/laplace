'use strict';

/**
* FUNCTION: getQuantileFunction( mu, b )
*	Returns a quantile function for a Laplace distribution with with location parameter `mu` and scale parameter `b`.
*
* @private
* @param {Number} mu - location parameter
* @param {Number} b - scale prameter
* @returns {Function} quantile function
*/
function getQuantileFunction( mu, b ) {
	/**
	* FUNCTION: quantile( p )
	*	Evaluates the quantile function at input value `p`.
	*
	* @private
	* @param {Number} p - input value
	* @returns {Number} evaluated quantile function
	*/
	return function quantile( p ) {
		if ( 0 <= p && p < 0.5 ) {
			return mu + Math.log( 1 + 2 * ( p - 0.5 ) );
		} else if ( 0.5 <= p <= 1 ) {
			return mu - b * Math.log( 1 - 2 * ( p - 0.5 ) );
		} else {
			return NaN;
		}
	};
} // end FUNCTION getQuantileFunction()


// EXPORTS //

module.exports = getQuantileFunction;
