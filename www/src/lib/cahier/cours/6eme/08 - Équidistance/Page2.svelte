<script lang="ts">
	import { Contenu, DansLaMarge } from '$lib/cahier/composants/de_chapitrage/*';
	import { Schema, Definition, Propriete, Texte, Formules, Item } from '$lib/cahier/composants/de_cours/*';
	import { Slider } from '$lib/cahier/composants/de_marge/*';
	import { Point, Segment, TexteSVG } from '$lib/cahier/composants/svg/*';

	import { math } from 'mathlifier';

	let slider = $state(30);
	let angle: number = $derived((slider * Math.PI) / 180);
</script>

<DansLaMarge>
	<Slider bind:valeur={slider} min={0} max={180} pas={1} />
</DansLaMarge>

<Contenu>
	<Definition lignes={2}>Le diamètre d'un cercle est un segment reliant deux points du cercle et passant par le centre.</Definition>
	<Propriete>Le diamètre d'un cercle mesure le double de son rayon.</Propriete>
	<Schema lignes={8} aspectRatioSVG={20 / 8}>
		{#snippet svg()}
			{@const rayon = 500}
			{@const O = { x: 1250, y: 500 }}
			{@const A = { x: O.x - rayon * Math.cos(angle), y: O.y - rayon * Math.sin(angle) }}
			{@const B = { x: O.x + rayon * Math.cos(angle), y: O.y + rayon * Math.sin(angle) }}
			<Point nom="O" point={O} type={{ forme: 'disque', taille: 10 }} dy={100} />
			<circle cx={O.x} cy={O.y} r={rayon} fill="none" stroke="black" stroke-width={5} />
			<Segment points={[A, B]} stroke="red" />
			<TexteSVG point={O} dy={-40} fill="red" transform={`rotate(${slider} ${O.x} ${O.y})`}>diamètre</TexteSVG>
		{/snippet}
	</Schema>
	<Formules lignes={2}>
		<Item>
			{@html math('\\text{diamètre}~= 2 \\times \\text{rayon}')}
		</Item>
		<Item>
			{@html math('\\text{rayon}~= \\text{diamètre} \\div 2')}
		</Item>
	</Formules>
</Contenu>
