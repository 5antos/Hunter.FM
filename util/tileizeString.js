'use strict';

/**
 * https://github.com/5antos/JS-Randomness/blob/master/tileizeString.js
 * @param {string} str String to tileize
 * @returns {string} Tileized string
 */
function tileize(str) {
  return str.toLowerCase().replace(/(\s|^)\w/g, m => m.toUpperCase());
}

module.exports = tileize;