// @flow

const radix = 36;

/**
 * @example
 * @param start
 * @param end
 */
export default (start: string, end: string): string[] => Array(
	parseInt(end, radix) - parseInt(start, radix) + 1
)
	.fill()
	.map(
		(value: void, index: number): string => (parseInt(start, radix) + index)
			.toString(radix).toLocaleUpperCase()
	);
