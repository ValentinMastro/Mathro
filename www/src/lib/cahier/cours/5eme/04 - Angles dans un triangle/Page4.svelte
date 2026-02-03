<script lang="ts">
	import { Contenu } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Propriete, Schema } from '$lib/cahier/composants/de_cours/*';
	import { Angle, Codage, Polygone } from '$lib/cahier/composants/svg/*';

	let carreau = 1000 / 11;
	let côté = 7 * carreau;
	let A = { x: 1 * carreau, y: (9 * 1000) / 11 };
	let B = { x: 1 * carreau + côté, y: (9 * 1000) / 11 };
	let C = { x: 1 * carreau + côté / 2, y: (9 * 1000) / 11 - (côté * Math.sqrt(3)) / 2 };

	let ABC = $state(0);
	let BCA = $state(0);
	let CAB = $state(0);
</script>

<Contenu>
	<Definition>Un triangle est équilatéral si ses trois côtés sont de la même longueur.</Definition>
	<Propriete>Un triangle équilatéral possède trois angles de même mesure : 60°.</Propriete>
	<Schema lignes={11} centré>
		{#snippet svg()}
			<Polygone points={[A, B, C]} afficher_points />
			<Angle r={70} points={[A, B, C]} fill="red" afficher_mesure bind:mesure={ABC} />
			<Angle r={70} points={[B, C, A]} fill="red" afficher_mesure bind:mesure={BCA} />
			<Angle r={70} points={[B, A, C]} fill="red" afficher_mesure bind:mesure={CAB} />
			<Codage points={[A, B]} type="3 traits" stroke="green" />
			<Codage points={[B, C]} type="3 traits" stroke="green" />
			<Codage points={[C, A]} type="3 traits" stroke="green" />
		{/snippet}
	</Schema>
</Contenu>
