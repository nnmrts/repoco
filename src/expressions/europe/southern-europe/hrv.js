// @flow
// Croatia
// n{5}
// possible first two digits are
// 	10
//	20	-		23
//		31	-			35
//	40		42	-	44		47	-	49
//		51	-	53

export default /^(10|2[0-3]|3[1-5]|4[02-47-9]|5[1-3])[0-9]{3}$/;
