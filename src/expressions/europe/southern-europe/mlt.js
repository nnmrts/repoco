// @flow
// Malta
// c{3} n{4}
// possible first three digits are ATD,DGL,HMR,RBT,TXN
// or
// c{3} n{4}
// possible first digit is B
// possible next two digits are BG,KR,ML,RG,ZN
// or
// c{3} n{4}
// possible first digit is F
// possible next two digits are GR,NT,RN
// or
// c{3} n{4}
// possible first digit is G
// possible next two digits are DJ,HR,RB,SM,SR,XQ,ZR
// or
// c{3} n{4}
// possible first digit is I
// possible next two digits are KL,SL
// or
// c{3} n{4}
// possible first digit is K
// possible next two digits are CM,KP,KR,MN
// or
// c{3} n{4}
// possible first digit is L
// possible next two digits are JA,QA
// or
// c{3} n{4}
// possible first digit is M
// possible next two digits are DN,FN,GR,LH,QB,RS,SD,SK,ST,TF,TP,XK,XR
// or
// c{3} n{4}
// possible first digit is N
// possible next two digits are DR,XR
// or
// c{3} n{4}
// possible first digit is P
// possible next two digits are BK,LA,TA
// or
// c{3} n{4}
// possible first digit is Q
// possible next two digits are LA,RD,RM
// or
// c{3} n{4}
// possible first digit is S
// possible next two digits are CM,FI,GN,GW,LC,LM,LZ,NT,PB,PK,TJ,VR,WQ
// or
// c{3} n{4}
// possible first digit is V
// possible next two digits are CT,LT
// or
// c{3} n{4}
// possible first digit is X
// possible next two digits are BX,JR,LN,RA,WK
// or
// c{3} n{4}
// possible first digit is Z
// possible next two digits are BB,BG,BR,RQ,TN
// or
// TP n{4}

const possibleDigits = Object.entries({
	B: [
		"[BR]G",
		"KR",
		"ML",
		"ZN"
	],
	F: [
		"GR",
		"NT",
		"RN"
	],
	G: [
		"DJ",
		"[HSZ]R",
		"RB",
		"SM",
		"XQ"
	],
	I: [
		"[KS]L"
	],
	K: [
		"CM",
		"K[PR]",
		"MN"
	],
	L: [
		"[JQ]A"
	],
	M: [
		"[DF]N",
		"[GX]R",
		"LH",
		"QB",
		"RS",
		"S[DT]",
		"[SX]K",
		"T[FP]"
	],
	N: [
		"[DX]R"
	],
	P: [
		"BK",
		"[LT]A"
	],
	Q: [
		"LA",
		"R[DM]"
	],
	S: [
		"[CL]M",
		"FI",
		"G[NW]",
		"L[CZ]",
		"NT",
		"P[BK]",
		"TJ",
		"VR",
		"WQ"
	],
	V: [
		"[CL]T"
	],
	X: [
		"BX",
		"JR",
		"LN",
		"RA",
		"WK"
	],
	Z: [
		"B[BGR]",
		"RQ",
		"TN"
	]
})
	.map(([
		firstDigit,
		nextTwoDigits
	]: [
		string,
		mixed
	]): string => (Array.isArray(nextTwoDigits) ? `(${firstDigit}(${nextTwoDigits.join("|")}))` : ""))
	.concat("ATD", "DGL", "HMR", "RBT", "TXN", "TP")
	.join("|");

export default new RegExp(`^(${possibleDigits}) [0-9]{4}$`);
