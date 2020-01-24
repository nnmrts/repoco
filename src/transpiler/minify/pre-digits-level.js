// @flow
import arrayCast from "../utils/array-cast.js";
import { type PostDigits, type PreDigits } from "../types.js";

export default (digits: PostDigits): PreDigits => arrayCast(digits);
