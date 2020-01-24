// @flow
import arrayDecast from "../utils/array-decast.js";
import { type PreDigits, type PostDigits } from "../types.js";

export default (digits: PreDigits): PostDigits => arrayDecast(digits);
