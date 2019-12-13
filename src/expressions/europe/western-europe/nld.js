// @flow
// Netherlands
// n{4} c{2}
// impossible first digit is 0
// impossible last two digits are SA,SD,SS

export default /^[1-9][0-9]{3} (?!S[ADS])([A-Z]{2})$/;
