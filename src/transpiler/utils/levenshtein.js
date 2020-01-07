// @flow
/**
 * @param {string} string1
 * string
 * @param {string} string2
 * string
 * @returns {number}
 * the levenshtein distance
 */
export default (string1: string, string2: string): number => {
	// Create empty edit distance matrix for all possible modifications of
	// substrings of a to substrings of b.
	const distanceMatrix = Array(string2.length + 1).fill(null).map((): number[] => Array(string1.length + 1).fill(null));

	// Fill the first row of the matrix.
	// If this is first row then we're transforming empty string to a.
	// In this case the number of transformations equals to size of a substring.
	for (let i = 0; i <= string1.length; i += 1) {
		distanceMatrix[0][i] = i;
	}

	// Fill the first column of the matrix.
	// If this is first column then we're transforming empty string to b.
	// In this case the number of transformations equals to size of b substring.
	for (let j = 0; j <= string2.length; j += 1) {
		distanceMatrix[j][0] = j;
	}

	for (let j = 1; j <= string2.length; j += 1) {
		for (let i = 1; i <= string1.length; i += 1) {
			const indicator = string1[i - 1] === string2[j - 1] ? 0 : 1;
			distanceMatrix[j][i] = Math.min(
				distanceMatrix[j][i - 1] + 1, // deletion
				distanceMatrix[j - 1][i] + 1, // insertion
				distanceMatrix[j - 1][i - 1] + indicator, // substitution
			);
		}
	}

	return distanceMatrix[string2.length][string1.length];
};
