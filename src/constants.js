// @flow
const smallestNumber = 0;
const largestNumber = 9;
export const numberArray = (
	Array(largestNumber - smallestNumber + 1).fill()
		.map(
			(value: void, index: number): string => String(smallestNumber + index)
		): $ReadOnlyArray<string>
);

const smallestLetter = "A";
const largestLetter = "Z";
export const charCodeOfSmallestLetter = smallestLetter.charCodeAt(0);
export const charCodeOfLargestLetter = largestLetter.charCodeAt(0);
export const alphabetLength = charCodeOfLargestLetter - charCodeOfSmallestLetter + 1;

export const characterArray = (
	Array(alphabetLength).fill()
		.map(
			(
				value: void,
				index: number
			): string => String.fromCharCode(charCodeOfSmallestLetter + index)
		): $ReadOnlyArray<string>
);

export const alphanumericArray = [...numberArray, ...characterArray];

export const numberRange = `${smallestNumber}-${largestNumber}`;
export const characterRange = `${smallestLetter}-${largestLetter}`;
export const alphanumericRange = `${numberRange}${characterRange}`;
