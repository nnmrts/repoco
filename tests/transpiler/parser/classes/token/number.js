// @flow
import test, { type TestInterface } from "ava";

import NumberToken from "../../../../../src/transpiler/parser/classes/token/number.js";

const tokens = [
	0,
	1,
	100,
	[
		0,
		0
	],
	[
		0,
		1
	],
	[
		0,
		100
	]
].map((amount: number | [number, number]): NumberToken => new NumberToken(amount));

test("only contains [0-9] or ([0-9])?", (t: TestInterface) => {
	for (let i = 0; i < tokens.length; i++) {
		t.true(tokens[i].every((item: string): boolean => [
			"[0-9]",
			"([0-9])?"
		].includes(item)));
	}
});