<script lang="ts">
	import { Chapitre, Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Schema, Theoreme, Item } from '$lib/cahier/composants/de_cours/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';
	import { math } from 'mathlifier';
</script>

<Chapitre titre="Théorème de Thalès" />

<Contenu apres_un_titre>
	<Partie numero={1} titre="Énoncé" />
	<LigneVide />
	<Theoreme nom_du_theoreme="Théorème de Thalès" lignes={5}>
		Si :
		<Item>les point A, B et D sont alignés</Item>
		<Item>les points A, C et E sont alignés</Item>
		<Item>{@html math('(\\text{BC}) // (\\text{DE})')}</Item>
		alors : {@html math(`\\frac{\\text{AD}}{\\text{AB}} = \\frac{\\text{AE}}{\\text{AC}} = \\frac{\\text{DE}}{\\text{BC}}`)}
	</Theoreme>
	<Schema lignes={10} aspectRatioSVG={2}>
		{#snippet svg()}
			<defs>
				<style>
					.ch06p1 {
						font-size: 60px;
						fill: black;
					}
				</style>
			</defs>
			<path d="M 100 500 L 900 100 L 900 900 Z" stroke="black" fill="none" stroke-width={4} />
			<line x1="600" x2="600" y1="252" y2="748" stroke="black" stroke-width={4} />
			<text class="ch06p1" x="80" y="500" text-anchor="end">A</text>
			<text class="ch06p1" x="920" y="100" text-anchor="start">D</text>
			<text class="ch06p1" x="920" y="900" text-anchor="start">E</text>
			<text class="ch06p1" x="600" y="220" text-anchor="middle">B</text>
			<text class="ch06p1" x="600" y="820" text-anchor="middle">C</text>

			<text class="ch06p1" x="500" y="980" text-anchor="middle">Configuration n°1</text>

			<line x1="1100" x2="1900" y1="300" y2="900" stroke="black" stroke-width={4} />
			<line x1="1100" x2="1900" y1="700" y2="100" stroke="black" stroke-width={4} />
			<line x1="1100" x2="1100" y1="300" y2="700" stroke="black" stroke-width={4} />
			<line x1="1900" x2="1900" y1="100" y2="900" stroke="black" stroke-width={4} />

			<text class="ch06p1" x="1080" y="300" text-anchor="end">C</text>
			<text class="ch06p1" x="1920" y="100" text-anchor="start">D</text>
			<text class="ch06p1" x="1920" y="900" text-anchor="start">E</text>
			<text class="ch06p1" x="1080" y="700" text-anchor="end">B</text>
			<text class="ch06p1" x="1370" y="460" text-anchor="middle">A</text>

			<text class="ch06p1" x="1500" y="890" text-anchor="middle">Configuration n°2</text>
			<text class="ch06p1" x="1500" y="980" text-anchor="middle">dite "du papillion"</text>
		{/snippet}
	</Schema>
</Contenu>
