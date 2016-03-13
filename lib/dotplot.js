var _ = require('lodash')
var smb = require('sparse-binary-matrix')

// SPARSE MATRIX
// instead of saving the matrix (n*n)
// we save ordered lists of integers that
// represent the true (=1) coefficients in the matrix
//   if the matrix has p = m% probability of picking a 1 at random,
//   then we store p*n*n instead of n*n coefficients. the worst case is a
//   matrix full of 1, which is n*n coeffs.

// compute language matching density : ratio of 1 over 0

module.exports = {

  pattern: function(a) {
    // returns the dotplot of a language
    return this.correlation(a, a)
  },

  correlation: function(a, b) {
    // defaulting arguments
    a = (a && _.isArray(a)) ? a : []
    b = (b && _.isArray(b)) ? b : a
    // returning the dotplot
    return smb.make(function (i, j) { return a[i] === b[j] }, { x: a.length, y: b.length })
  },

  save: function(dotplot) {

  }

}
