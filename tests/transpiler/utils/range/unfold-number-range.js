// @flow
import test, { type TestInterface } from "ava";

import unfoldNumberRange from "../../../../src/transpiler/utils/range/unfold-number.js";
import { numberRangeData } from "../../apply-constraints/unfold-range/data.js";

import unfoldedNumberRangeData from "./unfold-number-range/data.js";

const {
	single: rS,
	variant: rV,
	multiple: rM
} = numberRangeData;

const {
	single: uRS,
	variant: uRV,
	multiple: uRM
} = unfoldedNumberRangeData;

test("single digits work", (t: TestInterface) => {
	for (const [i, range] of rS.entries()) {
		t.deepEqual(unfoldNumberRange(...range.split("-")), uRS[i]);
	}
});

test("variant digits work", (t: TestInterface) => {
	for (const [i, range] of rV.entries()) {
		t.deepEqual(unfoldNumberRange(...range.split("-")), uRV[i]);
	}
});

test("multiple digits work", (t: TestInterface) => {
	for (const [i, range] of rM.entries()) {
		t.deepEqual(unfoldNumberRange(...range.split("-")), uRM[i]);
	}
});
