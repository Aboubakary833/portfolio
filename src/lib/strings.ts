/**
 * Take a string str, replace any of its space with a dash and put it in lowercase
 */
export function dashAndLower(str: string): string {
	return str.replaceAll(/\s/g, "-").toLowerCase();
}
