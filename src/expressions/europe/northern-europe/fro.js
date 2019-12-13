// @flow
// Faroe Islands
// [FO ]n{3}
// possible last three digits are 100-970
import toRegexRange from "to-regex-range";

const range = toRegexRange(100, 970, {
	capture: true
});

export default new RegExp(`^(FO )?${range}$`);
