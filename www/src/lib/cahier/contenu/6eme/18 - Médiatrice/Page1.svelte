<script lang="ts">
	import { Chapitre, Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Exemple, Item, Paragraphe, Propriete, Protocole, Schema } from '$lib/cahier/composants/de_cours/*';
	import { math } from 'mathlifier';
</script>

<Chapitre titre="Médiatrice" />

<Contenu apres_un_titre>
	<Paragraphe nom_du_paragraphe="Définition (rappel)" couleur="vert" lignes={2}>
		La médiatrice d'un segment est la droite perpendiculaire à ce segment passant par son milieu.
	</Paragraphe>
	<Partie numero={1} titre="Construction d'une médiatrice avec le compas" />
	<Propriete lignes={2}>La médiatrice d'un segment est l'ensemble des points équidistants aux extrémités du segment.</Propriete>
	<Exemple lignes={8}>
		{@html math('AB = 6 \\text{ cm}')}
		<Schema lignes={5} aspectRatioSVG={2}>
			{#snippet svg()}
				<line x1={400} x2={400} y1={600 - 50} y2={600 + 50} stroke="black" stroke-width={8} />
				<line x1={1600} x2={1600} y1={600 - 50} y2={600 + 50} stroke="black" stroke-width={8} />
				<line x1={400} x2={1600} y1={600} y2={600} stroke="black" stroke-width={8} />
				<text x={400} y={500} text-anchor="middle" font-size={100} fill="black">A</text>
				<text x={1600} y={500} text-anchor="middle" font-size={100} fill="black">B</text>
				<line x1={1000} x2={1000} y1={0} y2={1000} stroke="red" stroke-width={10} />
			{/snippet}
		</Schema>
		C et D sont équidistants de A et B.<br />
		{@html math('CA = CB')} et {@html math('DA = DB')}
	</Exemple>
	<Protocole>
		<Item>aa</Item>
	</Protocole>
</Contenu>
