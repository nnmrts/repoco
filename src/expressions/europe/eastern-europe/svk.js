// @flow
// Slovakia
// n{3} n{2}
// possible first two digits are 01-09,80-85,90-99
// impossible last two digits are 00

export default /^(0[1-9]|8[0-5]|9[0-9])[0-9] (?!00)[0-9]{2}$/;
