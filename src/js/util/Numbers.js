export default class Numbers {
  is(subject) {
    return {
      multipleOf(criterion) {
        if (subject === 0 || criterion === 1) return true;

        const result = Math.abs(subject % criterion);
        // console.log(`is ${subject} a muliple of ${criterion}  =>  ${result}`);

        return isNaN(result) ? false : !result;
      }
    };
  }
}
