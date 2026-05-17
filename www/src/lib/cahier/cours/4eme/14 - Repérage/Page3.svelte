<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Item, Schéma } from '$lib/cahier/composants/de_cours/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';
</script>

<Contenu>
	<Partie numero={3} titre="Dans l'espace, sur un pavé droit (3 dimensions)" />
	<Definition lignes={6}>
		Dans l'espace, un repère orthogonal <math><mo>(</mo><mi>O</mi><mo>,</mo><mi>I</mi><mo>,</mo><mi>J</mi><mo>,</mo><mi>K</mi><mo>)</mo></math> est constitué de plusieurs éléments :
		<Item>un point O appelé origine</Item>
		<Item>l'axe des abscisses, <math><mo>(</mo><mi>OI</mi><mo>)</mo></math>, avec <math><mi>I</mi><mo>(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>)</mo></math></Item>
		<Item>l'axe des ordonnées, <math><mo>(</mo><mi>OJ</mi><mo>)</mo></math>, avec <math><mi>J</mi><mo>(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>)</mo></math></Item>
		<Item>l'axe des cotes, ou des altitudes, <math><mo>(</mo><mi>OK</mi><mo>)</mo></math> avec <math><mi>K</mi><mo>(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>)</mo></math></Item>
	</Definition>
	<Schéma lignes={10} aspectRatioSVG={1.6}>
		{#snippet svg()}
			<!-- Axes -->
			<path d="M 500 600 l 1000 0" stroke="black" stroke-width={5} />
			<path d="M 500 600 l 0 -550" stroke="black" stroke-width={5} />
			<path d="M 500 600 l -400 400" stroke="black" stroke-width={5} />
			<!-- Flèches -->
			<path d="M 1500 600 l -50 -25 z l -50 25" stroke="black" stroke-width={5} />
			<path d="M 500 50 l -25 50 z l 25 50" stroke="black" stroke-width={5} />
			<path d="M 102 998 l 0 -40 z l 40 0" stroke="black" stroke-width={5} />
			<text x="1450" y="550" font-size="50" text-anchor="middle" fill="black" font-style="italic">x</text>
			<text x="450" y="50" font-size="50" text-anchor="middle" fill="black" font-style="italic">y</text>
			<text x="100" y="920" font-size="50" text-anchor="middle" fill="black" font-style="italic">z</text>
			<!-- Points de référence -->
			<circle cx="500" cy="600" r="13" fill="black" />
			<circle cx="600" cy="600" r="13" fill="red" />
			<circle cx="500" cy="500" r="13" fill="red" />
			<circle cx="450" cy="650" r="13" fill="red" />
			<text x={500 - 40} y={600 + 0} font-size="50" text-anchor="middle" fill="black">O</text>
			<text x={600 - 20} y={600 + 60} font-size="50" text-anchor="middle" fill="red">I</text>
			<text x={500 + 40} y={500 + 0} font-size="50" text-anchor="middle" fill="red">J</text>
			<text x={450 - 40} y={650 + 0} font-size="50" text-anchor="middle" fill="red">K</text>
			<!-- Pavé droit -->
			<path d="M 700 600 l 600 0 l 0 -400 l -600 0 z" fill="none" stroke="black" stroke-width="5" stroke-dasharray="10 10" />
			<path d="M {700 - 350} {600 + 350} l 600 0 l 0 -400 l -600 0 z" fill="none" stroke="black" stroke-width="5" stroke-dasharray="10 10" />
			<path d="M 700 600 l -350 350" stroke="black" stroke-width={5} stroke-dasharray="10 10" />
			<path d="M 1300 600 l -350 350" stroke="black" stroke-width={5} stroke-dasharray="10 10" />
			<path d="M 1300 200 l -350 350" stroke="black" stroke-width={5} stroke-dasharray="10 10" />
			<path d="M 700 200 l -350 350" stroke="black" stroke-width={5} stroke-dasharray="10 10" />
			<!-- Sommets du pavé droit -->
			<circle cx={700} cy={600} r={13} fill="rgb(80, 80, 255)" />
			<circle cx={1300} cy={600} r={13} fill="rgb(80, 80, 255)" />
			<circle cx={700} cy={200} r={13} fill="rgb(80, 80, 255)" />
			<circle cx={1300} cy={200} r={13} fill="rgb(80, 80, 255)" />
			<circle cx={700 - 350} cy={600 + 350} r={13} fill="rgb(80, 80, 255)" />
			<circle cx={1300 - 350} cy={600 + 350} r={13} fill="rgb(80, 80, 255)" />
			<circle cx={700 - 350} cy={200 + 350} r={13} fill="rgb(80, 80, 255)" />
			<circle cx={1300 - 350} cy={200 + 350} r={13} fill="rgb(80, 80, 255)" />
			<text x={700 + 40} y={600 + 50} font-size={50} text-anchor="middle" fill="rgb(80, 80, 255)">A</text>
			<text x={1300 + 40} y={600 + 50} font-size={50} text-anchor="middle" fill="rgb(80, 80, 255)">B</text>
			<text x={700 + 40} y={200 + 50} font-size={50} text-anchor="middle" fill="rgb(80, 80, 255)">D</text>
			<text x={1300 + 40} y={200 + 50} font-size={50} text-anchor="middle" fill="rgb(80, 80, 255)">C</text>
			<text x={700 - 350 + 40} y={600 + 350 + 50} font-size={50} text-anchor="middle" fill="rgb(80, 80, 255)">E</text>
			<text x={1300 - 350 + 40} y={600 + 350 + 50} font-size={50} text-anchor="middle" fill="rgb(80, 80, 255)">F</text>
			<text x={700 - 350 - 40} y={200 + 350 - 25} font-size={50} text-anchor="middle" fill="rgb(80, 80, 255)">H</text>
			<text x={1300 - 350 - 40} y={200 + 350 - 25} font-size={50} text-anchor="middle" fill="rgb(80, 80, 255)">G</text>
			<!-- Graduations axes des côtes -->
			{#each Array(7) as _, i}
				<path d="M {500 - 15 - (i + 1) * 50} {600 - 15 + (i + 1) * 50} l 30 30" stroke="black" stroke-width={7} />
			{/each}
			<!-- z-index: 1 -->
			<circle cx="450" cy="650" r="13" fill="red" />
		{/snippet}
		{#snippet html()}
			<LigneVide lignes={1.35} />
			<Item><math><mi>A</mi><mo>(</mo><mn>2</mn><mo>;</mo><mn>0</mn><mo>;</mo><mn>0</mn><mo>)</mo></math></Item>
			<Item><math><mi>B</mi><mo>(</mo><mn>8</mn><mo>;</mo><mn>0</mn><mo>;</mo><mn>0</mn><mo>)</mo></math></Item>
			<Item><math><mi>C</mi><mo>(</mo><mn>8</mn><mo>;</mo><mn>4</mn><mo>;</mo><mn>0</mn><mo>)</mo></math></Item>
			<Item><math><mi>D</mi><mo>(</mo><mn>2</mn><mo>;</mo><mn>4</mn><mo>;</mo><mn>0</mn><mo>)</mo></math></Item>
			<Item><math><mi>E</mi><mo>(</mo><mn>2</mn><mo>;</mo><mn>0</mn><mo>;</mo><mn>7</mn><mo>)</mo></math></Item>
			<Item><math><mi>F</mi><mo>(</mo><mn>8</mn><mo>;</mo><mn>0</mn><mo>;</mo><mn>7</mn><mo>)</mo></math></Item>
			<Item><math><mi>G</mi><mo>(</mo><mn>8</mn><mo>;</mo><mn>4</mn><mo>;</mo><mn>7</mn><mo>)</mo></math></Item>
			<Item><math><mi>H</mi><mo>(</mo><mn>2</mn><mo>;</mo><mn>4</mn><mo>;</mo><mn>7</mn><mo>)</mo></math></Item>
		{/snippet}
	</Schéma>
</Contenu>
