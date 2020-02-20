// @flow
import Token from "../token.js";

/**
 *
 *
 * @author nnmrts <nanomiratus@gmail.com>
 * @date 2019-12-16
 * @export
 * @class AlphanumericToken
 * @augments {Token<"[A-Z]">}
 */
export default class AlphanumericToken extends Token<"[0-9A-Z]" | "([0-9A-Z])?"> {
	/**
	 * Creates an instance of AlphanumericToken.
	 *
	 * @author nnmrts <nanomiratus@gmail.com>
	 * @date 2019-12-16
	 * @param {number} amount -
	 * amount.
	 * @memberof AlphanumericToken
	 * @example
	 */
	constructor(amount: number | [number, number]) {
		super("[0-9A-Z]", amount);
	}
}
