// @flow
import test, { type TestInterface } from "ava";

import AlphanumericToken from "../../../../../src/transpiler/parser/classes/token/alphanumeric.js";

const tokens = [
	0,
	1,
	10,
	[0, 0],
	[0, 1],
	[0, 10]
].map((amount: number | [number, number]): AlphanumericToken => new AlphanumericToken(amount));

test("only contains [0-9A-Z] or ([0-9A-Z])?", (t: TestInterface) => {
	for (const token of tokens) {
		t.true(token.every((item: string): boolean => ["[0-9A-Z]", "([0-9A-Z])?"].includes(item)));
	}
});
