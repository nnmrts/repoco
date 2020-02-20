// @flow
/* eslint no-unused-vars: ["error", { "args": "none" }] */
import { Node } from "ohm-js";

import { type Positional, type Cardinal } from "../../../types.js";

export type ConstraintKeys = "excluder" | "tolerator" | "indexExcluder" | "indexTolerator";

export type Constraint = {|
	type: ConstraintKeys,
	position: Positional,
	amount: Cardinal,
	digits: string[]
|};

type ConstraintFunction = () => Constraint;

export default Object.fromEntries<ConstraintKeys, ConstraintFunction>(["excluder", "tolerator"].map<[
	ConstraintKeys,
	ConstraintFunction
]>((rule: ConstraintKeys): [
	ConstraintKeys,
	ConstraintFunction
] => [
	rule,
	(
		constraintWord: Node,
		position: Node,
		amount: Node,
		digitWord: Node,
		beWord: Node,
		digits: Node
	): Constraint => ({
		type: rule,
		position: position.children[0].sourceString,
		amount: amount.children.length ? amount.children[0].children[0].sourceString : "one",
		digits: digits.unfold()[0]
	})
]));
