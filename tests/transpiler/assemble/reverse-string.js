// @flow
import test, { type TestInterface } from "ava";

import reverseString from "../../../src/transpiler/assemble/reverse-string.js";

test("single digit returns that digit", (t: TestInterface) => {
	t.is(reverseString("A"), "A");
});

test("reverses a string", (t: TestInterface) => {
	t.is(reverseString("ABC"), "CBA");
});

test("result has always same length as input string", (t: TestInterface) => {
	const strings = [
		"A",
		"BC",
		"DEF",
		"GHIJ"
	];

	for (const string of strings) {
		t.is(reverseString(string).length, string.length);
	}
});
