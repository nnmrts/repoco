// @flow
// Slovakia
// n{3} n{2}
// possible first two digits are 01-09,80-85,90-99
// impossible last two digits are 00
import full2NumberDigits from "../../../helpers/full/number/full-2-number-digits.js";

export default new RegExp(`^(0[1-9]|8[0-5]|9[0-9])[0-9] (?!00)${full2NumberDigits}$`);
