// @flow
import arrayLongest from "./array-longest.js";

/**
 *
 *

 * @param {(number | [number, number])} indexOrRange
 * index or range
 * @param {T[]} ...arrays
 * arrays
 * @returns {mixed[]}
 * united array
 */
export default <+T>(
	indexOrRange: number | [number, number],
	...arrays: $ReadOnlyArray<$ReadOnlyArray<T>>
): $ReadOnlyArray<$ReadOnlyArray<T> | T> => arrayLongest(
	...arrays
).map((
	value: T,
	index: number
): $ReadOnlyArray<T> | T => {
	if (
		typeof indexOrRange === "number" ?
			index !== indexOrRange :
			index < indexOrRange[0] || index > indexOrRange[1]
	) {
		return arrays.map((digits: $ReadOnlyArray<T>): T => digits[index]);
	}
	return value;
});
