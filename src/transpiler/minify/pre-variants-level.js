// @flow
import { type PreVariants, type PostVariants } from "../types.js";

import chainEqualDigits from "./pre-variants-level/chain-equal-digits.js";
import uniteVariants from "./pre-variants-level/unite-variants.js";

/**
 * @example
 * @param digitsArray
 */
export default (digitsArray: PreVariants): PostVariants => uniteVariants(
	digitsArray,
	chainEqualDigits(digitsArray)
);
