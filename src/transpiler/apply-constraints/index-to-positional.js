// @flow
import { type Positional } from "../types.js";
/**
 *
 *
 * @param {number} [number=0]
 * number
 * @returns {string}
 * string
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
