<script lang="ts">
	import { Chapitre, Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Exemples, Item, Definition, TheoremeDefinition, Schema } from '$lib/cahier/composants/de_cours/*';
	import { Segment } from '$lib/cahier/composants/svg/*';

	import { math } from 'mathlifier';
</script>

<Chapitre titre="Division euclidienne" />

<Contenu apres_un_titre>
	<Partie numero={1} titre="Concept" />
	<TheoremeDefinition lignes={4}>
		À deux entiers positifs (le dividende et le diviseur), on associe <u>de façon unique</u> deux nombres entiers (le quotient et le reste) tels que :
		<Item>
			{@html math('\\text{dividende} ~= \\text{diviseur} ~\\times \\text{quotient} ~+ \\text{reste}')}
		</Item>
		<Item>
			{@html math('~0 \\leqslant \\text{reste} ~< \\text{diviseur}')}
		</Item>
	</TheoremeDefinition>
	<Exemples lignes={2}>
		<Item>{@html math('19 = 3 \\times 6 + 1')}</Item>
		<Item>{@html math('255 = 16 \\times 15 + 15')}</Item>
	</Exemples>
	<Schema lignes={10} aspectRatioSVG={2}>
		{#snippet svg()}
			<!-- Vocabulaire -->
			{@const I = { x: 300, y: 100 }}
			{@const J = { x: 300, y: 900 }}
			{@const K = { x: 300, y: 200 }}
			{@const L = { x: 550, y: 200 }}
			<text x={30} y={170} class="vocabulaire">Dividende</text>
			<text x={320} y={170} class="vocabulaire">Diviseur</text>
			<text x={320} y={270} class="vocabulaire">Quotient</text>
			<text x={150} y={270} class="vocabulaire">Reste</text>
			<rect x={140} y={230} width={150} height={70} stroke="black" stroke-width={6} fill="none" />
			<Segment points={[I, J]} />
			<Segment points={[K, L]} />
			<!-- Première division -->
			{@const I1 = { x: 1000, y: 100 }}
			{@const J1 = { x: 1000, y: 900 }}
			{@const K1 = { x: 1000, y: 200 }}
			{@const L1 = { x: 1150, y: 200 }}
			<Segment points={[I1, J1]} />
			<Segment points={[K1, L1]} />
			<!-- Dividende -->
			<text class="chiffre" x={800} y={100}>1</text>
			<text class="chiffre" x={900} y={100}>9</text>
			<!-- Ligne n°2 -->
			<text class="chiffre rouge" x={700} y={200}>-</text>
			<text class="chiffre rouge" x={800} y={200}>1</text>
			<text class="chiffre rouge" x={900} y={200}>8</text>
			<line x1={700} x2={1000} y1={300} y2={300} stroke="var(--rouge)" stroke-width={5} />
			<!-- Ligne n°3 -->
			<text class="chiffre rouge" x={900} y={300}>1</text>
			<rect x={910} y={310} width={80} height={80} stroke="black" stroke-width={6} fill="none" />
			<!-- Diviseur -->
			<text class="chiffre" x={1000} y={100}>3</text>
			<!-- Quotient -->
			<text class="chiffre rouge" x={1000} y={200}>6</text>
			<path d="M 820 140 l 0 -30 l 160 0 l 0 30" fill="none" stroke="var(--rouge)" stroke-width={3} />
			{@const I2 = { x: 1700, y: 100 }}
			{@const J2 = { x: 1700, y: 900 }}
			{@const K2 = { x: 1700, y: 200 }}
			{@const L2 = { x: 2000, y: 200 }}
			<Segment points={[I2, J2]} />
			<Segment points={[K2, L2]} />
			<!-- Dividende -->
			<text class="chiffre" x={1400} y={100}>2</text>
			<text class="chiffre" x={1500} y={100}>5</text>
			<text class="chiffre" x={1600} y={100}>5</text>
			<path d="M 1420 140 l 0 -30 l 160 0 l 0 30" fill="none" stroke="var(--rouge)" stroke-width={3} />
			<!-- Ligne n°1 -->
			<text class="chiffre rouge" x={1300} y={200}>-</text>
			<text class="chiffre rouge" x={1400} y={200}>1</text>
			<text class="chiffre rouge" x={1500} y={200}>6</text>
			<line x1={1300} x2={1600} y1={300} y2={300} stroke="var(--rouge)" stroke-width={5} />
			<text class="chiffre" x={1500} y={300}>9</text>
			<line x1={1650} x2={1650} y1={200} y2={300} stroke="black" stroke-width={5} stroke-dasharray="5,5" />
			<text class="chiffre" x={1600} y={300}>5</text>
			<!-- Ligne n°2 -->
			<path d="M 1520 340 l 0 -30 l 160 0 l 0 30" fill="none" stroke="var(--vert)" stroke-width={3} />
			<text class="chiffre vert" x={1400} y={400}>-</text>
			<text class="chiffre vert" x={1500} y={400}>9</text>
			<text class="chiffre vert" x={1600} y={400}>4</text>
			<line x1={1400} x2={1700} y1={500} y2={500} stroke="var(--vert)" stroke-width={5} />
			<text class="chiffre" x={1600} y={500}>1</text>
			<rect x={1610} y={510} width={80} height={80} stroke="black" stroke-width={6} fill="none" />
			<!-- Diviseur -->
			<text class="chiffre" x={1700} y={100}>1</text>
			<text class="chiffre" x={1800} y={100}>6</text>
			<!-- Quotient -->
			<text class="chiffre rouge" x={1700} y={200}>1</text>
			<text class="chiffre vert" x={1800} y={200}>5</text>
		{/snippet}
	</Schema>
</Contenu>

<style>
	.vocabulaire {
		font-size: 50px;
		text-anchor: left;
		dominant-baseline: middle;
	}
	.chiffre {
		font-size: 80px;
		text-anchor: middle;
		dominant-baseline: middle;
		transform: translate(50px, 60px);
	}
	.rouge {
		fill: var(--rouge);
	}
	.vert {
		fill: var(--vert);
	}
</style>
