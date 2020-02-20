// @flow
import grammar from "./parser/grammar.js";
import semantics from "./parser/semantics.js";
import operations from "./parser/operations.js";
import { type AnnotatedVariant } from "./parser/operations/unfold/variant.js";

/**
 *
 *
 * @param {string} definition
 * definition
 * @returns {Promise<string>}
 * unfolded
 */
export default (definition: string): AnnotatedVariant[] => {
	const match = grammar.match(definition);

	for (const operationKey in operations) {
		if (!semantics(match)[operationKey]) {
			semantics.addOperation(`${operationKey}()`, operations[operationKey]);
		}
	}

	return semantics(match).unfold();
};
