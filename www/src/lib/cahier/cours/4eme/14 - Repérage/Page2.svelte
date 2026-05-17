<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Item, Schéma, Notation, Exemples } from '$lib/cahier/composants/de_cours/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';

</script>

<Contenu>
	<Partie numero={2} titre="Sur le plan (2 dimensions)" />
	<Definition lignes={5}>
		Un repère orthogonal est constitué de 3 éléments :
		<Item>un point, appelé l'origine du repère</Item>
		<Item>l'axe des abscisses</Item>
		<Item>l'axe des ordonnées</Item>
		Les axes des abscisses et des ordonnées sont perpendiculaires.
	</Definition>
	<Schéma lignes={8}>
		{#snippet svg()}
			<!-- Axes -->
			<line x1="125" y1="500" x2="875" y2="500" stroke="black" stroke-width="5" />
			<line x1="500" y1="875" x2="500" y2="125" stroke="black" stroke-width="5" />
			<text x="820" y="550" font-size="60" text-anchor="middle" font-style="italic">x</text>
			<text x="550" y="150" font-size="60" text-anchor="middle" font-style="italic">y</text>
			<!-- Flèches -->
			<path d="M 500 125 l -25 25 l 50 0 z" fill="black" />
			<path d="M 875 500 l -25 -25 l 0 50 z" fill="black" />
			<!-- Point O -->
			<text x="470" y="560" font-size="60" text-anchor="middle">O</text>
		{/snippet}
	</Schéma>

	<Notation lignes={2} lignes_vides={0}>
		<math><mo>(</mo><mi>O</mi><mo>;</mo><mi>x</mi><mo>;</mo><mi>y</mi><mo>)</mo></math> est le repère orthogonal constitué de l'origine <math><mi>O</mi></math>, de l'axe des abscisses <math><mi>x</mi></math> et de l'axe des ordonnées <math><mi>y</mi></math>.
	</Notation>
	<Definition lignes={3} lignes_vides={0}>
		À chaque point du plan, on associe deux nombres que l'on appellent ses coordonnées : son <i>abscisse</i> (horizontale) et son <i>ordonnée</i> (verticale).
	</Definition>
	<Schéma lignes={10}>
		{#snippet svg()}
			<!-- Axes -->
			<line x1="100" y1="500" x2="980" y2="500" stroke="black" stroke-width="5" />
			<line x1="500" y1="900" x2="500" y2="100" stroke="black" stroke-width="5" />
			<text x="960" y="580" font-size="60" text-anchor="middle" font-style="italic">x</text>
			<text x="550" y="150" font-size="60" text-anchor="middle" font-style="italic">y</text>
			<!-- Flèches -->
			<path d="M 500 100 l -25 25 l 50 0 z" fill="black" />
			<path d="M 980 500 l -25 -25 l 0 50 z" fill="black" />
			<!-- Point O -->
			<text x="470" y="560" font-size="60" text-anchor="middle">O</text>
			<!-- Graduations unités -->
			<line x1="600" y1="480" x2="600" y2="520" stroke="black" stroke-width="5" />
			<line x1="480" y1="400" x2="520" y2="400" stroke="black" stroke-width="5" />
			<text x="600" y="570" font-size="45" text-anchor="middle">1</text>
			<text x="450" y="420" font-size="45" text-anchor="middle">1</text>
			<!-- Points -->
			<path d="M {-2 * 100 + 500} {-1 * -100 + 500} l -20 -20 z l 20 20 z l -20 20 z l 20 -20 z" stroke="red" stroke-width="3" />
			<path d="M {3 * 100 + 500} {4 * -100 + 500} l -20 -20 z l 20 20 z l -20 20 z l 20 -20 z" stroke="red" stroke-width="3" />
			<path d="M {0 * 100 + 500} {2 * -100 + 500} l -20 -20 z l 20 20 z l -20 20 z l 20 -20 z" stroke="red" stroke-width="3" />
			<path d="M {4 * 100 + 500} {0 * -100 + 500} l -20 -20 z l 20 20 z l -20 20 z l 20 -20 z" stroke="red" stroke-width="3" />
		{/snippet}
		{#snippet html()}
			<Exemples lignes={4}>
				<Item><math><mi>T</mi><mo>(</mo><mo>-</mo><mn>2</mn><mo>;</mo><mo>-</mo><mn>1</mn><mo>)</mo></math></Item>
				<Item><math><mi>U</mi><mo>(</mo><mn>3</mn><mo>;</mo><mn>4</mn><mo>)</mo></math></Item>
				<Item><math><mi>V</mi><mo>(</mo><mn>0</mn><mo>;</mo><mn>2</mn><mo>)</mo></math></Item>
				<Item><math><mi>W</mi><mo>(</mo><mn>4</mn><mo>;</mo><mn>0</mn><mo>)</mo></math></Item>
			</Exemples>
		{/snippet}
	</Schéma>
</Contenu>
