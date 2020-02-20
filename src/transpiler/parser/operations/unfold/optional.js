// @flow
/* eslint no-unused-vars: ["error", { "args": "none" }] */
import { Node } from "ohm-js";

export default (squareBracketLeft: Node, child: Node, squareBracketRight: Node): [string] => [child.unfold()];
