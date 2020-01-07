// @flow
import fs from "fs";

import ohm from "ohm-js";

export default ohm.grammar(fs.readFileSync("./src/transpiler/parser/grammar.ohm"));
