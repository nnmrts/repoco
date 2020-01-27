// @flow
import test, { type TestInterface } from "ava";

import numberToCardinal from "../../../src/transpiler/apply-constraints/number-to-cardinal.js";

test("defaults to one", (t: TestInterface) => {
	t.is(numberToCardinal(1), "one");
});

test("converts number to cardinal word", (t: TestInterface) => {
	const cardinalWords = [
		"one",
		"two",
		"three",
		"four",
		"five",
		"six",
		"seven",
		"eight",
		"nine"
	];

	for (let i = 0; i < 9; i++) {
		t.is(numberToCardinal(i + 1), cardinalWords[i]);
	}
});
