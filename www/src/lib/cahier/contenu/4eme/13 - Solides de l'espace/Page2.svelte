<script lang="ts">
	import { Contenu } from '$lib/cahier/composants/de_chapitrage/*';
	import { Partie, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Item, Paragraphe, Formule, Schema } from '$lib/cahier/composants/de_cours/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';

	import { get_tailles } from '$lib/cahier/store.svelte';
</script>

<Contenu>
	<table id="unites_volumes" style="--hauteur-ligne: {get_tailles().hauteur_ligne_cahier}px; --taille-texte: {get_tailles().texte}px;">
		<caption>Tableau de conversion des unités de volume et de contenance</caption>
		<tbody>
			<tr>
				{#each Array(11) as _}
					<th></th>
				{/each}
				<th>k&#x2113;</th>
				<th>h&#x2113;</th>
				<th>da&#x2113;</th>
				<th>&#x2113;</th>
				<th>d&#x2113;</th>
				<th>c&#x2113;</th>
				<th>m&#x2113;</th>
				<th></th>
				<th></th>
				<th></th>
			</tr>
			<tr>
				<th colspan="3">km<sup>3</sup></th>
				<th colspan="3">hm<sup>3</sup></th>
				<th colspan="3">dam<sup>3</sup></th>
				<th colspan="3">m<sup>3</sup></th>
				<th colspan="3">dm<sup>3</sup></th>
				<th colspan="3">cm<sup>3</sup></th>
				<th colspan="3">mm<sup>3</sup></th>
			</tr>
			<tr>
				{#each Array(21) as _}
					<td></td>
				{/each}
			</tr>
		</tbody>
	</table>

	<LigneVide />
	<Partie numero={2} titre="Solides de l'espace" />
	<SousPartie numero={1} titre="Polyèdres" />
	<LigneVide />
	<Definition>Un polyèdre est un solide dont toutes les faces sont des polygones.</Definition>
	<Paragraphe couleur="noir" nom_du_paragraphe="Nomenclature" lignes={5}>
		<Item>Un tétraèdre a 4 faces</Item>
		<Item>Un hexaèdre a 6 faces</Item>
		<Item>Un octaèdre a 8 faces</Item>
		<Item>Un décaèdre a 10 faces</Item>
		<Item>Un dodécaèdre a 12 faces</Item>
	</Paragraphe>
</Contenu>

<style>
	#unites_volumes {
		border-collapse: collapse;
		width: calc(100 / 99 * 100%);
		font-size: var(--taille-texte);

		th,
		td {
			border: 1px solid black;
			padding: 2px;
			width: calc(100% / 21);
		}

		tr:first-child {
			height: calc(var(--hauteur-ligne) * 1.5);
		}

		tr:nth-child(2) {
			height: calc(var(--hauteur-ligne) * 1.5);
		}

		tr:last-child {
			height: calc(var(--hauteur-ligne) * 3);
		}

		caption {
			margin-top: 2em;
			margin-bottom: 0.5em;
		}
	}
</style>
