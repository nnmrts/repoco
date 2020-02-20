// @flow
import { bb26Increment, bb26Range } from "bb26";

/**
 * @example
 * @param start
 * @param end
 */
export default (start: string, end: string): string[] => bb26Range(start, bb26Increment(end));
