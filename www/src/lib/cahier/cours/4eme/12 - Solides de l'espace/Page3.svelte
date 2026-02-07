<script lang="ts">
	import { Contenu, DansLaMarge } from '$lib/cahier/composants/de_chapitrage/*';
	import { Partie, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Item, Nomenclature } from '$lib/cahier/composants/de_cours/*';
	import { Nombre } from '$lib/cahier/composants/de_marge/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';

	let nombre_de_côtés: number = $state(12);

	function nom_du_polygone_selon_Kepler(n: number): string {
		let polygones_de_1_à_19 = [
			'',
			'monogone',
			'digone',
			'triangle',
			'quadrilatère',
			'pentagone',
			'hexagone',
			'heptagone',
			'octogone',
			'nonagone',
			'décagone',
			'hendécagone',
			'dodécagone',
			'tridécagone',
			'tétradécagone',
			'pentadécagone',
			'hexadécagone',
			'heptadécagone',
			'octadécagone',
			'ennéadécagone'
		];

		if (n <= 19) {
			return polygones_de_1_à_19[n]!;
		}

		/* Entre 20 et 99 côtés */
		let dizaines = (n - (n % 10)) / 10;
		let unites = n % 10;

		let nom_dizaine = '';
		let nom_unite = '';

		switch (dizaines) {
			case 2:
				unites == 0 ? (nom_dizaine = 'icosa') : (nom_dizaine = 'icosi');
				break;
			case 3:
				nom_dizaine = 'triaconta';
				break;
			case 4:
				nom_dizaine = 'tétraconta';
				break;
			case 5:
				nom_dizaine = 'pentaconta';
				break;
			case 6:
				nom_dizaine = 'hexaconta';
				break;
			case 7:
				nom_dizaine = 'heptaconta';
				break;
			case 8:
				nom_dizaine = 'octaconta';
				break;
			case 9:
				nom_dizaine = 'ennéaconta';
				break;
		}
		switch (unites) {
			case 1:
				nom_unite = 'hena';
				break;
			case 2:
				nom_unite = 'di';
				break;
			case 3:
				nom_unite = 'tri';
				break;
			case 4:
				nom_unite = 'tétra';
				break;
			case 5:
				nom_unite = 'penta';
				break;
			case 6:
				nom_unite = 'hexa';
				break;
			case 7:
				nom_unite = 'hepta';
				break;
			case 8:
				nom_unite = 'octa';
				break;
			case 9:
				nom_unite = 'ennéa';
				break;
		}
		return nom_dizaine + 'kai' + nom_unite + 'èdre';
	}
</script>

<DansLaMarge>
	<LigneVide lignes={12} />
	<Nombre min={5} max={99} bind:valeur={nombre_de_côtés} />
</DansLaMarge>

<Contenu>
	<Partie numero={2} titre="Solides de l'espace" />
	<SousPartie numero={1} titre="Polyèdres" />
	<Definition>Un polyèdre est un solide dont toutes les faces sont des polygones.</Definition>
	<Nomenclature lignes={5}>
		<Item>Un tétraèdre a 4 faces.</Item>
		<Item>Un hexaèdre a 6 faces.</Item>
		<Item>Un octaèdre a 8 faces.</Item>
		<Item>Un décaèdre a 10 faces.</Item>
		<Item>Un {nom_du_polygone_selon_Kepler(nombre_de_côtés)} a {nombre_de_côtés} faces.</Item>
	</Nomenclature>
</Contenu>
