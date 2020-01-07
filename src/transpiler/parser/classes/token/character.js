// @flow
import Token from "../token.js";

/**
 *
 *
 * @author nnmrts <nanomiratus@gmail.com>
 * @date 2019-12-16
 * @export
 * @class CharacterToken
 * @extends {Token<"[A-Z]">}
 */
export default class CharacterToken extends Token<"[A-Z]"> {
	/**
	 * creates an instance of CharacterToken
	 * @author nnmrts <nanomiratus@gmail.com>
	 * @date 2019-12-16
	 * @param {number} amount
	 * amount
	 * @memberof CharacterToken
	 */
	constructor(amount: number) {
		super("[A-Z]", amount);
	}
}
