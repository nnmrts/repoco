// @flow
// Cayman Islands
// KY1-n{4}
// possible last four digits are
//	0001	0002
//	1001	-	1011
//	1101	-	1112
//	1201	-	1209
//	1301	-	1303
//	1401
//	1501	-	1508
//	1601	-	1603
//	1701	1702
//	1801
// or
// KY2-n{4}
// possible last four digits are 2001,2002,2101,2201,2301,2401
// or
// KY3-2501
import toRegexRange from "to-regex-range";

const ky1Ranges = `(${[
	toRegexRange(1001, 1011, {
		capture: true,
		relaxZeros: false
	}),
	toRegexRange(1101, 1112, {
		capture: true,
		relaxZeros: false
	}),
	toRegexRange(1201, 1209, {
		capture: true,
		relaxZeros: false
	}),
	toRegexRange(1301, 1303, {
		capture: true,
		relaxZeros: false
	}),
	toRegexRange(1501, 1508, {
		capture: true,
		relaxZeros: false
	}),
	toRegexRange(1601, 1603, {
		capture: true,
		relaxZeros: false
	})
].join("|")})`;

export default new RegExp(`^(KY1-${ky1Ranges}|KY2-(2001|2002|2101|2201|2301|2401)|KY3-2501)$`);
