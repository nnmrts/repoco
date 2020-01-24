// @flow
import { type Digit } from "../types.js";

import addQuantifiers from "./pre-digit-level/add-quantifiers.js";
import cleanupPositiveLookaheads from "./pre-digit-level/cleanup-positive-lookaheads.js";
import simplifyNumberOrs from "./pre-digit-level/simplify-numeric-ors.js";
import cleanupNegativeLookaheads from "./pre-digit-level/cleanup-negative-lookaheads.js";

export default (digit: Digit): Digit => {
	const positiveLookaheadsCleanedUp = cleanupPositiveLookaheads(digit);
	const negativeLookaheadsCleanedUp = cleanupNegativeLookaheads(positiveLookaheadsCleanedUp);
	const quantifiersAdded = addQuantifiers(negativeLookaheadsCleanedUp);
	const numberOrsSimplified = simplifyNumberOrs(quantifiersAdded);

	return numberOrsSimplified;
};
