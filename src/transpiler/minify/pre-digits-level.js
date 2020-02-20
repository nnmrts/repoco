// @flow
import arrayCast from "../utils/array/cast.js";
import { type PostDigits, type PreDigits } from "../types.js";

/**
 * @example
 * @param digits
 */
export default (digits: PostDigits): PreDigits => arrayCast(digits);
