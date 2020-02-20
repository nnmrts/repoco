// @flow
import test, { type TestInterface } from "ava";

import addQuantifiers from "../../../../src/transpiler/minify/pre-digit-level/add-quantifiers.js";

const singleDigits = [
	"[0]",
	"[A]",
	"[0A]",
	"[0-9]",
	"[A-Z]",
	"[0-9A-Z]"
];

test("digits without brackets don't get changed", (t: TestInterface) => {
	const digits = singleDigits.map((digit: string): string => digit.replace(/\[|]/g, "")).map((digit: string, index: number): string => digit.repeat(index + 1));

	for (const digit of digits) {
		t.is(addQuantifiers(digit), digit);
	}
});

test("lower case and non-alphanumeric digits don't get changed", (t: TestInterface) => {
	const digits = [
		"-",
		".",
		"%",
		"a",
		"Ä",
		"Ä0",
		"🙃",
		"-.",
		"aÄ0",
		"-.%aÄ🙃"
	].map((digit: string, index: number): string => digit.repeat(index + 1));

	for (const digit of digits) {
		t.is(addQuantifiers(digit), digit);
	}
});

test("open range digits don't get changed", (t: TestInterface) => {
	const digits = [
		"[0-]",
		"[A-]",
		"[0-9A-]"
	].map((digit: string, index: number): string => digit.repeat(index + 1));

	for (const digit of digits) {
		t.is(addQuantifiers(digit), digit);
	}
});

test("single digits don't get changed", (t: TestInterface) => {
	for (const singleDigit of singleDigits) {
		t.is(addQuantifiers(singleDigit), singleDigit);
	}
});

test("simple repeated digits work", (t: TestInterface) => {
	const digits = singleDigits.map(
		(digit: string, index: number): [string, string] => [digit.repeat(index + 2), `${digit}{${index + 2}}`]
	);

	for (const digit of digits) {
		t.is(addQuantifiers(digit[0]), digit[1]);
	}
});

test("single and multiple repeated digits work", (t: TestInterface) => {
	const digits = [
		["[0][A][A][A]", "[0][A]{3}"],
		["[0][0][A][0A][0A][0A]", "[0]{2}[A][0A]{3}"],
		["[0-9][0-9][A-Z][0-9A-Z][0-9A-Z][0-9A-Z]", "[0-9]{2}[A-Z][0-9A-Z]{3}"]
	];

	for (const digit of digits) {
		t.is(addQuantifiers(digit[0]), digit[1]);
	}
});
