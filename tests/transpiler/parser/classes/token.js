// @flow
import test, { type TestInterface } from "ava";

import Token from "../../../../src/transpiler/parser/classes/token.js";
import NumberToken from "../../../../src/transpiler/parser/classes/token/number.js";
import CharacterToken from "../../../../src/transpiler/parser/classes/token/character.js";
import AlphanumericToken from "../../../../src/transpiler/parser/classes/token/alphanumeric.js";

const tokens = [
	0,
	1,
	10,
	[0, 0],
	[0, 1],
	[0, 10]
].map((amount: number | [number, number]): (NumberToken | CharacterToken | AlphanumericToken)[] => [
	NumberToken,
	CharacterToken,
	AlphanumericToken
].map((
	CurrentToken: Class<NumberToken> | Class<CharacterToken> | Class<AlphanumericToken>
): NumberToken | CharacterToken | AlphanumericToken => new CurrentToken(amount))).flat();

test("is an array", (t: TestInterface) => {
	for (const token of tokens) {
		t.true(Array.isArray(token));
	}
});

test("throws on negative", (t: TestInterface) => {
	for (let i = -1; i > -100; i--) {
		t.throws(() => {
			new Token("[A-Z]", i);
		}, {
			instanceOf: RangeError
		});
	}
});
