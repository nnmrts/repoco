// @flow
// Philippines
// n{4}
// impossible first two digits are 00-03,59,69,76-79,88,89,98,99
import full2NumberDigits from "../../../helpers/full/number/full-2-number-digits.js";

export default new RegExp(`^(?!(0[0-3]|59|69|7[6-9]|8[89]|9[89]))${full2NumberDigits}$`);
