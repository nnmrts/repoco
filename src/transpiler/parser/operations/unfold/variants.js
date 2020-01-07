// @flow
/* eslint no-unused-vars: ["error", { "args": "none" }] */
import { Node } from "ohm-js";

import { type AnnotatedVariant } from "./variant.js";

export default (variants: Node): AnnotatedVariant[] => variants.children[0].children.map((variant: Node): AnnotatedVariant => variant.unfold()).flat().filter((variant: AnnotatedVariant | "or"): boolean => variant !== "or");
