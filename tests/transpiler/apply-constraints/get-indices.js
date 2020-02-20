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
	for (const pattern of patterns) {
		for (const token of tokens) {
			t.true(getIndices(pattern, token).length <= pattern.length);
		}
	}
});

test("returns empty array when test value is not found", (t: TestInterface) => {
	for (const pattern of patterns) {
		t.deepEqual(getIndices(pattern, "a"), []);
	}
});
