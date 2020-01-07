// @flow
/**
 *
 *
 * @param {...mixed[]} arrays
 * arrays
 * @returns {mixed[]}
 * longest array
 */
export default <+T: $ReadOnlyArray<mixed>>(...arrays: T[]): T => arrays.sort((
	array1: T,
	array2: T
): number => array2.length - array1.length)[arrays.length - 1];
