// @flow
import getText from "./transpiler/get-text.js";
import parser from "./transpiler/parser.js";
import applyConstraints from "./transpiler/apply-constraints.js";
import minify from "./transpiler/minify.js";
import assemble from "./transpiler/assemble.js";

/**
 *
 *
 * @param {string} path
 * path
 * @returns {Promise<string>}
 * transpiled
 */
export default (path: string): RegExp => {
	const definition = getText(path);

	console.info(`\nPATH: ${path}`);
	console.info("DEFINITION:");
	console.info(definition);

	const unfolded = parser(definition);

	const constraintsApplied = applyConstraints(unfolded);

	const minified = minify(constraintsApplied);

	const assembled = assemble(minified);

	return assembled;
};
