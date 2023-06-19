/**
 *
 * @param {number} n The total to check against
 * @param {string} singular The singlular version of the output string
 * @param {string} plural Optional plural version - will default to singular + s if not supplied
 * @return {string}
 */
export function pluralise(n, singular, plural = '') {
  return n === 1 ? singular : plural || singular + 's';
}
