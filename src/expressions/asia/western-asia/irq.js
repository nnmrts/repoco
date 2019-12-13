// @flow
// Iraq
// n{5}
// possible first two digits are
//	10
//		31	32	34	36
//		41	42	44	46
//		51	52	54	56
//		61	62	64	66
//						58

export default /^(10|[3-6][1246]|58)[0-9]{3}$/;
