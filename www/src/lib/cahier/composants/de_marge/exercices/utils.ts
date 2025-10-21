export type ExerciceProps = {
	niveau: number;
	id_exercice: number;
	position?: number;
};

type Question = {
	consigne: string;
	enonce:
		| {
				Texte: string;
				Latex: never;
		  }
		| {
				Latex: string;
				Texte: never;
		  };
	explication: string;
	format_reponses: string;
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

import init, * as wasm from '@vmastro/exercices';
export async function récupération_des_données(niveau: number, id_exercice: number) {
	await init();
	let données = wasm.rust_question(niveau, id_exercice);

	let question: Question = JSON.parse(données)[0];

	let réponses = shuffle([...question.reponse.mauvaises, question.reponse.bonne]);
	let index_bonne_réponse = réponses.indexOf(question.reponse.bonne);

	let énoncé;
	let format_réponses = question.format_reponses;

	if (question.enonce.Texte) {
		énoncé = {
			type: 'Texte',
			contenu: question.enonce.Texte
		};
	} else if (question.enonce.Latex) {
		énoncé = {
			type: 'Latex',
			contenu: question.enonce.Latex
		};
	} else {
		énoncé = {
			type: '',
			contenu: ''
		};
	}

	return {
		énoncé,
		format_réponses,
		index_bonne_réponse,
		réponses
	};
}

import { math } from 'mathlifier';
export function afficher_énoncé(énoncé: { type: string; contenu: string }) {
	if (énoncé.type === 'Texte') {
		return énoncé.contenu;
	} else if (énoncé.type === 'Latex') {
		return math(énoncé.contenu);
	} else {
		return '';
	}
}

export function afficher_réponse(réponse: string, format_réponses: string) {
	if (format_réponses === 'Texte') {
		return réponse;
	} else if (format_réponses === 'Latex') {
		return math(réponse);
	} else if (format_réponses === 'Nombre') {
		return Number(réponse).toLocaleString();
	} else {
		return réponse;
	}
}
