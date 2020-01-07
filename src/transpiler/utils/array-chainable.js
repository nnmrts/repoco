// @flow

/**
 *
 *
 * @param {$ReadOnlyArray<[mixed, mixed]>} array
 * array
 * @returns {boolean}
 * if array is chainable
 */
export default (array: $ReadOnlyArray<[number, number]>): boolean => {
	for (let i = 0; i < array.length; i++) {
		if (array[i - 1] && array[i - 1][1] !== array[i][0]) {
			return false;
		}
	}

	return true;
};
