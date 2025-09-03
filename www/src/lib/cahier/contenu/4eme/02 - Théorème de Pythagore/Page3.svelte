<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Propriete, Schema } from '$lib/cahier/composants/de_cours/*';
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
			<line x1="200" y1="0" x2="200" y2="800" stroke="black" stroke-width="10" />
			<line x1="200" y1="800" x2="800" y2="800" stroke="black" stroke-width="10" />
			<line x1="200" y1="0" x2="800" y2="800" stroke="red" stroke-width="10" />
			<text x="580" y="470" font-size="90" text-anchor="middle" fill="red" transform-origin="580 470" transform="rotate(53.13)">Hypoténuse</text>
			<rect x="200" y="750" width="50" height="50" fill="black" />

			<!-- Deuxième triangle -->
			<line x1="1200" y1="0" x2="1200" y2="600" stroke="black" stroke-width="10" />
			<line x1="1200" y1="0" x2="2000" y2="0" stroke="black" stroke-width="10" />
			<line x1="1200" y1="600" x2="2000" y2="0" stroke="red" stroke-width="10" />
			<text x="1650" y="370" font-size="90" text-anchor="middle" fill="red" transform-origin="1650 370" transform="rotate(-36.87)">Hypoténuse</text>
			<rect x="1200" y="0" width="50" height="50" fill="black" />

			<!-- Troisième triangle -->
			<line x1="2200" y1="200" x2="2800" y2="800" stroke="black" stroke-width="10" />
			<line x1="2800" y1="800" x2="3600" y2="0" stroke="black" stroke-width="10" />
			<line x1="2200" y1="200" x2="3600" y2="0" stroke="red" stroke-width="10" />
			<text x="2880" y="90" font-size="90" text-anchor="middle" fill="red" transform-origin="2880 90" transform="rotate(-8.13)">Hypoténuse</text>
			<rect x="2800" y="800" width="50" height="50" fill="black" transform-origin="2800 800" transform="rotate(-135)" />
		{/snippet}
	</Schema>
</Contenu>
