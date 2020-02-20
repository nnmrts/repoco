// @flow
import test, { type TestInterface } from "ava";

import determineRange from "../../../src/transpiler/apply-constraints/determine-range.js";
import numberToCardinal from "../../../src/transpiler/apply-constraints/number-to-cardinal.js";
import positionalToIndex from "../../../src/transpiler/apply-constraints/positional-to-index.js";

const positions = [
	"first",
	"second",
	"third",
	"fourth",
	"fifth",
	"sixth",
	"seventh",
	"eigth",
	"last",
	"next",
];

test("end greater than length throws", (t: TestInterface) => {
	t.throws(() => {
		determineRange("third", 4, 0, "three");
	}, {
		instanceOf: RangeError,
		message: "end is greater than length"
	});
});

test("position equal to or greater than length throws", (t: TestInterface) => {
	t.throws(() => {
		determineRange("fifth", 4, 0, "one");
	}, {
		instanceOf: RangeError,
		message: "position is equal to or greater than length"
	});

	t.throws(() => {
		determineRange("sixth", 4, 0, "one");
	}, {
		instanceOf: RangeError,
		message: "position is equal to or greater than length"
	});
});

test("amount greater than length throws", (t: TestInterface) => {
	for (const position of positions) {
		t.throws(() => {
			determineRange(position, 8, 0, "nine");
		}, {
			instanceOf: RangeError,
			message: "amount is greater than length"
		});
	}
});

const constantIndex = 0;
const constantAmount = 2;
const constantLength = 9;

test("last works", (t: TestInterface) => {
	for (let length = 2; length < 10; length++) {
		t.deepEqual(determineRange("last", length, constantIndex, numberToCardinal(constantAmount)), [length - constantAmount, length]);
	}

	for (let index = 2; index < 10; index++) {
		t.deepEqual(determineRange("last", constantLength, index, numberToCardinal(constantAmount)), [constantLength - constantAmount, constantLength]);
	}

	for (let amount = 1; amount < 10; amount++) {
		t.deepEqual(determineRange("last", constantLength, constantIndex, numberToCardinal(amount)), [constantLength - amount, constantLength]);
	}
});

test("next works", (t: TestInterface) => {
	for (let length = 2; length < 10; length++) {
		t.deepEqual(determineRange("next", length, constantIndex, numberToCardinal(constantAmount)), [constantIndex, constantIndex + constantAmount]);
	}

	for (let index = 2; index < 8; index++) {
		t.deepEqual(determineRange("next", constantLength, index, numberToCardinal(constantAmount)), [index, index + constantAmount]);
	}

	for (let amount = 1; amount < 10; amount++) {
		t.deepEqual(determineRange("next", constantLength, constantIndex, numberToCardinal(amount)), [0, amount]);
	}
});

test("positionals work", (t: TestInterface) => {
	for (let i = 0; i < 8; i++) {
		const positional = positions[i];

		const positionalNumber = positionalToIndex(positional, constantLength, constantIndex, "one");

		for (let length = 2; length < 10; length++) {
			if (positionalNumber + constantAmount <= length) {
				t.deepEqual(
					determineRange(
						positional,
						length,
						constantIndex,
						numberToCardinal(constantAmount)
					), [constantIndex + positionalNumber, constantIndex + positionalNumber + constantAmount]
				);
			}
		}

		for (let index = 2; index < 8; index++) {
			t.deepEqual(
				determineRange(
					positional,
					constantLength,
					index,
					numberToCardinal(constantAmount)
				), [positionalNumber, positionalNumber + constantAmount]
			);
		}

		for (let amount = 1; amount < 10; amount++) {
			if (positionalNumber + amount <= constantLength) {
				t.deepEqual(
					determineRange(
						positional,
						constantLength,
						constantIndex,
						numberToCardinal(amount)
					), [positionalNumber, positionalNumber + amount]
				);
			}
		}
	}
});
