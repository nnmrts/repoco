// @flow
/**
 * @example
 * @param array
 */
export default <+T>(array: $ReadOnlyArray<T>): $ReadOnlyArray<T> | T => (array.length === 1 ? array[0] : array);
