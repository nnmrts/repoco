// @flow
import { type Cardinal } from "../types.js";

/**
 * @param number -
 * number.
 * @returns
 * number.
 * @example
 */
export default (number: number = 1): Cardinal => [
	"one",
	"two",
	"three",
	"four",
	"five",
	"six",
	"seven",
	"eight",
	"nine"
][number - 1];
