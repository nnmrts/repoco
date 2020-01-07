// @flow
import { Node } from "ohm-js";

type PrimitiveKeys = "upper" | "digit" | "space" | "customAny" | "separators";
type PrimitiveFunction = () => string;

export default Object.fromEntries<PrimitiveKeys, PrimitiveFunction>([
	"upper",
	"digit",
	"space",
	"customAny",
	"separators"
].map((rule: PrimitiveKeys): [
	PrimitiveKeys,
	PrimitiveFunction
] => [
	rule,
	(node: Node): string => node.sourceString
]));
