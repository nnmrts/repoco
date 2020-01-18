// @flow
export default (digits: string[]): string[] => digits.map((digit: string): string | string[] => {
	if ((/-/g).test(digit)) {
		const [
			start,
			end
		] = digit.split("-");

		return Array.from(Array(Number(end) - Number(start) + 1)).map((value: null, index: number): string => String(index + Number(start))).map((string: string): string => (start.length === end.length ? string.padStart(start.length, "0") : string));
	}

	return digit;
	// $FlowIssue flat flat flat flat
}).flat();
