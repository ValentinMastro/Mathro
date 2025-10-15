<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Propriete, Schema, Texte } from '$lib/cahier/composants/de_cours/*';
	import { Angle, AngleDroit, Polygone } from '$lib/cahier/composants/svg/*';
	import { math } from 'mathlifier';

	let [A, B, C] = [
		{ x: 125, y: 200 },
		{ x: 875, y: 200 },
		{ x: 125, y: 800 }
	];
</script>

<Contenu>
	<Partie numero={2} titre="Les différents types de triangles et leurs angles" />
	<Definition>Un triangle est rectangle s'il possède un angle droit.</Definition>
	<Propriete>Les deux angles aigus d'un triangle rectangle sont complémentaires.</Propriete>
	<Schema lignes={8} aspectRatioSVG={1.125}>
		{#snippet svg()}
			<Angle points={[A, B, C]} r={130} fill="red" />
			<Angle points={[B, C, A]} r={130} fill="blue" />
			<Polygone points={[A, B, C]} stroke-width={10} noms={['P', 'U', 'K']} afficher_points />
			<AngleDroit points={[C, A, B]} taille={60} fill="none" stroke="black" />
		{/snippet}
		{#snippet html()}
			<Texte>Le triangle PUK est rectangle en P.</Texte>
			<Texte>
				Les angles {@html math('\\color{blue}\\widehat{\\text{PKU}}')} et {@html math('\\color{red}\\widehat{\\text{PUK}}')} sont complémentaires.
			</Texte>
		{/snippet}
	</Schema>
</Contenu>
