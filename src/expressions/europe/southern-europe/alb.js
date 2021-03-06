// @flow
// Albania
// n{4}
// possible first two digits are:
//	10,			15,		17,	18,
//	20,			25,
//	30,	33,	34,	35,
//	40,	43,	44,	45,	46,	47,
//	50,	53,	54,
//	60,	63,	64,
//	70,	73,	74,
//	80,	83,	84,	85,	86,	87,
//	90,	93,	94,			97
import full2NumberDigits from "../../../helpers/full/number/full-2-number-digits.js";

export default new RegExp(`^([1-9]0|[3-9][34]|[1-48]5|[48]6|[1489]7|18)${full2NumberDigits}$`);
