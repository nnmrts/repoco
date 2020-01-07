// @flow
/**
 *
 *
 * @param {$ReadOnlyArray<T>} array
 * array
 * @returns {$ReadOnlyArray<T>}
 * array with no duplicates
 */
export default <+T>(array: $ReadOnlyArray<T>): $ReadOnlyArray<T> => {
	const set = new Set(array);

	return [
		...set
	];
};
