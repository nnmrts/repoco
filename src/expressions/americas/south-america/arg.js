// @flow
// Argentina
// cn{4}c{3}
// impossible first digits are I,O
// impossible second digit is 0
// or
// n{4}

export default /^((?![IO])[A-Z][1-9][0-9]{3}[A-Z]{3}|[0-9]{4})$/;
