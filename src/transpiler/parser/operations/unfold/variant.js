// @flow
/* eslint no-unused-vars: ["error", { "args": "none" }] */
import { Node } from "ohm-js";

import { type Pattern } from "./pattern.js";
import { type Constraint } from "./constraint.js";

export type AnnotatedVariant = {|
	pattern: Pattern,
	constraints: Constraint[]
|};

/**
 * @example
 * @param patternNode
 * @param spaces1
 * @param constraints
 * @param spaces2
 */
export default (
	patternNode: Node,
	spaces1: Node,
	constraints: Node,
	spaces2: Node
): AnnotatedVariant => ({
	pattern: patternNode.unfold(),
	constraints: constraints.unfold()
});
