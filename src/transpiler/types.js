// @flow
export type Digit = string;

export type PreDigits = $ReadOnlyArray<Digit>;
export type PreVariants = $ReadOnlyArray<PreDigits>;

export type PostDigits = $ReadOnlyArray<Digit> | Digit;
export type PostVariant = $ReadOnlyArray<PostDigits>;
export type PostVariants = $ReadOnlyArray<PostVariant>;
