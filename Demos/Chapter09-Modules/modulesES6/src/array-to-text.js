const privateSpecialCharacters = ">>";

export function arrayToText(array) {
	return array.join(privateSpecialCharacters);
}