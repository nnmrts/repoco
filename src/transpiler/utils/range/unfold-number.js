// @flow
/**
 * @example
 * @param start
 * @param end
 */
export default (start: string, end: string): string[] => {
	const unfolded = Array(Number(end) - Number(start) + 1)
		.fill()
		.map((value: void, index: number): string => String(index + Number(start)));

	if (start.length === end.length) {
		return unfolded.map((string: string): string => string.padStart(start.length, "0"));
	}

	return unfolded;
};
