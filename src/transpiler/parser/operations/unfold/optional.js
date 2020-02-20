// @flow
/* eslint no-unused-vars: ["error", { "args": "none" }] */
import { Node } from "ohm-js";

/**
 * @example
 * @param squareBracketLeft
 * @param child
 * @param squareBracketRight
 */
export default (squareBracketLeft: Node, child: Node, squareBracketRight: Node): [string] => [child.unfold()];
