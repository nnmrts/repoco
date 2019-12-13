// @flow
// Guernsey
// GYn nc{2}
// impossible last two digits are C,I,K,M,O,V
// or
// GYn{2} nc{2}
// impossible last two digits are C,I,K,M,O,V

export default /^GY[0-9]{1,2} [0-9]((?![CIKMOV])[A-Z]){2}$/;
