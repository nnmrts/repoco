// @flow
import test, { type TestInterface } from "ava";

import cardinalToNumber from "../../../src/transpiler/apply-constraints/cardinal-to-number.js";

test("converts cardinal word to number", (t: TestInterface) => {
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

	for (const [i, numberWord] of numberWords.entries()) {
		t.is(cardinalToNumber(numberWord), i + 1);
	}
});
