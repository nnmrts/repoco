// @flow
// India
// n{3} n{3}
// impossible first digit is 0
// or
// n{6}
// impossible first digit is 0
import full2NumberDigits from "../../../helpers/full/number/full-2-number-digits.js";

export default new RegExp(`^[1-9]${full2NumberDigits} ?[0-9]{3}$`);
