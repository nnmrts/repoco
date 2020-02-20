// @flow
/**
 * @param {$ReadOnlyArray<T>} array -
 * array.
 * @returns {$ReadOnlyArray<T>}
 * array with no duplicates.
 * @example
 */
export default <+T>(array: $ReadOnlyArray<T>): $ReadOnlyArray<T> => {
	const set = new Set(array);

	return [...set];
};
