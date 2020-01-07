// @flow
/* eslint no-unused-vars: ["error", { "args": "none" }] */
import { Node } from "ohm-js";

export default (
	curlyBracketLeft: Node,
	amount: Node,
	curlyBracketRight: Node
): number => Number(amount.sourceString);
