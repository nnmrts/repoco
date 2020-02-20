// @flow
import test, { type TestInterface } from "ava";

import CharacterToken from "../../../../../src/transpiler/parser/classes/token/character.js";

const tokens = [
	0,
	1,
	10,
	[0, 0],
	[0, 1],
	[0, 10]
].map((amount: number | [number, number]): CharacterToken => new CharacterToken(amount));

test("only contains [A-Z] or ([A-Z])?", (t: TestInterface) => {
	for (let i = 0; i < tokens.length; i++) {
		t.true(tokens[i].every((item: string): boolean => [
			"[A-Z]",
			"([A-Z])?"
		].includes(item)));
	}
});
