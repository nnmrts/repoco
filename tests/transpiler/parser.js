// @flow
import test, { type TestInterface } from "ava";

import geoscheme from "../../src/geoscheme.json";
import getText from "../../src/transpiler/get-text.js";
import parser from "../../src/transpiler/parser.js";

const paths = [];

for (let i = 0; i < Object.keys(geoscheme).length; i++) {
	const continentName = Object.keys(geoscheme)[i];
	const continent = geoscheme[continentName];
	for (let j = 0; j < Object.keys(continent).length; j++) {
		const regionName = Object.keys(continent)[j];
		const region = continent[regionName];
		for (let k = 0; k < region.length; k++) {
			const country = region[k];
			paths.push(`./src/expressions/${continentName}/${regionName}/${country}.js`);
		}
	}
}

test("returns array", (t: TestInterface) => {
	for (let i = 0; i < paths.length; i++) {
		const definition = getText(paths[i]);

		if (!Array.isArray(parser(definition))) {
			t.fail();
		}
		else {
			t.pass();
		}
	}
});

test("empty definition returns empty array", (t: TestInterface) => {
	for (let i = 0; i < paths.length; i++) {
		const parsed = parser("");
		if (!Array.isArray(parsed) && parsed.length === 0) {
			t.fail();
		}
		else {
			t.pass();
		}
	}
});

test("quantifiers quantify", (t: TestInterface) => {
	for (let i = 1; i < 100; i++) {
		t.deepEqual(parser(`n{${i}}`)[0].pattern, Array(i).fill("[0-9]"));
		t.deepEqual(parser(`c{${i}}`)[0].pattern, Array(i).fill("[A-Z]"));
		t.deepEqual(parser(`x{${i}}`)[0].pattern, Array(i).fill("[A-Z0-9]"));
	}
});

test("quantifiers throw on negative", (t: TestInterface) => {
	for (let i = 1; i < 100; i++) {
		const invalids = [
			`n{${-i}}`,
			`c{${-i}}`,
			`x{${-i}}`
		];

		for (let j = 0; j < invalids.length; j++) {
			t.throws(() => {
				parser(invalids[j]);
			}, {
				instanceOf: TypeError
			});
		}
	}
});

test("quantifiers don't quantify rubbish", (t: TestInterface) => {
	for (let i = 1; i < 100; i++) {
		const invalids = [
			`a{${i}}`,
			`{${i}}`
		];

		for (let j = 0; j < invalids.length; j++) {
			t.throws(() => {
				parser(invalids[j]);
			}, {
				instanceOf: TypeError
			});
		}
	}
});
		}
	}
});
