// @flow
/**
 *
 *
 * @param {...mixed[]} arrays
 * arrays
 * @returns {mixed[]}
 * longest array
 */
export default <+T>(...arrays: $ReadOnlyArray<$ReadOnlyArray<T>>): $ReadOnlyArray<T> => [
	...arrays
].sort((
	array1: $ReadOnlyArray<T>,
	array2: $ReadOnlyArray<T>
): number => array2.length - array1.length)[0];
