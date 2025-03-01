<script lang="ts">
	import { Chapitre, Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemples, Notation, Schema } from '$lib/cahier/composants/de_cours/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';

	import { math } from 'mathlifier';
</script>

<Chapitre titre="Vocabulaire de géométrie" />

<Contenu apres_un_titre={true}>
	<Partie numero={1} titre="Droite, demi-droite, segment, milieu" />
		<LigneVide />
		<Definition lignes={2}>
			Une <i>droite</i> est un ensemble de points alignés. <br />
			Elle se prolonge à l'infini des deux côtés.
		</Definition>
		<Notation>
			Le nom d'une droite s'écrit entre parenthèses.
		</Notation>
		<Exemples lignes={3}>
			<Schema aspectRatioSVG={6} lignes={3}>
				{#snippet svg()}
					<line x1="200" y1="200" x2="5800" y2="800" stroke="black" stroke-width="15"></line>
					<line x1="300" y1="140" x2="280" y2="280" stroke="black" stroke-width="15"></line>
					<line x1="5500" y1="700" x2="5480" y2="840" stroke="black" stroke-width="15"></line>
					<text x="800" y="200" font-size="200" font-style="italic" fill="black">(d)</text>
					<text x="210" y="480" font-size="200" fill="black">A</text>
					<text x="5450" y="660" font-size="200" fill="black">B</text>
				{/snippet}
			</Schema>
		</Exemples>
		<Definition lignes={2}>
			Une demi-droite est un morceau de droite délimité par un point : l'origine.
		</Definition>
		<Notation lignes={2}>
			Une demi-droite d'origine A et de direction {@html math('x')} se note {@html math('[\\text{A}x)')}. <br />
			Une demi-droite d'origine B passant par O se note {@html math('[\\text{BO})')}.
		</Notation>
		<Exemples lignes={4}>
			<Schema lignes={4} aspectRatioSVG={5}>
				{#snippet svg()}
					<line x1="200" y1="100" x2="2300" y2="900" stroke="black" stroke-width="15"></line>
					<line x1="2700" y1="800" x2="4800" y2="200" stroke="black" stroke-width="15"></line>
					<line x1="200" y1="30" x2="200" y2="170" stroke="black" stroke-width="15"></line>
					<line x1="2700" y1="880" x2="2700" y2="720" stroke="black" stroke-width="15"></line>
					<line x1="4500" y1="200" x2="4500" y2="360" stroke="black" stroke-width="15"></line>
					<text x="180" y="300" font-size="200" fill="black">A</text>
					<text x="2300" y="1000" font-size="200" font-style="italic" fill="black">x</text>
					<text x="2700" y="660" font-size="200" fill="black">B</text>
					<text x="4400" y="150" font-size="200" fill="black">O</text>
				{/snippet}
			</Schema>
		</Exemples>
</Contenu>
