// @flow
import getText from "./transpiler/get-text.js";
import parser from "./transpiler/parser.js";
import applyConstraints from "./transpiler/apply-constraints.js";
import minify from "./transpiler/minify.js";
import assemble from "./transpiler/assemble.js";

/**
 * @param {string} path -
 * path.
 * @returns {Promise<string>}
 * transpiled.
 * @example
 */
export default (path: string): RegExp => {
	const definition = getText(path);

	console.info(`\nPATH: ${path}`);
	console.info("\nDEFINITION:");
	console.info(definition);

	const unfolded = parser(definition);

	console.info("\nunfolded:");
	console.info(unfolded);

	const constraintsApplied = applyConstraints(unfolded);
	console.info("\nconstraintsApplied:");
	console.info(constraintsApplied);

	const minified = minify(constraintsApplied);

	console.info("\nminified:");
	console.info(minified);

	const assembled = assemble(minified);

	return assembled;
};
