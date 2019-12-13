// @flow
// Greece
// n{3} n{2}
// impossible first digits are 0,9
import full2NumberDigits from "../../../helpers/full/number/full-2-number-digits.js";

export default new RegExp(`^[1-8]${full2NumberDigits} ${full2NumberDigits}$`);
