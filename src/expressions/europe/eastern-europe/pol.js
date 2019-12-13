// @flow
// Poland
// n{2}-n{3}
import full2NumberDigits from "../../../helpers/full/number/full-2-number-digits.js";

export default new RegExp(`^${full2NumberDigits}-[0-9]{3}$`);
