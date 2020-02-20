// @flow
import test, { type TestInterface } from "ava";

import indexToPositional from "../../../src/transpiler/apply-constraints/index-to-positional.js";

test("converts index to positional word", (t: TestInterface) => {
	const positionalWords = [
		"first",
		"second",
		"third",
		"fourth",
		"fifth",
		"sixth",
		"seventh",
		"eigth",
		"ninth"
	];

	for (let i = 0; i < 9; i++) {
		t.is(indexToPositional(i), positionalWords[i]);
	}
});
