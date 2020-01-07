// @flow
import { type Pattern } from "../parser/operations/unfold/pattern.js";

/**
 *
 *
 * @param {string[]} array
 * array
 * @param {string} value
 * search value
 * @returns {number[]}
 * indices
 */
export default (array: Pattern, value: string): number[] => {
	const indices = [];

	for (let i = 0; i < array.length; i++) {
		if (array[i] === value) {
			indices.push(i);
		}
	}

	return indices;
};
