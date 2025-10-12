export const SERIE_1 = [2, 6, 4, 6, 3, 1, 5, 3];
export const SERIE_2 = [45, 38, 46, 39, 40];
export const SERIE_3 = [141, 139, 151, 157, 153, 165, 165, 169, 160, 149];

export const afficher_serie = (serie: number[]) => {
	return `\\left\\{ ${serie.join('~;~')} \\right\\}`;
};

export const effectif_total = (serie: number[]) => {
	return serie.length;
};

export const moyenne = (serie: number[]): number => {
	let sum = serie.reduce((acc, val) => acc + val, 0);
	return sum / serie.length;
};

export const étendue = (serie: number[]): number => {
	return Math.max(...serie) - Math.min(...serie);
};

export const médiane = (serie: number[]): number => {
	serie = serie.slice().sort((a, b) => a - b); // ordre croissant
	if (serie.length % 2 == 0) {
		return (serie[serie.length / 2] + serie[serie.length / 2 - 1]) / 2;
	} else {
		return serie[Math.floor(serie.length / 2)];
	}
};
