<script lang="ts">
	import { writable } from 'svelte/store';
	import { Contenu } from '$lib/cahier/composants/de_chapitrage/*';
	import { Propriete, Schema } from '$lib/cahier/composants/de_cours/*';
	import { Angle, Codage, Polygone } from '$lib/cahier/composants/svg/*';

	let côté = (7 * 1000) / 11;
	let A = { x: 0, y: (9 * 1000) / 11 };
	let B = { x: côté, y: (9 * 1000) / 11 };
	let C = { x: côté / 2, y: (9 * 1000) / 11 - (côté * Math.sqrt(3)) / 2 };

	let ABC = writable(0);
	let BCA = writable(0);
	let CAB = writable(0);
</script>

<Contenu>
	<Propriete>Un triangle équilatéral possède trois angles de même mesure : 60°.</Propriete>
	<Schema lignes={11} centré>
		{#snippet svg()}
			<Polygone points={[A, B, C]} />
			<Angle r={70} points={[A, B, C]} fill="red" afficher_mesure mesure={ABC} />
			<Angle r={70} points={[B, C, A]} fill="red" afficher_mesure mesure={BCA} />
			<Angle r={70} points={[C, A, B]} fill="red" afficher_mesure mesure={CAB} />
			<Codage points={[A, B]} type="3 traits" stroke="green" />
			<Codage points={[B, C]} type="3 traits" stroke="green" />
			<Codage points={[C, A]} type="3 traits" stroke="green" />
		{/snippet}
	</Schema>
</Contenu>
