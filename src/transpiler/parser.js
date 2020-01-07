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

	for (let i = 0; i < Object.keys(operations).length; i++) {
		const key = Object.keys(operations)[i];

		if (!semantics(match)[key]) {
			semantics.addOperation(`${key}()`, operations[key]);
		}
	}

	return semantics(match).unfold();
};
