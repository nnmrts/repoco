// @flow
// Czech Republic|Czechia
// n{3} n{2}
// possible first digit is 1
// or
// n{3} n{2}
// possible first digit is 2
// impossible next two digits are
//	00	-					09
//	10	-					19
//	20	-					29
//	30	-					39
//	40	-					49
//					55
//	60				65
//					75		79
//				83		87
//		91	92		96	-	99
// or
// n{3} n{2}
// possible first digit is 3
// impossible next two digits are
//	00
//						27	-	29
//		43
//			54	55				59
//				65	-			69
//					76
// or
// n{3} n{2}
// possible first digit is 4
// impossible next two digits are
//				04			09
//				14
//	20	-					29
//			33			37
//		42	-				49
//	50	-					59
//					65		69
//				74	-		79
//	80	-					89
//	90	-					99
// or
// n{3} n{2}
// possible first digit is 5
// impossible next two digits are
//			05
//	10		15				19
//	20	-					29
//					36
//	40		45		46
//		53	-				59
//						67
//		73	-				79
//			85
//	90			96	-	99
// or
// n{3} n{2}
// possible first digit is 6
// impossible next two digits are
//	50	-					59
//	60	-	63			68
//			73		77
//		81					89
//				94			99
// or
// n{3} n{2}
// possible first digit is 7
// impossible next two digits are
//	30	-	32
//	40				45
//				54			58	59
//	70	-					78
//						86
//		91						99
import full2NumberDigits from "../../../helpers/full/number/full-2-number-digits.js";

const impossibleNextTwoDigits = [
	[
		"[0-4][0-9]",
		55,
		"6[05]",
		"7[59]",
		"8[37]",
		"9[126-9]"
	],
	[
		"00",
		"2[7-9]",
		43,
		"5[459]",
		"6[5-9]",
		76
	],
	[
		"0[49]",
		14,
		"2[0-9]",
		"3[37]",
		"4[2-9]",
		"6[59]",
		"7[4-9]"
	],
	[
		"[0148]5",
		"[149]0",
		19,
		"[34]6",
		"[57][3-9]",
		67,
		"9[6-9]"
	],
	[
		"5[0-9]",
		68,
		"7[37]",
		"8[19]",
		"9[49]"
	],
	[
		"3[0-2]",
		"4[05]",
		"5[489]",
		"7[0-8]",
		86,
		"9[19]"
	]
];

const ranges = impossibleNextTwoDigits.map((digits: (number | string)[], index: number): string => {
	const firstDigit = index + 2;

	return `${firstDigit}(?!${digits.join("|")})${full2NumberDigits}`;
}).join("|");

export default new RegExp(`^(1${full2NumberDigits}|${ranges}) ${full2NumberDigits}$`);
