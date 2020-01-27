// @flow
import { type Cardinal } from "../types.js";

/**
 *
 *
 * @param {number} number
 * number
 * @returns {number}
 * number
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
