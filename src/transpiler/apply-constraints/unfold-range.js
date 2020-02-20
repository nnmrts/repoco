// @flow

import rangePossible from "../utils/range/possible.js";
import unfoldNumberRange from "../utils/range/unfold-number.js";
import unfoldCharacterRange from "../utils/range/unfold-character.js";
import unfoldAlphanumericRange from "../utils/range/unfold-alphanumeric.js";

import determineTokenType from "./determine-token-type.js";

/**
 * @example
 * @param digit
 */
export default (digit: string): string[] => {
	if ((/-/g).test(digit)) {
		if (rangePossible(digit)) {
			const [start, end] = digit.split("-");

			const [startTokenType, endTokenType] = [start, end].map(determineTokenType);

			if (startTokenType !== endTokenType || startTokenType === "alphanumeric") {
				return unfoldAlphanumericRange(start, end);
			}

			if (startTokenType === "number") {
				return unfoldNumberRange(start, end);
			}

			return unfoldCharacterRange(start, end);
		}

		throw new Error("range is not possible");
	}

	return [digit];
};
