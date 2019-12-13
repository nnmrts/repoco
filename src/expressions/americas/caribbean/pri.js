// @flow
// Puerto Rico
// 00n{3}[-n{4}]
// possible third digits are 6,7,9
import full2NumberDigits from "../../../helpers/full/number/full-2-number-digits.js";

export default new RegExp(`^00[679]${full2NumberDigits}(-[0-9]{4})?$`);
