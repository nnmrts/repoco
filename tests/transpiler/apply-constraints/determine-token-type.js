// @flow
import test, { type TestInterface } from "ava";

import determineTokenType from "../../../src/transpiler/apply-constraints/determine-token-type.js";

test("throws on anything other than uppercase alphanumeric digits", (t: TestInterface) => {
	const tokens = [
		" ",
		"-",
		".",
		"a",
		" -",
		".a",
		" A",
		"-0",
		".A0",
		"🙃"
	];

	for (const token of tokens) {
		t.throws(() => {
			determineTokenType(token);
		}, {
			instanceOf: RangeError,
			message: "string not in uppercase alphanumeric range"
		});
	}
});

test("numbers are determined to be numbers", (t: TestInterface) => {
	const tokens = [
		"0",
		"1",
		"5",
		"8",
		"9",
		"01",
		"589"
	];

	for (const token of tokens) {
		t.is(determineTokenType(token), "number");
	}
});

test("characters are determined to be characters", (t: TestInterface) => {
	const tokens = [
		"A",
		"B",
		"E",
		"H",
		"I",
		"AB",
		"EHI"
	];

	for (const token of tokens) {
		t.is(determineTokenType(token), "character");
	}
});

test("alphanumerics are determined to be alphanumerics", (t: TestInterface) => {
	const tokens = [
		"A0",
		"1B",
		"E5",
		"8H",
		"I9",
		"0A1B",
		"E5H8I9"
	];

	for (const token of tokens) {
		t.is(determineTokenType(token), "alphanumeric");
	}
});
