// @flow
/* eslint no-unused-vars: ["error", { "args": "none" }] */
import { Node } from "ohm-js";

import indexToPositional from "../../../apply-constraints/index-to-positional.js";

import { type Constraint, type ConstraintKeys } from "./constraint-actions.js";

export type Constraint = {|
	type: ConstraintKeys,
	position: string,
	amount: ?string,
	digits: string[]
|};

type ConstraintFunction = () => Constraint;

export default Object.fromEntries<ConstraintKeys, ConstraintFunction>([
	"indexExcluder",
	"indexTolerator"
].map<[
	ConstraintKeys,
	ConstraintFunction
]>((rule: ConstraintKeys): [
	ConstraintKeys,
	ConstraintFunction
] => [
	rule,
	(
		constraintWord: Node,
		amount: Node,
		digitWord: Node,
		atIndex: Node,
		beWord: Node,
		digits: Node
	): Constraint => ({
		type: rule,
		position: indexToPositional(Number(atIndex.children[2].sourceString)),
		amount: amount.children.length ? amount.children[0].children[0].sourceString : "one",
		digits: digits.unfold()[0]
	})
]));
