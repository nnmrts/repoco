// @flow
import { type Cardinal } from "../types.js";

/**
 *
 *
 * @param {Cardinal} string
 * string
 * @returns {number}
 * number
 */
export default (string: Cardinal): number => [
	"one",
	"two",
	"three",
	"four",
	"five",
	"six",
	"seven",
	"eight",
	"nine"
].indexOf(string) + 1;
