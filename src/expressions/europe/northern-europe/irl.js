// @flow
// Republic of Ireland|Ireland
// cn{2} x{4}
// impossible first digits are B,G,I,J,L,M,O,Q,S,U,Z
// impossible four digits at index 4 are B,G,I,J,L,M,O,Q,S,U,Z
// or
// D6W x{4}
// impossible four digits at index 4 are B,G,I,J,L,M,O,Q,S,U,Z
import full2NumberDigits from "../../../helpers/full/number/full-2-number-digits.js";

export default new RegExp(`^((?![BGIJLMOQSUZ])[A-Z]${full2NumberDigits}|D6W) ((?![BGIJLMOQSUZ])[0-9A-Z]){4}$`);
