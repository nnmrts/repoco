// @flow
import expressions from "./expressions.js";

const filteredExpressions = Object.fromEntries(Object.entries(expressions).filter(([
	code,
	expression
]: [
	string,
	mixed
]): boolean => {
	if (expression instanceof RegExp) {
		return expression.source !== "^$";
	}
	return false;
}));

console.info(filteredExpressions);
