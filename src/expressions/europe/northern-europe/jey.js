// @flow
// Jersey
// JEn nc{2}
// possible third digits are 1-5
// impossible last two digits are C,I,K,M,O,V

export default /^JE[1-5] [0-9]((?![CIKMOV])[A-Z]){2}$/;
