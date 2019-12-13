// @flow
// Tunisia
// n{4}
// possible first two digits are
//	10,	11,	12,
//	20,	21,	22,
//	30,	31,	32,
//	40,	41,	42,
//	50,	51,
//	60,	61,
//	70,	71,
//	80,	81,
//	90,	91
import full2NumberDigits from "../../../helpers/full/number/full-2-number-digits.js";

export default new RegExp(`(^[1-4][0-2]|[5-9][01])${full2NumberDigits}$`);
