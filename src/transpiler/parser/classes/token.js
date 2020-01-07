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
export default class Token<S> extends Array<S> {
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
	constructor(string: S, amount: number): Array<S> {
		return Array<S>(amount).fill(string);
	}
}
