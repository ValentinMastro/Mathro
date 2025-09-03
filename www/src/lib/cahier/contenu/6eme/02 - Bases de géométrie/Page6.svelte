<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Notation, Schema, Texte } from '$lib/cahier/composants/de_cours/*';
	import { Slider } from '$lib/cahier/composants/de_marge/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';

	import { math } from 'mathlifier';
</script>

<Contenu>
	<Partie numero={4} titre="Distances" />
	<Definition lignes={2}>
		La <i>distance entre deux points</i> est la longueur du plus court chemin entre eux.
	</Definition>
	<Notation>
		La distance entre {@html math('\\text{A}')} et {@html math('\\text{B}')} se note {@html math('\\text{AB}')}, sans parenthèses ni crochets.
	</Notation>
	<Schema lignes={6} aspectRatioSVG={2.75}>
		{#snippet svg()}
			<defs>
				<style>
					.point23 {
						font-size: 90px;
						text-anchor: middle;
						vertical-align: center;
					}
				</style>
			</defs>
			<circle cx={500} cy={333.33} r={15} fill="black" />
			<circle cx={2500} cy={666.66} r={15} fill="black" />
			<text class="point23" x={500} y={333.33 - 30}>A</text>
			<text class="point23" x={2500} y={666.66 - 30}>B</text>
			<line x1={500} y1={333.33} x2={2500} y2={666.66} stroke="black" stroke-width={5} />
		{/snippet}
		{#snippet html()}
			<LigneVide />
			<Texte>
				{@html math('\\text{AB} ~\\approx~ 9{,}7~\\text{cm}')}
			</Texte>
		{/snippet}
	</Schema>
</Contenu>
