// @flow
// Thailand
// n{5}
// possible first digits are 8,9
// possible second digits are 0-6
// or
// n{5}
// possible first digits are 2,6,7
// possible second digits are 0-7
// or
// n{5}
// possible first digits are 1,5
// possible second digits are 0-8
// or
// n{5}
// possible first digits are 3,4
// possible second digits are 0-9

export default /^([1-9][0-6]|[1-7][7]|[13-5][8]|[34][9])[0-9]{3}$/;
