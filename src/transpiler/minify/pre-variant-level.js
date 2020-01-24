// @flow
import { type PostVariant } from "../types.js";

import combineSuccessiveDigits from "./pre-variant-level/combine-successive-digits.js";

export default (variant: PostVariant): PostVariant => combineSuccessiveDigits(variant);
