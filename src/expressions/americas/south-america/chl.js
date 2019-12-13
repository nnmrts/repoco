// @flow
// Chile
// n{7}
// or
// n{3}-n{4}
// impossible first digit is 0
import full2NumberDigits from "../../../helpers/full/number/full-2-number-digits.js";

export default new RegExp(`^[1-9]${full2NumberDigits}-?[0-9]{4}$`);
