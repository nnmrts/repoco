// @flow
import { type Digit } from "../../types.js";

/**
 * @example
 * @param digit
 */
export default (digit: Digit): Digit => {
	const regex = /^\(\(\?!\(([0-9A-Z])\)\)\(\[(0-9|A-Z|0-9A-Z|A-Z0-9)\]\)\)$/;

	const impossible = digit.replace(regex, "$1");
	const range = digit.replace(regex, "$2");

	if (impossible !== digit) {
		if (!Number.isNaN(Number(impossible))) {
			return `(${
				Array
					.from(Array(10)).map((item: empty, i: number): number => i)
					.filter((number: number): boolean => number !== Number(impossible))
					.join("|")
			})`;
		}
		if (range === "A-Z") {
			return `(${
				Array
					.from(Array(26)).map((item: empty, i: number): string => String.fromCharCode(65 + i))
					.filter((string: string): boolean => string !== impossible)
					.join("|")
			})`;
		}
		return `(${
			Array
				.from(Array(36)).map((item: empty, i: number): number | string => (i < 10 ? i : String.fromCharCode(55 + i)))
				.filter((numberOrString: number | string): boolean => numberOrString !== impossible)
				.join("|")
		})`;
	}

	return digit;
};
