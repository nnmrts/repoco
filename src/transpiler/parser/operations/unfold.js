// @flow
/* eslint no-unused-vars: ["error", { "args": "none" }] */
/* eslint prefer-object-spread: ["off"] */
import tokenActions from "./unfold/token-actions.js";
import primitiveActions from "./unfold/primitive-actions.js";
import constraintActions from "./unfold/constraint-actions.js";
import repeater from "./unfold/repeater.js";
import pattern from "./unfold/pattern.js";
import constraint from "./unfold/constraint.js";
import digitList from "./unfold/digit-list.js";
import or from "./unfold/or.js";
import variant from "./unfold/variant.js";
import variants from "./unfold/variants.js";

export default Object.assign(
	{
		repeater,
		pattern,
		constraint,
		digitList,
		or,
		variant,
		variants
	},
	primitiveActions,
	tokenActions,
	constraintActions
);
