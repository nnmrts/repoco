// @flow
// Monaco
// [MC]980n{2}
// or
// [MC ]980n{2}
import full2NumberDigits from "../../../helpers/full/number/full-2-number-digits.js";

export default new RegExp(`^(MC ?)?980${full2NumberDigits}$`);
