'use strict';

/**
* FUNCTION: getPDF( mu, b )
*	Returns a probability density function for a Laplace distribution with with location parameter `mu` and scale parameter `b`.
*
* @private
* @param {Number} mu - location parameter
* @param {Number} b - scale prameter
* @returns {Function} probability density function (PDF)
*/
function getPDF( mu, b ) {
	/**
	* FUNCTION: pdf( x )
	*	Evaluates the probability distribution function at input value `x`.
	*
	* @private
	* @param {Number} x - input value
	* @returns {Number} evaluated PDF
	*/
	return function pdf( x ) {
		var logd = - Math.log( 2 * b ) - Math.abs( x - mu ) / b;
		return Math.exp( logd );
	};
} // end FUNCTION getPDF()


// EXPORTS //

module.exports = getPDF;
