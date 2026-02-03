<script lang="ts">
	import { writable } from 'svelte/store';
	import { Chapitre, Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Exemples, Item, Propriete, Schema, Texte } from '$lib/cahier/composants/de_cours/*';
	import { Angle, Polygone } from '$lib/cahier/composants/svg/*';

	import { math } from 'mathlifier';

	let A = $state({ x: 200, y: 200 });
	let B = $state({ x: 800, y: 300 });
	let C = $state({ x: 500, y: 800 });

	let ABC = $state(0);
	let BCA = $state(0);
	let CAB = $state(0);

	$inspect(ABC);
</script>

<Chapitre titre="Angles d'un triangle" />

<Contenu apres_un_titre>
	<Partie numero={1} titre="La somme des angles d'un triangle" />
	<Propriete lignes={2}>Dans un triangle, la somme des mesures des trois angles est égale à 180°.</Propriete>
	<Exemples lignes={4}>
		<Item lignes={2}>
			Si, dans le triangle ABC, {@html math('\\widehat{\\text{ABC}} = 60^\\circ')} et {@html math('\\widehat{\\text{ACB}} = 40^\\circ')}, <br />
			alors {@html math('\\widehat{\\text{BAC}} = 180 - 60 - 40 = 80^\\circ')}.
		</Item>
		<Item lignes={2}>
			Si, dans le triangle DEF, {@html math('\\widehat{\\text{DEF}} = 90^\\circ')} et {@html math('\\widehat{\\text{DFE}} = 30^\\circ')}, <br />
			alors {@html math('\\widehat{\\text{EDF}} = 180 - 90 - 30 = 60^\\circ')}.
		</Item>
	</Exemples>
	<Schema lignes={10} html_lignes_vides={3}>
		{#snippet svg()}
			<Angle r={70} points={[A, B, C]} fill="red" afficher_mesure bind:mesure={ABC} />
			<Angle r={70} points={[B, C, A]} fill="blue" afficher_mesure bind:mesure={BCA} />
			<Angle r={70} points={[C, A, B]} fill="green" afficher_mesure bind:mesure={CAB} />
			<Polygone points={[A, B, C]} afficher_points />
		{/snippet}
		{#snippet html()}
			<Texte lignes={3}>
				Après avoir mesuré les angles au <br />
				rapporteur, je remarque que <br />
				{@html math(`${ABC.toFixed()}^\\circ + ${BCA.toFixed()}^\\circ + ${CAB.toFixed()}^\\circ = ${ABC + BCA + CAB}^\\circ`)}.
			</Texte>
		{/snippet}
	</Schema>
</Contenu>
