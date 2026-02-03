import * as XLSX from 'xlsx';
import { classes, eleves, niveau } from '$lib/constitution_classes/store.svelte';

export async function importerDonnees(fichier: File) {
	const data = await fichier.arrayBuffer();
	const workbook = XLSX.read(data, { type: 'array' });

	recupererLesClassesEtLeursOptions(workbook);
	recupererLesEleves(workbook);
}

function recupererLesClassesEtLeursOptions(workbook: XLSX.WorkBook) {
	const liste_des_classes = workbook.Sheets['Classes'];

	interface to_json {
		Classe: string;
		'LATIN ?': string;
		'GREC ?': string;
		'ALLEMAND LV2 ?': string;
		'ESPAGNOL LV2 ?': string;
		'HISPANICA ?': string;
		'CHAAP ?': string;
	}

	const json_classes: to_json[] = XLSX.utils.sheet_to_json(liste_des_classes);
	console.log(json_classes);

	for (const classe of json_classes) {
		if (classe['Classe'].includes((niveau.value as number).toString())) {
			classes.value = [
				...classes.value,
				{
					index: classe['Classe'],
					eleves: [],
					options: {
						LATIN: 'LATIN ?' in classe ? true : false,
						GREC: 'GREC ?' in classe ? true : false,
						'ALLEMAND LV2': 'ALLEMAND LV2 ?' in classe ? true : false,
						'ESPAGNOL LV2': 'ESPAGNOL LV2 ?' in classe ? true : false,
						HISPANICA: 'HISPANICA ?' in classe ? true : false,
						CHAAP: 'CHAAP ?' in classe ? true : false
					}
				}
			];
		}
	}
}

function recupererLesEleves(workbook: XLSX.WorkBook) {
	let liste_des_eleves;
	switch (niveau.value) {
		case 3:
			liste_des_eleves = workbook.Sheets['Liste des élèves de 4èmes'];
			break;
		case 4:
			liste_des_eleves = workbook.Sheets['Liste des élèves de 5èmes'];
			break;
		case 5:
			liste_des_eleves = workbook.Sheets['Liste des élèves de 6èmes'];
			break;
		case 6:
			liste_des_eleves = workbook.Sheets['Liste des élèves de CM2'];
			break;
	}

	interface eleve_to_json {
		ID: number;
		NOM: string;
		Sexe?: string;
		"Classe \nd'origine"?: string;
		'Nouvelle classe'?: string;
		Note?: 'A' | 'B' | 'C' | 'D';
		Moteur?: 'M' | 'M+';
		Zozo?: 'Z' | 'Z+';
		'Langue Vivante'?: 'HISPANICA' | 'ALLEMAND LV2' | 'ESPAGNOL LV2';
		CHAAP?: 'CHAAP';
		"Langue et \nCulture de l'Antiquité"?: 'LATIN' | 'GREC';
	}

	const json_eleves: eleve_to_json[] = XLSX.utils.sheet_to_json(liste_des_eleves, {
		range: 2 // commence à la ligne 3 (0-indexé)
	});

	for (const eleve of json_eleves) {
		eleves.value = [
			...eleves.value,
			{
				id: eleve['ID'],
				nom: eleve['NOM'],
				niveau: 'Note' in eleve ? eleve['Note'] : undefined,
				genre: 'Sexe' in eleve ? (eleve['Sexe'] as 'G' | 'F') : undefined,
				moteur: 'Moteur' in eleve ? (eleve['Moteur'] as 'M' | 'M+') : undefined,
				zozo: 'Zozo' in eleve ? (eleve['Zozo'] as 'Z' | 'Z+') : undefined,
				LV2: 'Langue Vivante' in eleve ? (eleve['Langue Vivante'] as 'ALLEMAND LV2' | 'ESPAGNOL LV2' | 'HISPANICA') : undefined,
				options: {
					latin: "Langue et \nCulture de l'Antiquité" in eleve ? eleve["Langue et \nCulture de l'Antiquité"] == 'LATIN' : false,
					grec: "Langue et \nCulture de l'Antiquité" in eleve ? eleve["Langue et \nCulture de l'Antiquité"] == 'GREC' : false,
					chaap: 'CHAAP' in eleve ? eleve['CHAAP'] == 'CHAAP' : false
				}
			}
		];
	}
}
