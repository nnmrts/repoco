// @flow
// Vietnam|Viet Nam
// n{6}
// impossible first two digits are
//	00	-				09
//				17		19
//		21
//			34	37
//						49
//	50		54
//		61			68	69
//				77	78
//		81
//					98	99
import full2NumberDigits from "../../../helpers/full/number/full-2-number-digits.js";

export default new RegExp(`^(?!(0[0-9]|1[79]|21|3[47]|49|5[04]|6[189]|7[78]|81|9[89]))${full2NumberDigits}[0-9]{4}$`);
