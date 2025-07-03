type Eleve = {
	id: number;
	nom: string;
	niveau?: 'A' | 'B' | 'C' | 'D';
	moteur?: 'M' | 'M+';
	zozo?: 'Z' | 'Z+';
	genre?: 'G' | 'F';
	LV2?: 'ALLEMAND LV2' | 'ESPAGNOL LV2' | 'HISPANICA';
	options: {
		chaap: boolean;
		latin: boolean;
		grec: boolean;
	};
};

type Classe = {
	index: string;
	eleves: Eleve[];
	options: {
		LATIN: boolean;
		GREC: boolean;
		'ALLEMAND LV2': boolean;
		'ESPAGNOL LV2': boolean;
		HISPANICA: boolean;
		CHAAP: boolean;
	};
};

type Donnees = {
	classes: Classe[];
	eleves: Eleve[];
};

function ajouterEleve(classe: Classe, eleve: Eleve): Classe {
	return {
		...classe,
		eleves: [...classe.eleves, eleve].sort((a, b) => a.nom.localeCompare(b.nom))
	};
}

function couleur(option: string): string {
	switch (option) {
		case 'LATIN':
			return 'green';
		case 'GREC':
			return 'purple';
		case 'ALLEMAND LV2':
			return 'blue';
		case 'ESPAGNOL LV2':
			return 'darkorange';
		case 'HISPANICA':
			return 'red';
		case 'CHAAP':
			return 'orange';
	}
	return 'black';
}

function texte(option: string): string {
	switch (option) {
		case 'LATIN':
			return 'LATIN';
		case 'GREC':
			return 'GREC';
		case 'ALLEMAND LV2':
			return 'ALL';
		case 'ESPAGNOL LV2':
			return 'ESP';
		case 'HISPANICA':
			return 'HISP.';
		case 'CHAAP':
			return 'CHAAP';
	}
	return '';
}

export function eleve_et_classe_incompatibles(eleve: Eleve, classe: Classe) {
	if (eleve.options.latin && !classe.options['LATIN']) return true;
	if (eleve.options.grec && !classe.options['GREC']) return true;
	if (eleve.options.chaap && !classe.options['CHAAP']) return true;
	if (eleve.LV2 === 'ALLEMAND LV2' && !classe.options['ALLEMAND LV2']) return true;
	if (eleve.LV2 === 'ESPAGNOL LV2' && !classe.options['ESPAGNOL LV2']) return true;
	if (eleve.LV2 === 'HISPANICA' && !classe.options['HISPANICA']) return true;

	return false;
}

export type { Eleve, Classe, Donnees };
export { ajouterEleve, couleur, texte };
