// @flow
import arrayDecast from "../utils/array-decast";
import type { PreDigits, PostDigits } from "../types.js";

export default (digits: PreDigits): PostDigits => arrayDecast(digits);
