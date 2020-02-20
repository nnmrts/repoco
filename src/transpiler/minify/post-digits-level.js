// @flow
import arrayDecast from "../utils/array/decast.js";
import { type PreDigits, type PostDigits } from "../types.js";

/**
 * @example
 * @param digits
 */
export default (digits: PreDigits): PostDigits => arrayDecast(digits);
