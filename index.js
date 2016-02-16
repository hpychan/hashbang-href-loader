/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author: Scott McNab (scott.mcnab@gmail.com)
*/

module.exports = function(source) {
	this.cacheable && this.cacheable();
  source = source.replace( /(\shref=")\//gi, "$1#!/");
  source = source.replace( /(\shref=')\//gi, "$1#!/");
  source = source.replace( /(\sng-href=")\//gi, "$1#!/");
  source = source.replace( /(\sng-href=')\//gi, "$1#!/");
	return source;
};
