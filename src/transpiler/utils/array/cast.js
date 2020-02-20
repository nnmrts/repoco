// @flow
/**
 * @example
 * @param value
 */
export default <+T>(value: $ReadOnlyArray<T> | T): $ReadOnlyArray<T> => {
	if (!Array.isArray(value)) {
		return [value];
	}

	return value;
};
