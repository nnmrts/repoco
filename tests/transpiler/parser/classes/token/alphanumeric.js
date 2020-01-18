// @flow
import test, { type TestInterface } from "ava";

import AlphanumericToken from "../../../../../src/transpiler/parser/classes/token/alphanumeric.js";

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
].map((amount: number | [number, number]): AlphanumericToken => new AlphanumericToken(amount));

test("only contains [A-Z0-9] or ([A-Z0-9])?", (t: TestInterface) => {
	for (let i = 0; i < tokens.length; i++) {
		t.true(tokens[i].every((item: string): boolean => [
			"[A-Z0-9]",
			"([A-Z0-9])?"
		].includes(item)));
	}
});
