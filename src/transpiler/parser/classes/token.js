// @flow
/**
 *
 *
 * @author nnmrts <nanomiratus@gmail.com>
 * @date 2019-12-16
 * @export
 * @class Token
 * @extends {Array<S>}
 */
export default class Token<S: string> extends Array<S> {
	/**
	 * creates an instance of Token
	 * @author nnmrts <nanomiratus@gmail.com>
	 * @date 2019-12-16
	 * @param {S} string
	 * string
	 * @param {number} amount
	 * amount
	 * @memberof Token
	 */
	constructor(string: S, amount: number | [number, number]): Array<S> {
		const token = Array<S>(Array.isArray(amount) ? amount[0] : amount).fill(string);

		if (Array.isArray(amount)) {
			token.push(...Array(amount[1] - amount[0]).fill(`(${string})?`));
		}

		return token;
	}
}
