<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Propriete, Schema } from '$lib/cahier/composants/de_cours/*';
	import { AngleDroit, Polygone, Polylignes, TexteSVG } from '$lib/cahier/composants/svg/*';

	// triangle 1
	let A = { x: 200, y: 0 };
	let B = { x: 200, y: 800 };
	let C = { x: 800, y: 800 };

	// triangle 2
	let D = { x: 1200, y: 0 };
	let E = { x: 1200, y: 600 };
	let F = { x: 2000, y: 0 };

	// triangle 3
	let I = { x: 2200, y: 200 };
	let J = { x: 2800, y: 800 };
	let K = { x: 3600, y: 0 };
</script>

<Contenu>
	<Partie numero={2} titre="Triangle rectangle et hypoténuse" />
	<Definition lignes={2}>
		Un triangle rectangle est une figure à 3 côtés qui a un angle droit.<br />
		L'hypoténuse d'un triangle rectangle est le côté opposé à l'angle droit.
	</Definition>
	<Propriete>L'hypoténuse est le côté le plus long d'un triangle rectangle.</Propriete>
	<Schema lignes={5} aspectRatioSVG={4}>
		{#snippet svg()}
			<!-- Premier triangle -->
			<AngleDroit points={[A, B, C]} taille={50} />
			<Polygone points={[A, B, C]} />
			<Polylignes points={[A, C]} stroke="red" stroke-width={10} />
			<TexteSVG point={{ x: 580, y: 470 }} font-size="90" fill="red" transform-origin="580 470" transform="rotate(53.13)">Hypoténuse</TexteSVG>

			<!-- Deuxième triangle -->
			<AngleDroit points={[E, D, F]} taille={50} />
			<Polygone points={[E, D, F]} />
			<Polylignes points={[E, F]} stroke="red" stroke-width={10} />
			<TexteSVG point={{ x: 1650, y: 370 }} font-size="90" fill="red" transform-origin="1650 370" transform="rotate(-36.87)">Hypoténuse</TexteSVG>

			<!-- Troisième triangle -->
			<AngleDroit points={[I, J, K]} taille={50} />
			<Polygone points={[I, J, K]} />
			<Polylignes points={[I, K]} stroke="red" stroke-width={10} />
			<TexteSVG point={{ x: 2880, y: 90 }} font-size="90" fill="red" transform-origin="2880 90" transform="rotate(-8.13)">Hypoténuse</TexteSVG>
		{/snippet}
	</Schema>
</Contenu>
