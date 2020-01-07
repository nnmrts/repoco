// @flow
import { Node } from "ohm-js";

import {
	CharacterToken,
	NumberToken,
	AlphanumericToken
} from "../../classes.js";

type Tokens = CharacterToken | NumberToken | AlphanumericToken;

type ClassTokens = Class<CharacterToken> | Class<NumberToken> | Class<AlphanumericToken>;
type TokenKeys = "character" | "number" | "alphanumeric";
type TokenFunction = () => Tokens;

export default Object.fromEntries<TokenKeys, TokenFunction>([
	[
		"character",
		CharacterToken
	],
	[
		"number",
		NumberToken
	],
	[
		"alphanumeric",
		AlphanumericToken
	]
].map((entry: [
	TokenKeys,
	ClassTokens
]): [
	TokenKeys,
	TokenFunction
] => [
	entry[0],
	(string: Node, repeater: Node): Tokens => new entry[1](repeater.unfold()[0])
]));
