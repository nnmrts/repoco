// @flow
import Token from "../token.js";

/**
 *
 *
 * @author nnmrts <nanomiratus@gmail.com>
 * @date 2019-12-16
 * @export
 * @class NumberToken
 * @augments {Token<"[0-9]">}
 */
export default class NumberToken extends Token<"[0-9]" | "([0-9])?"> {
	/**
	 * Creates an instance of NumberToken.
	 *
	 * @author nnmrts <nanomiratus@gmail.com>
	 * @date 2019-12-16
	 * @param {number} amount -
	 * amount.
	 * @memberof NumberToken
	 * @example
	 */
	constructor(amount: number | [number, number]) {
		super("[0-9]", amount);
	}
}
