<script lang="ts">
	import { Chapitre, Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemple, Exemples, Illustration, Item, Propriete, Protocole, Schema, Texte } from '$lib/cahier/composants/de_cours/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';
	import { Fleche, Point, Polygone } from '$lib/cahier/composants/svg/*';

	import { math } from 'mathlifier';

	let AB = '4';
	let AC = '2,4';
	let BC = '3,2';
</script>

<Chapitre titre="Triangles" />

<Contenu apres_un_titre>
	<Definition>Un triangle est une figure ayant 3 côtés et 3 angles.</Definition>
	<Partie numero={1} titre="Inégalité triangulaire" />
	<Illustration />
	<Schema lignes={5} aspectRatioSVG={4}>
		{#snippet svg()}
			{@const A = { x: 200, y: 200 }}
			{@const B = { x: 1800, y: 400 }}
			{@const C = { x: 1000, y: 800 }}
			{@const decal = 0.04}
			<Fleche points={[A, { x: (1 - decal) * B.x + decal * A.x, y: (1 - decal) * B.y + decal * A.y }]} taille={50} />
			<Fleche points={[A, C]} taille={50} fill="red" stroke="red" />
			<Fleche points={[C, { x: (1 - decal) * B.x + decal * C.x, y: (1 - decal) * B.y + decal * C.y }]} taille={50} fill="red" stroke="red" />
			<Point nom="" point={A} type={{ forme: 'disque', taille: 20 }} />
			<Point nom="" point={B} type={{ forme: 'disque', taille: 20 }} />
			<g transform="translate(2000,0)">
				<Polygone points={[A, B, C]} afficher_points taille_nom={120} distance_nom={120} />
			</g>
		{/snippet}
	</Schema>
	<Texte>
		Le chemin noir est plus court que le rouge :
		{@html math('\\text{AB}~ \\leqslant \\text{AC} + \\text{CB} ')}
	</Texte>
	<Propriete lignes={2}>
		Un triangle ne peut être construit que si sa plus grande longueur est <br />
		inférieure ou égale à la somme des deux autres.
	</Propriete>
	<Exemples lignes={4}>
		<Item lignes={2}>
			Le triangle IJK avec {@html math('\\text{IJ} = 7~\\text{cm}, \\text{IK} = 5~\\text{cm}, \\text{JK} = 3~\\text{cm}')} peut être <br />
			construit, car {@html math('7 \\leqslant 5 + 3')}.
		</Item>
		<Item lignes={2}>
			Le triangle MNP avec {@html math('\\text{MN} = 8~\\text{cm}, \\text{MP} = 6~\\text{cm}, \\text{NP} = 1~\\text{cm}')} ne peut <br />
			pas être construit, car {@html math('8 > 6 + 1')}.
		</Item>
	</Exemples>
</Contenu>
