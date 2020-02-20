// @flow
/* eslint no-unused-vars: ["error", { "args": "none" }] */
import { Node } from "ohm-js";

export default (
	digit1: Node,
	comma: Node,
	digit2: Node
): [number, number] => [Number(digit1.sourceString), Number(digit2.sourceString)];
