// @flow
/**
 *
 *
 * @param {?string} [string="one"]
 * string
 * @returns {number}
 * number
 */
export default (string: ?string = "one"): number => [
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
