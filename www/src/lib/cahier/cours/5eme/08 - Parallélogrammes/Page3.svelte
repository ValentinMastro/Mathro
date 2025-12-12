<script lang="ts">
	import { Contenu } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Propriete, Schema } from '$lib/cahier/composants/de_cours/*';
	import { Polygone, type Coordonnées2D } from '$lib/cahier/composants/svg/*';

	let losange: Coordonnées2D[] = [
		{ x: 500, y: 100 },
		{ x: 650, y: 500 },
		{ x: 500, y: 900 },
		{ x: 350, y: 500 }
	];

	let carré: Coordonnées2D[] = [
		{ x: 200, y: 200 },
		{ x: 800, y: 200 },
		{ x: 800, y: 800 },
		{ x: 200, y: 800 }
	];
</script>

<Contenu>
	<Definition>Un losange est un parallélogramme qui a ses côtés de même longueur.</Definition>
	<Propriete>Les diagonales d'un losange sont perpendiculaires.</Propriete>
	<Schema lignes={5}>
		{#snippet svg()}
			<Polygone points={losange} />
		{/snippet}
	</Schema>
	<Definition lignes={2}>
		Un carré est un rectangle et un losange.<br />
		Il hérite des propriétés du rectangle et du losange.
	</Definition>
	<Schema lignes={8}>
		{#snippet svg()}
			<Polygone points={carré} />
		{/snippet}
	</Schema>
</Contenu>
