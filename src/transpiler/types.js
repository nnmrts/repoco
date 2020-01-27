// @flow
export type Digit = string;

export type PreDigits = $ReadOnlyArray<Digit>;
export type PreVariants = $ReadOnlyArray<PreDigits>;

export type PostDigits = $ReadOnlyArray<Digit> | Digit;
export type PostVariant = $ReadOnlyArray<PostDigits>;
export type PostVariants = $ReadOnlyArray<PostVariant>;

export type Positional =
	"last" |
	"next" |
	"first" |
	"second" |
	"third" |
	"fourth" |
	"fifth" |
	"sixth" |
	"seventh" |
	"eigth" |
	"ninth";

export type Cardinal =
	"one" |
	"two" |
	"three" |
	"four" |
	"five" |
	"six" |
	"seven" |
	"eight" |
	"nine";
