// @flow
/**
 * Determines the token type of a string.
 *
 * @example <caption>Getting the token type</caption>
 * determineTokenType("A"); // returns "number"
 * @param {string} string - The token string, something like "1", "BC", or "D56".
 * @returns {"number" | "character" | "alphanumeric"} - The token type.
 */
export default (string: string): "number" | "character" | "alphanumeric" => {
	if (string.split("").every((digit: string): boolean => !!digit.match(/^[A-Z]$/))) {
		return "character";
	}

	if (string.split("").every((digit: string): boolean => !!digit.match(/^[0-9]$/))) {
		return "number";
	}

	if (string.split("").every((digit: string): boolean => !!digit.match(/^[0-9A-Z]$/))) {
		return "alphanumeric";
	}

	throw new RangeError("string not in uppercase alphanumeric range");
};
