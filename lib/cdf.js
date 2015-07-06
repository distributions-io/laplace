'use strict';

/**
* FUNCTION: getCDF( mu, b )
*	Returns a cumulative distribution function for a Laplace distribution with with location parameter `mu` and scale parameter `b`.
*
* @private
* @param {Number} mu - location parameter
* @param {Number} b - scale prameter
* @returns {Function} cumulative density function (CDF)
*/
function getCDF( mu, b ) {
	/**
	* FUNCTION: cdf( x )
	*	Evaluates the cumulative distribution function at input value `x`.
	*
	* @private
	* @param {Number} x - input value
	* @returns {Number} evaluated CDF
	*/
	return function cdf( x ) {
    	if ( x < mu ) {
			return 0.5 * Math.exp( ( x - mu ) / b );
		} else {
			return 1 - 0.5 * Math.exp( - ( x - mu ) / b );
		}
	};
} // end FUNCTION getCDF()


// EXPORTS //

module.exports = getCDF;
