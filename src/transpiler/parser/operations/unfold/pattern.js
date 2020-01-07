// @flow
/* eslint no-unused-vars: ["error", { "args": "none" }] */
import { Node } from "ohm-js";

export type Pattern = string[];

export default (tokens: Node): Pattern => tokens.children
	.map((token: Node): string => token.unfold())
	.flat();
