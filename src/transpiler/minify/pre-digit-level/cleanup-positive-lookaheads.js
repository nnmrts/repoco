// @flow
import type { Digit } from "../../types.js";

export default (digit: Digit): Digit => digit.replace(/^\(\(\?=\(([0-9A-Z])\)\)\(\[(0-9|A-Z|0-9A-Z|A-Z0-9)\]\)\)$/, "$1");
