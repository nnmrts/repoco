// @flow
// Azerbaijan
// AZ n{4}
// impossible first two digits are
//	00
//	10	11			14
//							26		28	29
//			32							39
//		41				45
//									58
//					64
//						75	76	77	78	79
//		81	82	83	84	85	86	87	88	89
//	90	91	92	93	94	95	96	97	98	99
// or
// AZ 10n{2}
// possible last two digits are 00,02,17,44,63,72
import toRegexRange from "to-regex-range";

import full2NumberDigits from "../../../helpers/full/number/full-2-number-digits.js";

const range = toRegexRange("01", 99, {
	capture: true,
	relaxZeros: false
});

const antiRanges = `(${[
	toRegexRange(75, 79, {
		capture: true,
		relaxZeros: false
	}),
	toRegexRange(81, 89, {
		capture: true,
		relaxZeros: false
	}),
	toRegexRange(90, 99, {
		capture: true,
		relaxZeros: false
	})
].join("|")})`;

const impossibleFirstTwoDigits = `(${[
	"00",
	10,
	11,
	14,
	26,
	28,
	29,
	32,
	39,
	41,
	45,
	58,
	64
].join("|")})`;

const firstRegex = `((?!${antiRanges}|${impossibleFirstTwoDigits})${range}${full2NumberDigits})`;

export default new RegExp(`^AZ (${firstRegex}|10(0[02]|17|44|63|72))$`);
