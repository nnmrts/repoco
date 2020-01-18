// @flow
import Token from "../token.js";

/**
 *
 *
 * @author nnmrts <nanomiratus@gmail.com>
 * @date 2019-12-16
 * @export
 * @class AlphanumericToken
 * @extends {Token<"[A-Z]">}
 */
export default class AlphanumericToken extends Token<"[A-Z0-9]" | "([A-Z0-9])?"> {
	/**
	 * creates an instance of AlphanumericToken
	 * @author nnmrts <nanomiratus@gmail.com>
	 * @date 2019-12-16
	 * @param {number} amount
	 * amount
	 * @memberof AlphanumericToken
	 */
	constructor(amount: number | [number, number]) {
		super("[A-Z0-9]", amount);
	}
}
