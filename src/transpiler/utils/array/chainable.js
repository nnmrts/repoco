// @flow

/**
 * @param {$ReadOnlyArray<[mixed, mixed]>} array -
 * array.
 * @returns {boolean}
 * if array is chainable.
 * @example
 */
export default (array: $ReadOnlyArray<[number, number]>): boolean => {
	for (const [i, item] of array.entries()) {
		if (array[i - 1] && array[i - 1][1] !== item[0]) {
			return false;
		}
	}

	return true;
};
