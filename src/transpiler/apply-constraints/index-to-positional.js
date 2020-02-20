// @flow
import { type Positional } from "../types.js";

/**
 * @param {number} [number] -
 * number.
 * @returns {string}
 * string.
 * @example
 */
export default (number: number): Positional => [
	"first",
	"second",
	"third",
	"fourth",
	"fifth",
	"sixth",
	"seventh",
	"eigth",
	"ninth"
][number];
