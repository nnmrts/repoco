// @flow
import { type Pattern } from "../parser/operations/unfold/pattern.js";

/**
 *
 *
 * @param {string[]} array
 * array
 * @param {string} testValue
 * test value
 * @returns {number[]}
 * indices
 */
export default (array: Pattern, testValue: string): number[] => array
	.map((value: string, index: number): [string, number] => [value, index])
	.filter((value: [string, number]): boolean => value[0] === testValue)
	.map((value: [string, number]): number => value[1]);
