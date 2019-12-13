// @flow
// United Kingdom|United Kingdom of Great Britain and Northern Ireland
// c{2}nc nc{2}
// impossible first digits are Q,V,X
// impossible second digits are I,J,Z
// possible fourth digits are A,B,E,H,M,N,P,R,V-Y
// impossible last two digits are C,I,K,M,O,V
// or
// cnc nc{2}
// impossible first digits are Q,V,X
// possible third digits are A-H,J,K,P,S-U,W
// impossible last two digits are C,I,K,M,O,V
// or
// cn nc{2}
// possible first digits are B,E,G,L,M,N,S,W
// impossible last two digits are C,I,K,M,O,V
// or
// cn{2} nc{2}
// possible first digits are B,E,G,L,M,N,S,W
// impossible last two digits are C,I,K,M,O,V
// or
// c{2}n nc{2}
// impossible first digits are Q,V,X
// impossible last two digits are C,I,K,M,O,V
// or
// c{2}n{2} nc{2}
// impossible first digits are Q,V,X
// impossible last two digits are C,I,K,M,O,V
// or
// GIR 0AA
// or
// BFPO n
// or
// BFPO n{2}
// or
// BFPO n{3}
// or
// BFPO n{4}
import full2NumberDigits from "../../../helpers/full/number/full-2-number-digits.js";

const formats = [
	"(?![QVX])[A-Z](?![IJZ])[A-Z][0-9][ABEHMNPRV-Y]",
	"(?![QVX])[A-Z][0-9][A-HJKPS-UW]",
	"[BEGLMNSW][0-9]{1,2}",
	"(?![QVX])[A-Z]{2}[0-9]",
	`(?![QVX])[A-Z]{2}${full2NumberDigits}`
].join("|");

const suffix = "[0-9]((?![CIKMOV])[A-Z]){2}";

export default new RegExp(`^(${formats}) ${suffix}|GIR 0AA|BFPO [0-9]{1,4}$`);
