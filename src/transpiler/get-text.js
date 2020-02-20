// @flow
import fs from "fs";

/**
 * @param {string} path -
 * file path.
 * @returns {string}
 * the text.
 * @example
 */
export default (path: string): string => fs.readFileSync(path, "utf8").split("\n")
	.filter((line: string, index: number, array: string[]): boolean => !!line.match(/^\/\/\s/) && (index === 0 || !!array[index - 1].match(/^\/\/\s/)) && !line.startsWith("// @"))
	.slice(1)
	.map((line: string): string => line.replace(/^\/\/\s/, ""))
	.join(" ");
