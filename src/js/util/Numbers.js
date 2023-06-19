export default class Numbers {
  /**
   * 
   * @param {number} subject value being evaluated
   * @returns {function} Associated helper method
   */
  is(subject) {
    return {
      multipleOf(criterion) {
        if (subject === 0 || criterion === 1) return true;

        const result = Math.abs(subject % criterion);

        return isNaN(result) ? false : !result;
      }
    };
  }

  /**
   * 
   * @param {number} min
   * @param {number} max 
   * @returns {number} a random integer between the specified range; both min and max are inclusive
   */
  randomNumber(min = 1, max = 6) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  /**
   * 
   * @param {number[]} nCollection 
   * @returns {number} the sum of all values in the array collection
   */
  sum(nCollection) {
    return nCollection.reduce((n1, n2) => n1 + n2, 0)
  }
}
