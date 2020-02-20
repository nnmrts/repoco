// @flow
import test, { type TestInterface } from "ava";

import unfoldAlphanumericRange from "../../../../src/transpiler/utils/range/unfold-alphanumeric.js";
import { alphanumericRangeData } from "../../apply-constraints/unfold-range/data.js";

import unfoldedAlphanumericRangeData from "./unfold-alphanumeric-range/data.js";

const {
	single: rS,
	variant: rV,
	multiple: rM
} = alphanumericRangeData;

const {
	single: uRS,
	variant: uRV,
	multiple: uRM
} = unfoldedAlphanumericRangeData;

test("single digits work", (t: TestInterface) => {
	for (const [i, range] of rS.entries()) {
		t.deepEqual(unfoldAlphanumericRange(...range.split("-")), uRS[i]);
	}
});

test("variant digits work", (t: TestInterface) => {
	for (const [i, range] of rV.entries()) {
		t.deepEqual(unfoldAlphanumericRange(...range.split("-")), uRV[i]);
	}
});

test("multiple digits work", (t: TestInterface) => {
	for (const [i, range] of rM.entries()) {
		t.deepEqual(unfoldAlphanumericRange(...range.split("-")), uRM[i]);
	}
});
