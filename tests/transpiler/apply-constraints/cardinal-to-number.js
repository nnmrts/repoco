// @flow
import test, { type TestInterface } from "ava";

import cardinalToNumber from "../../../src/transpiler/apply-constraints/cardinal-to-number";

test("defaults to 1", (t: TestInterface) => {
	t.is(cardinalToNumber(), 1);
});

test("converts word to number", (t: TestInterface) => {
	const numberWords = [
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

	for (let i = 0; i < numberWords.length; i++) {
		t.is(cardinalToNumber(numberWords[i]), i + 1);
	}
});
