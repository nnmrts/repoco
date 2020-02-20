// @flow
/**
 * @param {mixed[]} array -
 * array.
 * @param {(number | [number, number])} indexOrRange -
 * index or range.
 * @param {...mixed[]} values -
 * values.
 * @returns {mixed[]}
 * array.
 * @example
 */
export default <+T: $ReadOnlyArray<mixed>>(
	array: T,
	indexOrRange: number | [number, number],
	...values: mixed[]
): T => [
	...array.slice(0, typeof indexOrRange === "number" ? indexOrRange : indexOrRange[0]),
	...values,
	...array.slice((typeof indexOrRange === "number" ? indexOrRange : indexOrRange[1]) + 1)
];
