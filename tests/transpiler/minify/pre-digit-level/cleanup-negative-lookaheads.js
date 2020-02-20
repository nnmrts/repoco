// @flow
import test, { type TestInterface } from "ava";

import cleanupNegativeLookaheads from "../../../../src/transpiler/minify/pre-digit-level/cleanup-negative-lookaheads.js";

const string = "((?!(5))([0-9]))";

test("digits with no negative lookaheads don't get changed", (t: TestInterface) => {
	const digits = [
		"([0-9])",
		"([A-Z])",
		"([0-9A-Z])",
		"((?=(0))([0-9]))",
		"((?=(A))([A-Z]))",
		"((?=(5))([0-9]))",
		"((?=(5))([0-9A-Z]))",
	];

	for (const digit of digits) {
		t.deepEqual(cleanupNegativeLookaheads(digit), digit);
	}
});

test("number single digits work", (t: TestInterface) => {
	const digits = [
		["((?!(2))([0-9]))", "(0|1|3|4|5|6|7|8|9)"],
		["((?!(3))([0-9]))", "(0|1|2|4|5|6|7|8|9)"],
		["((?!(7))([0-9]))", "(0|1|2|3|4|5|6|8|9)"],
		["((?!(2|3))([0-9]))", "(0|1|4|5|6|7|8|9)"],
		["((?!(3|7))([0-9]))", "(0|1|2|4|5|6|8|9)"],
		["((?!(2|3|7))([0-9]))", "(0|1|4|5|6|8|9)"]
	];

	for (const digit of digits) {
		t.deepEqual(cleanupNegativeLookaheads(digit[0]), digit[1]);
	}
});

test("number multi digits work", (t: TestInterface) => {
	const digits = [
		["((?!(23))([0-9][0-9]))", "(0|1|3|4|5|6|7|8|9)"],
		["((?!(37))([0-9][0-9]))", "(0|1|2|4|5|6|7|8|9)"],
		["((?!(72))([0-9][0-9]))", "(0|1|2|3|4|5|6|8|9)"],
		["((?!(23|37))([0-9][0-9]))", "(0|1|4|5|6|7|8|9)"],
		["((?!(37|72))([0-9][0-9]))", "(0|1|2|4|5|6|8|9)"],
		["((?!(237|372|723))([0-9][0-9]))", "(0|1|4|5|6|8|9)"]
	];

	for (const digit of digits) {
		t.deepEqual(cleanupNegativeLookaheads(digit[0]), digit[1]);
	}
});
