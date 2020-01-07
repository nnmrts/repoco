// @flow
import type { PreVariants, PostVariants } from "../types.js";

import chainEqualDigits from "./pre-variants-level/chain-equal-digits.js";
import uniteVariants from "./pre-variants-level/unite-variants.js";

export default (digitsArray: PreVariants): PostVariants => uniteVariants(
	digitsArray,
	chainEqualDigits(digitsArray)
);
