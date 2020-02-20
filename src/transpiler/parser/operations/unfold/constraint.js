// @flow
/* eslint no-unused-vars: ["error", { "args": "none" }] */
import { Node } from "ohm-js";

import { type Constraint } from "./constraint-actions.js";

export type { Constraint };

/**
 * @example
 * @param constraints
 */
export default (constraints: Node): Constraint[] => constraints.unfold();
