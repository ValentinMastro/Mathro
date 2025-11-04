<script lang="ts">
	import { Contenu, DansLaMarge, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Exemple, Item, Protocole, Schema, Texte } from '$lib/cahier/composants/de_cours/*';
	import { Slider } from '$lib/cahier/composants/de_marge/*';
	import { ArcDeCercle, Point, Polygone, Segment } from '$lib/cahier/composants/svg/*';
	import { math } from 'mathlifier';

	let AB = '4';
	let AC = '2,4';
	let BC = '3,2';

	let etape = $state(4);
</script>

<DansLaMarge lignes_vides={16}>
	<Slider bind:valeur={etape} min={0} max={4} pas={1} />
</DansLaMarge>

<Contenu>
	<Partie numero={2} titre="Construire un triangle avec 3 longueurs" />
	<Protocole lignes={7}>
		<Item>Avec la règle, tracer le côté le plus long du triangle.</Item>
		<Item lignes={2}>Avec le compas, tracer un arc de cercle de rayon égal à la longueur du deuxième côté.</Item>
		<Item lignes={2}>Avec le compas, tracer un arc de cercle de rayon égal à la longueur du troisième côté.</Item>
		<Item lignes={2}>Relier le point d'intersection des deux arcs de cercle au premier segment.</Item>
	</Protocole>
	<Exemple>
		Tracer {@html math('\\text{ABC}')} tel que
		{@html math(`\\text{AB} = ${AB}\\,\\text{cm}`)},
		{@html math(`\\text{AC} = ${AC}\\,\\text{cm}`)} et
		{@html math(`\\text{BC} = ${BC}\\,\\text{cm}`)}.
	</Exemple>
	<Schema lignes={5} aspectRatioSVG={4}>
		{#snippet svg()}
			{@const A = { x: 1200, y: 800 }}
			{@const B = { x: 2200, y: 800 }}
			{@const C = { x: 1200 + 1000 - Math.cos(Math.acos(4 / 5)) * 800, y: 800 - Math.sin(Math.acos(4 / 5)) * 800 }}
			{#if etape >= 1}
				<Segment points={[A, B]} stroke="black" stroke-width={10} />
				<Point nom="A" point={A} type={{ forme: 'croix', taille: 30 }} font-size={120} dy={150} stroke-width={10} />
				<Point nom="B" point={B} type={{ forme: 'croix', taille: 30 }} font-size={120} dy={150} stroke-width={10} />
			{/if}
			{#if etape >= 2}
				<ArcDeCercle centre={A} r={600} angle1={-Math.PI / 3} angle2={(2 * Math.PI) / 3} stroke-width={10} stroke-dasharray="10,10" />
			{/if}
			{#if etape >= 3}
				<ArcDeCercle centre={B} r={800} angle1={Math.PI / 2} angle2={Math.PI} stroke-width={10} stroke-dasharray="10,10" />
			{/if}
			{#if etape >= 4}
				<Segment points={[A, C]} stroke="black" stroke-width={10} />
				<Segment points={[B, C]} stroke="black" stroke-width={10} />
				<Point nom="C" point={C} type={{ forme: 'croix', taille: 30 }} font-size={120} dy={-100} stroke-width={10} stroke="red" />
			{/if}
		{/snippet}
	</Schema>
	<Texte couleur="bleu" lignes={6}>
		<Item lignes={1}>
			Tracer {@html math('[\\text{AB}]')} de longueur {AB} cm.
		</Item>
		<Item lignes={2}>
			Puisque {@html math(`\\text{AC} = ${AC}\\,\\text{cm}`)}, tracer un arc de cercle de centre {@html math('\\text{A}')}
			et de rayon {@html math(`${AC}~\\text{cm}`)}.
		</Item>
		<Item lignes={2}>
			Puisque {@html math(`\\text{BC} = ${BC}\\,\\text{cm}`)}, tracer un arc de cercle de centre {@html math('\\text{B}')}
			et de rayon {@html math(`${BC}~\\text{cm}`)}.
		</Item>
		<Item>
			Relier le point d'intersection à {@html math('\\text{A}')} et à {@html math('\\text{B}')}.
		</Item>
	</Texte>
</Contenu>
