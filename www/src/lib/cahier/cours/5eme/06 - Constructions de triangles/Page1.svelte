<script lang="ts">
	import { Chapitre, Contenu, DansLaMarge, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Propriete, Item, Schema, Texte, Exemple } from '$lib/cahier/composants/de_cours/*';
	import { Slider } from '$lib/cahier/composants/de_marge/*';
	import { Polygone, Segment, TexteSVG, type ExtrémitésSegment } from '$lib/cahier/composants/svg/*';
	import { math } from 'mathlifier';

	let slider: number = $state(0);

	const points = [
		{ x: 166, y: 166 },
		{ x: 1500, y: 333 },
		{ x: 666, y: 833 }
	];
	const [A, B, C] = points;
	let segment_selectionné: ExtrémitésSegment = $derived([points[slider]!, points[(slider + 1) % points.length]!]);

	const triangle2 = [
		{ x: 200, y: 400 },
		{ x: 800, y: 0 },
		{ x: 600, y: 1000 }
	];
	const milieux_triangle2 = $derived([
		{ x: (triangle2[0]!.x + triangle2[1]!.x) / 2, y: (triangle2[0]!.y + triangle2[1]!.y) / 2 },
		{ x: (triangle2[1]!.x + triangle2[2]!.x) / 2, y: (triangle2[1]!.y + triangle2[2]!.y) / 2 },
		{ x: (triangle2[2]!.x + triangle2[0]!.x) / 2, y: (triangle2[2]!.y + triangle2[0]!.y) / 2 }
	]);
</script>

<Chapitre titre="Construction de triangles" />

<DansLaMarge lignes_vides={15}>
	<Slider min={0} max={2} bind:valeur={slider} />
</DansLaMarge>

<Contenu apres_un_titre>
	<Partie numero={1} titre="Inégalité triangulaire" />
	<Propriete lignes={6}>
		Dans un triangle, la longueur d'un côté est inférieure à la somme des longueurs des deux autres côtés. <br />
		Autrement dit, dans le triangle ABC : <br />
		<Item>{@html math('\\text{AB}~ \\leqslant \\text{AC}~ + \\text{BC}')}</Item>
		<Item>{@html math('\\text{BC}~ \\leqslant \\text{AB}~ + \\text{AC}')}</Item>
		<Item>{@html math('\\text{AC}~ \\leqslant \\text{AB}~ + \\text{BC}')}</Item>
	</Propriete>
	<Schema lignes={6} aspectRatioSVG={2} html_lignes_vides={1}>
		{#snippet svg()}
			<Polygone points={[A!, B!, C!]} afficher_noms stroke="red" taille_nom={100} />
			<Segment points={segment_selectionné} stroke="blue" stroke-width={15} />
		{/snippet}
		{#snippet html()}
			<Texte lignes={2}>
				Le chemin bleu est plus court <br />
				que le chemin rouge.
			</Texte>
		{/snippet}
	</Schema>
	<Propriete lignes={2}>Un triangle ne peut pas avoir un côté plus long que la somme des deux autres.</Propriete>
	<Exemple />
	<Schema lignes={5} aspectRatioSVG={1.6}>
		{#snippet svg()}
			<Polygone points={triangle2} stroke-width={10} />
			<TexteSVG point={milieux_triangle2[0]!} font-size={100} dx={-50} dy={-60}>2 cm</TexteSVG>
			<TexteSVG point={milieux_triangle2[1]!} font-size={100} dx={200}>7 cm</TexteSVG>
			<TexteSVG point={milieux_triangle2[2]!} font-size={100} dx={-150}>3 cm</TexteSVG>
		{/snippet}
		{#snippet html()}
			<Texte lignes={4}>
				Ce triangle n'existe pas. <br />
				En effet, {@html math(' 7 > 2 + 3')}. <br />
				Cela signifierait qu'il serait plus court de faire un détour {@html math('\\Rightarrow')} impossible.
			</Texte>
		{/snippet}
	</Schema>
</Contenu>
