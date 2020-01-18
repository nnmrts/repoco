// @flow
/* eslint no-unused-vars: ["error", { "args": "none" }] */
import { Node } from "ohm-js";

export default (
	curlyBracketLeft: Node,
	amountOrRange: Node,
	curlyBracketRight: Node
): number | [number, number] => {
	if (amountOrRange.unfold().length > 1 && typeof amountOrRange.unfold()[0] !== "string") {
		return amountOrRange.unfold();
	}

	return Number(amountOrRange.sourceString);
};
