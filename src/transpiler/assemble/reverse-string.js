// @flow
/**
 * Unicode-unaware string reverser. We should never get anything outside of ASCII here anyway.
 *
 * @example
 * @param string
 */
export default (string: string): string => [...string].reverse().join("");
