// @flow
/**
 * @example
 * @param string
 */
export default (string: string): boolean => {
	let currentString = string;
	if (!string.match("-")) {
		return true;
	}
	if (string.match(/^[0-9A-Z]+(-[0-9A-Z]+){2,}$/)) {
		currentString = currentString.replace(/^([0-9A-Z]+)(?:-[0-9A-Z]+)+(-[0-9A-Z]+)$/, "$1$2");
	}

	const [start, end] = currentString.split("-");

	return start.length < end.length || start.localeCompare(end) <= 0;
};
