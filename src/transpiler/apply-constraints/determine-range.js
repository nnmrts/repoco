// @flow
import cardinalToNumber from "./cardinal-to-number.js";
import positionalToIndex from "./positional-to-index.js";

export default (
	position: string,
	amount: ?string = "one",
	length: number,
	index: number
): [number, number] => {
	const start = positionalToIndex(position, length, index, amount);
	const end = start + cardinalToNumber(amount);

	return [
		start,
		end
	];
};
