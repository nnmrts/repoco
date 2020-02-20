// @flow
import test, { type TestInterface } from "ava";

import unfoldRange from "../../../src/transpiler/apply-constraints/unfold-range.js";

import {
	numberSimpleData,
	numberComplexData,
	characterSimpleData,
	characterComplexData,
	alphanumericSimpleData,
	alphanumericComplexData
} from "./unfold-range/data.js";

test("throws on impossible range", (t: TestInterface) => {
	const impossibleRanges = [
		"1-0",
		"10-00",
		"10-0",
		"B-A",
		"BA-AA",
		"BA-A",
		"B1-A0",
		"B1-A"
	];

	for (const impossibleRange of impossibleRanges) {
		t.throws(() => {
			unfoldRange(impossibleRange);
		}, {
			instanceOf: Error,
			message: "range is not possible"
		});
	}
});

const {
	single: nSS,
	variant: nSV,
	multiple: nSM
} = numberSimpleData;

test("simple single number digits only get array-casted", (t: TestInterface) => {
	for (const rangeArray of nSS) {
		for (const range of rangeArray) {
			t.deepEqual(unfoldRange(range), [range]);
		}
	}
});

test("simple variant number digits only get array-casted", (t: TestInterface) => {
	for (const rangeArray of nSV) {
		for (const range of rangeArray) {
			t.deepEqual(unfoldRange(range), [range]);
		}
	}
});

test("simple multi number digits only get array-casted", (t: TestInterface) => {
	for (const rangeArray of nSM) {
		for (const range of rangeArray) {
			t.deepEqual(unfoldRange(range), [range]);
		}
	}
});

const {
	single: nCS,
	variant: nCV,
	multiple: nCM
} = numberComplexData;

test("complex single number digits have equal or greater length", (t: TestInterface) => {
	for (const rangeArray of nCS) {
		for (const range of rangeArray) {
			t.true(unfoldRange(range).length >= [range].length);
		}
	}
});

test("complex variant number digits have equal or greater length", (t: TestInterface) => {
	for (const rangeArray of nCV) {
		for (const range of rangeArray) {
			t.true(unfoldRange(range).length >= [range].length);
		}
	}
});

test("complex multi number digits have equal or greater length", (t: TestInterface) => {
	for (const rangeArray of nCM) {
		for (const range of rangeArray) {
			t.true(unfoldRange(range).length >= [range].length);
		}
	}
});

const {
	single: cSS,
	variant: cSV,
	multiple: cSM
} = characterSimpleData;

test("simple single character digits only get array-casted", (t: TestInterface) => {
	for (const rangeArray of cSS) {
		for (const range of rangeArray) {
			t.deepEqual(unfoldRange(range), [range]);
		}
	}
});

test("simple variant character digits only get array-casted", (t: TestInterface) => {
	for (const rangeArray of cSV) {
		for (const range of rangeArray) {
			t.deepEqual(unfoldRange(range), [range]);
		}
	}
});

test("simple multi character digits only get array-casted", (t: TestInterface) => {
	for (const rangeArray of cSM) {
		for (const range of rangeArray) {
			t.deepEqual(unfoldRange(range), [range]);
		}
	}
});

const {
	single: cCS,
	variant: cCV,
	multiple: cCM
} = characterComplexData;

test("complex single character digits have equal or greater length", (t: TestInterface) => {
	for (const rangeArray of cCS) {
		for (const range of rangeArray) {
			t.true(unfoldRange(range).length >= [range].length);
		}
	}
});

test("complex variant character digits have equal or greater length", (t: TestInterface) => {
	for (const rangeArray of cCV) {
		for (const range of rangeArray) {
			t.true(unfoldRange(range).length >= [range].length);
		}
	}
});

test("complex multi character digits have equal or greater length", (t: TestInterface) => {
	for (const rangeArray of cCM) {
		for (const range of rangeArray) {
			t.true(unfoldRange(range).length >= [range].length);
		}
	}
});

const {
	single: aSS,
	variant: aSV,
	multiple: aSM
} = alphanumericSimpleData;

test("simple single alphanumeric digits only get array-casted", (t: TestInterface) => {
	for (const rangeArray of aSS) {
		for (const range of rangeArray) {
			t.deepEqual(unfoldRange(range), [range]);
		}
	}
});

test("simple variant alphanumeric digits only get array-casted", (t: TestInterface) => {
	for (const rangeArray of aSV) {
		for (const range of rangeArray) {
			t.deepEqual(unfoldRange(range), [range]);
		}
	}
});

test("simple multi alphanumeric digits only get array-casted", (t: TestInterface) => {
	for (const rangeArray of aSM) {
		for (const range of rangeArray) {
			t.deepEqual(unfoldRange(range), [range]);
		}
	}
});

const {
	single: aCS,
	variant: aCV,
	multiple: aCM
} = alphanumericComplexData;

test("complex single alphanumeric digits have equal or greater length", (t: TestInterface) => {
	for (const rangeArray of aCS) {
		for (const range of rangeArray) {
			t.true(unfoldRange(range).length >= [range].length);
		}
	}
});

test("complex variant alphanumeric digits have equal or greater length", (t: TestInterface) => {
	for (const rangeArray of aCV) {
		for (const range of rangeArray) {
			t.true(unfoldRange(range).length >= [range].length);
		}
	}
});

test("complex multi alphanumeric digits have equal or greater length", (t: TestInterface) => {
	for (const rangeArray of aCM) {
		for (const range of rangeArray) {
			t.true(unfoldRange(range).length >= [range].length);
		}
	}
});
