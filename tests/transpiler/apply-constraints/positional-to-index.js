// @flow
import test, { type TestInterface } from "ava";

import positionalToIndex from "../../../src/transpiler/apply-constraints/positional-to-index.js";
import numberToCardinal from "../../../src/transpiler/apply-constraints/number-to-cardinal.js";

const positions = [
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

test("position equal to or greater than length throws", (t: TestInterface) => {
	t.throws(() => {
		positionalToIndex("fifth", 4, 0, "one");
	}, {
		instanceOf: RangeError,
		message: "position is equal to or greater than length"
	});

	t.throws(() => {
		positionalToIndex("sixth", 4, 0, "one");
	}, {
		instanceOf: RangeError,
		message: "position is equal to or greater than length"
	});
});

test("amount greater than length throws", (t: TestInterface) => {
	for (let i = 0; i < positions.length; i++) {
		t.throws(() => {
			positionalToIndex(positions[i], 8, 0, "nine");
		}, {
			instanceOf: RangeError,
			message: "amount is greater than length"
		});
	}
});

test("just last returns length - 1", (t: TestInterface) => {
	for (let length = 1; length < 10; length++) {
		t.is(positionalToIndex("last", length, 0, "one"), length - 1);
	}
});

test("last with amount returns length - amount", (t: TestInterface) => {
	for (let length = 1; length < 10; length++) {
		for (let amount = 1; amount < 10; amount++) {
			if (amount <= length) {
				t.is(positionalToIndex("last", length, 0, numberToCardinal(amount)), length - amount);
			}
		}
	}
});
