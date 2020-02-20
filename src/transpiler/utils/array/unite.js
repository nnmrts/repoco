// @flow
import arrayLongest from "./longest.js";

/**
 * @example
 * @param {number | number[]} indexOrRange - Index or range.
 * @param {Array[]} arrays - Arrays.
 * @returns {Array | Array[]} United array.
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
