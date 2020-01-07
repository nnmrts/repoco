// @flow
/* eslint no-unused-vars: ["error", { "args": "none" }] */
import { Node } from "ohm-js";

export default (or: Node, space: Node): string => or.sourceString;
