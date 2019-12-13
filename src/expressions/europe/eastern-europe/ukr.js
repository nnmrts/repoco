// @flow
// Ukraine
// n{5}
// impossible first two digits are 00
import full2NumberDigits from "../../../helpers/full/number/full-2-number-digits.js";

export default new RegExp(`^(?!00)${full2NumberDigits}[0-9]{3}$`);
