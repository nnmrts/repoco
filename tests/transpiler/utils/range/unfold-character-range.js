// @flow
import test, { type TestInterface } from "ava";

import unfoldCharacterRange from "../../../../src/transpiler/utils/range/unfold-character.js";
import { characterRangeData } from "../../apply-constraints/unfold-range/data.js";

import unfoldedCharacterRangeData from "./unfold-character-range/data.js";

const {
	single: rS,
	variant: rV,
	multiple: rM
} = characterRangeData;

const {
	single: uRS,
	variant: uRV,
	multiple: uRM
} = unfoldedCharacterRangeData;

test("single digits work", (t: TestInterface) => {
	for (const [i, range] of rS.entries()) {
		t.deepEqual(unfoldCharacterRange(...range.split("-")), uRS[i]);
	}
});

test("variant digits work", (t: TestInterface) => {
	for (const [i, range] of rV.entries()) {
		t.deepEqual(unfoldCharacterRange(...range.split("-")), uRV[i]);
	}
});

test("multiple digits work", (t: TestInterface) => {
	for (const [i, range] of rM.entries()) {
		t.deepEqual(unfoldCharacterRange(...range.split("-")), uRM[i]);
	}
});
