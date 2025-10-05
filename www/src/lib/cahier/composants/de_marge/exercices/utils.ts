export type ExerciceProps = {
	niveau: number;
	id_exercice: number;
};

type Question = {
	consigne: string;
	enonce: {
		Texte: string;
	};
	explication: string;
	format_réponses: string;
	reponse: {
		bonne: string;
		mauvaises: string[];
	};
	type: string;
};

function shuffle(array: string[]) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

export function onclick(event: MouseEvent) {}

import init, * as wasm from '@vmastro/exercices';
export async function récupération_des_données(niveau: number, id_exercice: number) {
	await init();
	let données = wasm.rust_question(niveau, id_exercice);

	let question: Question = JSON.parse(données)[0];

	let réponses = shuffle([...question.reponse.mauvaises, question.reponse.bonne]);
	let index_bonne_réponse = réponses.indexOf(question.reponse.bonne);

	return {
		énoncé: question.enonce.Texte,
		réponses,
		index_bonne_réponse
	};
}
