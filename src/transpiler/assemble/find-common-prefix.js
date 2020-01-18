// @flow
export default (strings: string[]): string => {
	if (!strings.length) {
		return "";
	}

	let string1 = strings[0];
	let string2 = strings[strings.length - 1];

	for (let i = 0; i < strings.length; i++) {
		const string = strings[i];
		string1 = string1 < string ? string : string1;
		string2 = string2 > string ? string : string2;
	}

	let j = 0;
	const l = Math.min(string1.length, string2.length);

	while (j < l && string1[j] === string2[j]) {
		j += 1;
	}

	return string1.slice(0, j);
};