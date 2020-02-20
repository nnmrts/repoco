// @flow
import test, { type TestInterface } from "ava";

import geoscheme from "../../src/geoscheme.json";
import getText from "../../src/transpiler/get-text.js";
import parser from "../../src/transpiler/parser.js";

const paths = [];

for (const continentName in geoscheme) {
	const continent = geoscheme[continentName];
	for (const regionName in continent) {
		const region = continent[regionName];
		for (const countryCode of region) {
			paths.push(`./src/expressions/${continentName}/${regionName}/${countryCode}.js`);
		}
	}
}

test("returns array", (t: TestInterface) => {
	for (const path of paths) {
		const definition = getText(path);

		if (!Array.isArray(parser(definition))) {
			t.fail();
		}
		else {
			t.pass();
		}
	}
});

test("empty definition returns empty array", (t: TestInterface) => {
	const parsed = parser("");
	if (!Array.isArray(parsed) && parsed.length === 0) {
		t.fail();
	}
	else {
		t.pass();
	}
});

test("quantifiers quantify", (t: TestInterface) => {
	for (let i = 1; i < 10; i++) {
		t.deepEqual(parser(`n{${i}}`)[0].pattern, Array(i).fill("[0-9]"));
		t.deepEqual(parser(`c{${i}}`)[0].pattern, Array(i).fill("[A-Z]"));
		t.deepEqual(parser(`x{${i}}`)[0].pattern, Array(i).fill("[0-9A-Z]"));
	}
});

test("quantifiers throw on negative", (t: TestInterface) => {
	for (let i = 1; i < 10; i++) {
		const invalids = [
			`n{${-i}}`,
			`c{${-i}}`,
			`x{${-i}}`
		];

		for (const invalid of invalids) {
			t.throws(() => {
				parser(invalid);
			}, {
				instanceOf: TypeError
			});
		}
	}
});

test("quantifiers don't quantify rubbish", (t: TestInterface) => {
	for (let i = 1; i < 10; i++) {
		const invalids = [`a{${i}}`, `{${i}}`];

		for (const invalid of invalids) {
			t.throws(() => {
				parser(invalid);
			}, {
				instanceOf: TypeError
			});
		}
	}
});

test("at index doesn't throw", (t: TestInterface) => {
	for (let i = 1; i < 10; i++) {
		const definitions = [`n{${i * 2}} possible digits at index ${i} are 0-3`, `n{${i * 2}} impossible digits at index ${i} are 0-3`];

		for (const definition of definitions) {
			t.notThrows(() => {
				parser(definition);
			});
		}
	}
});
