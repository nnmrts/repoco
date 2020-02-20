// @flow
import test, { type TestInterface } from "ava";

import findCommonPrefix from "../../../src/transpiler/assemble/find-common-prefix.js";

test("empty array returns empty string", (t: TestInterface) => {
	t.is(findCommonPrefix([]), "");
});

test("array with only one item returns that item", (t: TestInterface) => {
	const string = "A";

	t.is(findCommonPrefix([string]), string);
});

test("result is never longer than the shortest string", (t: TestInterface) => {
	const strings = [
		"ABCDEF",
		"ABCD",
		"ABC"
	];

	const shortestLength = strings.map((string: string): number => string.length).sort()[0];

	t.true(findCommonPrefix(strings).length <= shortestLength);
});

test("completely different strings return empty string", (t: TestInterface) => {
	t.is(findCommonPrefix([
		"A",
		"B",
		"C"
	]), "");
});
