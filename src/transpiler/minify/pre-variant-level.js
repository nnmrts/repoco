// @flow
import { type PostVariant } from "../types.js";

import combineSuccessiveDigits from "./pre-variant-level/combine-successive-digits.js";

/**
 * @example
 * @param variant
 */
export default (variant: PostVariant): PostVariant => combineSuccessiveDigits(variant);
