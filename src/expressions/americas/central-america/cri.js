// @flow
// Costa Rica
// n{5}
// possible first three digits are 216,609
// possible last two digits are 01
// or
// n{5}
// possible first three digits are 409,611
// possible fourth digit is 0
// possible last digits are 1,2
// or
// n{5}
// possible first three digits are
//	102		105				114	117
//		304		306
//					407	408
//		604		606
//			705
// possible fourth digit is 0
// possible last digits are 1-3
// or
// n{5}
// possible first three digits are
//										115	118
//		204							214	215
//						308
//				406
//		504	505		507		510	511
//					607		610
//	701	704
// possible fourth digit is 0
// possible last digits are 1-4
// or
// n{5}
// possible first three digits are
//									110	-		113	116
//			203				208	209			212
//		302				307
//	401			405					410
//	501				506
//					706
// possible fourth digit is 0
// possible last digits are 1-5
// or
// n{5}
// possible first three digits are
//						109	120
//	402		404
//						509
//	602			605	608
//		703
// possible fourth digit is 0
// possible last digits are 1-6
// or
// possible first three digits are
//		106	-	108
//			207		211
//	502		508
//	702
// possible fourth digit is 0
// possible last digits are 1-7
// or
// n{5}
// possible first three digits are 205,206,213,303,403
// possible fourth digit is 0
// possible last digits are 1-8
// or
// n{5}
// possible first three digits are 104,503,603
// possible fourth digit is 0
// possible last digits are 1-9
// or
// n{5}
// possible first three digits are 101,301
// possible last two digits are 01-11
// or
// n{5}
// possible first three digits are 119,305
// possible last two digits are 01-12
// or
// n{5}
// possible first three digits are 103,210
// possible last two digits are 01-13
// or
// n{5}
// possible first three digits are 201,202
// possible last two digits are 01-14
// or
// n{5}
// possible first three digits are 601
// possible last two digits are 01-16
// or
// n{5}
// possible first four digits are 2030
// possible last digits are 7,8
import toRegexRange from "to-regex-range";

const ranges = [
	[
		[
			216,
			609
		],
		1
	],
	[
		[
			409,
			611
		],
		2
	],
	[
		[
			102,
			105,
			114,
			117,
			304,
			306,
			407,
			408,
			604,
			606,
			705
		],
		3
	],
	[
		[
			115,
			118,
			204,
			214,
			215,
			308,
			406,
			504,
			505,
			507,
			510,
			511,
			607,
			610,
			701,
			704
		],
		4
	],
	[
		[
			"11[0-3]",
			116,
			203,
			208,
			209,
			212,
			302,
			307,
			401,
			405,
			410,
			501,
			506,
			706
		],
		5
	],
	[
		[
			109,
			120,
			402,
			404,
			509,
			602,
			605,
			608,
			703
		],
		6
	],
	[
		[
			"10[6-8]",
			207,
			211,
			502,
			508,
			702
		],
		7
	],
	[
		[
			205,
			206,
			213,
			303,
			403
		],
		8
	],
	[
		[
			104,
			503,
			603
		],
		9
	],
	[
		[
			101,
			301
		],
		11
	],
	[
		[
			119,
			305
		],
		12
	],
	[
		[
			103,
			210
		],
		13
	],
	[
		[
			201,
			202
		],
		14
	],
	[
		[
			601
		],
		16
	]
].map((range: [(number | string)[], number]): string => `(${range[0].join("|")})${toRegexRange(1, String(range[1]).padStart(2, "0"), {
	capture: true,
	relaxZeros: false
})}`).concat("(2030[78])").join("|");

export default new RegExp(`^${ranges}$`);
