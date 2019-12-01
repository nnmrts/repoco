// @flow
// Argentina
// [c]n{4}[c{3}]
// impossible second digits are I,O
// impossible third digit is 0

export default /^([0-9]|(?![IO])[A-Z][1-9])[0-9]{3}$/;
