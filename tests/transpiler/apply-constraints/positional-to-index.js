// @flow
import test, { type TestInterface } from "ava";

import positionalToIndex from "../../../src/transpiler/apply-constraints/positional-to-index.js";
import numberToCardinal from "../../../src/transpiler/apply-constraints/number-to-cardinal.js";
import indexToPositional from "../../../src/transpiler/apply-constraints/index-to-positional.js";

test("position equal to or greater than length throws", (t: TestInterface) => {
	const testLength = 4;

	const testIndexes = [testLength, testLength + 1];

	const testPositionals = testIndexes.map(indexToPositional);

	for (const testPositional of testPositionals) {
		t.throws(() => {
			positionalToIndex(testPositional, testLength, 0, "one");
		}, {
			instanceOf: RangeError,
			message: "position is equal to or greater than length"
		});
	}
});

test("amount greater than length throws", (t: TestInterface) => {
	const positionals = [
		"last",
		"next",
		"first",
		"second",
		"third",
		"fourth",
		"fifth",
		"sixth",
		"seventh",
		"eigth"
	];

	const testLength = 8;

	const testAmount = numberToCardinal(testLength + 1);

	for (const positional of positionals) {
		t.throws(() => {
			positionalToIndex(positional, testLength, 0, testAmount);
		}, {
			instanceOf: RangeError,
			message: "amount is greater than length"
		});
	}
});

const testLimit = 10;

test("just last returns length - 1", (t: TestInterface) => {
	for (let length = 1; length < testLimit; length++) {
		t.is(positionalToIndex("last", length, 0, "one"), length - 1);
	}
});

test("last with amount returns length - amount", (t: TestInterface) => {
	for (let length = 1; length < testLimit; length++) {
		for (let amount = 1; amount < testLimit; amount++) {
			if (amount <= length) {
				t.is(positionalToIndex("last", length, 0, numberToCardinal(amount)), length - amount);
			}
		}
	}
});
