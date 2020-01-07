// @flow
/* eslint no-unused-vars: ["error", { "args": "none" }] */
import { Node } from "ohm-js";

type ConstraintKeys = "excluder" | "tolerator";

export type Constraint = {|
	type: ConstraintKeys,
	position: string,
	amount: ?string,
	digits: string[]
|};

type ConstraintFunction = () => Constraint;

export default Object.fromEntries<ConstraintKeys, ConstraintFunction>([
	"excluder",
	"tolerator"
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
		position: Node,
		amount: Node,
		digitWord: Node,
		beWord: Node,
		digits: Node
	): Constraint => ({
		type: rule,
		position: position.children[0].sourceString,
		amount: amount.children.length ? amount.children[0].children[0].sourceString : null,
		digits: digits.unfold()[0]
	})
]));
