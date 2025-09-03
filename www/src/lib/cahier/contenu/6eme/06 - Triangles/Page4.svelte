<script lang="ts">
	import { Contenu, DansLaMarge, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Exemple, Item, Protocole, Schema } from '$lib/cahier/composants/de_cours/*';
	import { Slider } from '$lib/cahier/composants/de_marge/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';
	import { Angle, DemiDroite, Point, Segment } from '$lib/cahier/composants/svg/*';

	import { math } from 'mathlifier';

	let GH = '4';
	let etape = $state(4);
</script>

<DansLaMarge>
	<LigneVide lignes={15} />
	<Slider bind:valeur={etape} min={0} max={4} />
</DansLaMarge>

<Contenu>
	<Partie numero={4} titre="Construire un triangle avec 1 longueur et 2 angles" />
	<Protocole lignes={5}>
		<Item>Avec la règle, tracer la longueur donnée.</Item>
		<Item lignes={2}>Avec le rapporteur et la règle, tracer une demi-droite pour former le premier angle donné.</Item>
		<Item lignes={2}>Avec le rapporteur et la règle, tracer une demi-droite pour former le deuxième angle donné.</Item>
	</Protocole>
	<Exemple>
		Tracer {@html math('\\text{GHI}')} tel que
		{@html math(`\\text{GH} = ${GH}\\,\\text{cm}`)},
		{@html math('\\widehat{\\text{GHI}} = 60^{\\circ}')},
		{@html math('\\widehat{\\text{HGI}} = 30^{\\circ}')}.
	</Exemple>
	<Schema lignes={7} aspectRatioSVG={20 / 7}>
		{#snippet svg()}
			{@const carreau = 1000 / 7}
			{@const G = { x: 6 * carreau, y: 6 * carreau }}
			{@const H = { x: 11 * carreau, y: 6 * carreau }}
			{@const I = {
				x: 6 * carreau + 5 * carreau * Math.cos(Math.PI / 6) * Math.cos(Math.PI / 6),
				y: 6 * carreau - 5 * carreau * Math.cos(Math.PI / 3) * Math.sin(Math.PI / 3)
			}}
			{@const type = { forme: 'croix', taille: 30 }}
			{#if etape >= 1}
				<Segment points={[G, H]} />
				<Point nom="G" point={G} {type} dy={120} />
				<Point nom="H" point={H} {type} dy={120} />
			{/if}
			{#if etape >= 2}
				<Angle r={100} points={[I, G, H]} fill="red" />
				<DemiDroite origine={G} passantPar={I} stroke="red" stroke-dasharray="5,5" />
			{/if}
			{#if etape >= 3}
				<Angle r={100} points={[G, H, I]} fill="forestgreen" />
				<DemiDroite origine={H} passantPar={I} stroke="forestgreen" stroke-dasharray="5,5" />
			{/if}
			{#if etape >= 4}
				<Point nom="I" point={I} {type} dy={120} />
			{/if}
		{/snippet}
	</Schema>
	<Protocole lignes={3}>
		<Item>
			Tracer le segment {@html math('\\text{GH}')} de longueur {GH} cm.
		</Item>
		<Item>
			Tracer un angle de 60° en partant de {@html math('\\text{H}')}.
		</Item>
		<Item>
			Tracer un angle de 30° en partant de {@html math('\\text{G}')}.
		</Item>
	</Protocole>
</Contenu>
