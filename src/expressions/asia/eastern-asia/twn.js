// @flow
// Taiwan
// n{3}[-n{2}]
// impossible first digit is 0
import full2NumberDigits from "../../../helpers/full/number/full-2-number-digits.js";

export default new RegExp(`^[1-9]${full2NumberDigits}(-${full2NumberDigits})?$`);
