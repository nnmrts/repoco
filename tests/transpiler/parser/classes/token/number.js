// @flow
import test, { type TestInterface } from "ava";

import NumberToken from "../../../../../src/transpiler/parser/classes/token/number.js";

const tokens = [
	0,
	1,
	10,
	[0, 0],
	[0, 1],
	[0, 10]
].map((amount: number | [number, number]): NumberToken => new NumberToken(amount));

test("only contains [0-9] or ([0-9])?", (t: TestInterface) => {
	for (const token of tokens) {
		t.true(token.every((item: string): boolean => ["[0-9]", "([0-9])?"].includes(item)));
	}
});
