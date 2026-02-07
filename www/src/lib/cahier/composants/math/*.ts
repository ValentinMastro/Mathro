export { default as LatexAlign } from './LatexAlign.svelte';
export { NombreDecimal, POSITIONS } from './NombreDecimal';

export function chiffres_romains(n: number, en_minuscules: boolean = false): string {
	if (n < 1 || n > 3999) throw new Error('Nombre hors de portée');

	const romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
	const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

	let result = '';
	for (let i = 0; i < romans.length; i++) {
		while (n >= values[i]!) {
			result += romans[i]!;
			n -= values[i]!;
		}
	}

	return en_minuscules ? result.toLowerCase() : result;
}
