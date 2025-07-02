<script lang="ts">
	import { Chapitre, Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Convention, Definitions, Exemples, Item, Ligne } from '$lib/cahier/composants/de_cours/*';
	import { math } from 'mathlifier';
	import { get_tailles } from '$lib/cahier/store.svelte';
</script>

<Chapitre titre="Volumes et contenances" />

<Contenu apres_un_titre>
	<Partie numero={1} titre="Unités de volume et de contenance" />
	<Definitions lignes={3}>
		<Item>Le volume d'un solide est la portion de l'espace qu'il délimite.</Item>
		<Item lignes={2}
			>La contenance est le volume d'un contenant.
			<Ligne couleur="bleu">(coffre d'une voiture, sac, etc.)</Ligne>
		</Item>
	</Definitions>
	<Convention lignes={2}>
		<Item>Le volume se mesure en mètres cubes. ({@html math('\\text{m}^3')})</Item>
		<Item>La contenance se mesure en litres. ({@html math('\\ell')})</Item>
	</Convention>

	<table style="--h: {get_tailles().hauteur_ligne_cahier}px; font-size: {get_tailles().texte}px;">
		<thead>
			<tr>
				{#each ['\\text{km}^3', '\\text{hm}^3', '\\text{dam}^3', '\\text{m}^3', '\\text{dm}^3', '\\text{cm}^3', '\\text{mm}^3'] as unit}
					<th class="unite3" colspan="3">{@html math(unit)}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			<tr>
				{#each ['', '', '', '', '', '', '', '', '', '', '', '\\text{k}\\ell', '\\text{h}\\ell', '\\text{da}\\ell', '\\text{}\\ell', '\\text{d}\\ell', '\\text{c}\\ell', '\\text{m}\\ell', '', '', ''] as unit}
					<td class="unite1">{@html math(unit)}</td>
				{/each}
			</tr>
			{#each Array(4) as _}
				<tr>
					{#each Array(21) as __}
						<td class="unite1"></td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>

	<Exemples lignes={4}>
		<Item>{@html math('0,5~\\text{km}^3 = 500~000~\\text{dam}^3')}</Item>
		<Item>{@html math('5,2~\\text{da}\\ell = 52~000~\\text{m}\\ell')}</Item>
		<Item>{@html math('33,7~\\text{dm}^3 = 0,000~000~033~7~\\text{hm}^3')}</Item>
		<Item>{@html math('0,02~\\text{k}\\ell = 20~000~\\text{cm}^3')}</Item>
	</Exemples>
</Contenu>

<style>
	table {
		width: calc(100% * 100 / 98.8);
		border-collapse: collapse;
	}
	tr {
		height: var(--h);
	}
	.unite3 {
		border: 1px solid black;
		width: calc(100% / 7);
	}
	.unite1 {
		border: 1px solid black;
		width: calc(100% / 21);
		text-align: center;
	}
</style>
