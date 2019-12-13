// @flow
// Isle of Man
// IMn nc{2}
// impossible last two digits are C,I,K,M,O,V
// or
// IMn{2} nc{2}
// impossible last two digits are C,I,K,M,O,V

export default /^IM[0-9]{1,2} [0-9]((?![CIKMOV])[A-Z]){2}$/;
