// @flow
import test, { type TestInterface } from "ava";

import getIndices from "../../../src/transpiler/apply-constraints/get-indices.js";

const tokens = [
	"c",
	"n",
	"0",
	"(",
	")"
];

const patterns = [
	Array(5).fill("n"),
	[
		...Array(5).fill("c"),
		...Array(5).fill("n"),
	],
	[
		...Array(5).fill("c"),
		...Array(5).fill("n"),
		...Array(5).fill("0")
	],
	[
		"(",
		...Array(5).fill("c"),
		...Array(5).fill("n"),
		...Array(5).fill("0"),
		")"
	],
];

test("result is never bigger than original pattern", (t: TestInterface) => {
	for (let i = 0; i < patterns.length; i++) {
		for (let j = 0; j < tokens.length; j++) {
			t.true(getIndices(patterns[i], tokens[j]).length <= patterns[i].length);
		}
	}
});

test("returns empty array when test value is not found", (t: TestInterface) => {
	for (let i = 0; i < patterns.length; i++) {
		t.deepEqual(getIndices(patterns[i], "a"), []);
	}
});
