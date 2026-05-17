<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Theoreme, Item, Exemple, Schéma, Texte, Paragraphe, Remarque } from '$lib/cahier/composants/de_cours/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';
</script>

<Contenu>
	<Partie numero={2} titre="Réciproque du théorème de Thalès" />
	<LigneVide />
	<Theoreme lignes={5}>
		Si :
		<Item>les points A, B, D sont alignés</Item>
		<Item>les points A, C, E sont alignés</Item>
		<Item>
			au moins 2 des fractions suivantes sont égales :
			<math>
				<mfrac>
					<mi>AB</mi>
					<mi>AD</mi>
				</mfrac>
				<mo>;</mo>
				<mfrac>
					<mi>AC</mi>
					<mi>AE</mi>
				</mfrac>
				<mo>;</mo>
				<mfrac>
					<mi>BC</mi>
					<mi>DE</mi>
				</mfrac>
			</math>
		</Item>
		alors les droites (BC) et (DE) sont parallèles.
	</Theoreme>
	<Exemple lignes={10}>
		<Schéma lignes={10}>
			{#snippet svg()}
				<polygon points="400,100 {400 + 150},{100 + 150} {400 - 200},{100 + 300}" fill="none" stroke="black" stroke-width="8" />
				<polygon
					points="400,100 {400 + 150 * 1.8},{100 + 150 * 1.8} {400 - 200 * 1.8},{100 + 300 * 1.8}"
					fill="none"
					stroke="black"
					stroke-width="8"
				/>
				<text x={400 - 30} y={100 - 5} font-size="60" text-anchor="middle" fill="black">A</text>
				<text x={400 + 150 + 30} y={100 + 150 + 0} font-size="60" text-anchor="middle" fill="black">B</text>
				<text x={400 - 200 - 30} y={100 + 300 + 5} font-size="60" text-anchor="middle" fill="black">C</text>
				<text x={400 + 150 * 1.8 + 30} y={100 + 150 * 1.8 + 10} font-size="60" text-anchor="middle" fill="black">D</text>
				<text x={400 - 200 * 1.8 + 0} y={100 + 300 * 1.8 + 60} font-size="60" text-anchor="middle" fill="black">E</text>
			{/snippet}
			{#snippet html()}
				<LigneVide lignes={0.7} />
				<Texte lignes={2}>
					Peut-on prouver que les droites <br />
					(BC) et (DE) sont parallèles ?
				</Texte>
				<LigneVide lignes={1.3} />
				<Item>AB = 3 cm</Item>
				<Item>AD = 4 cm</Item>
				<Item>AC = 5,1 cm</Item>
				<Item>AE = 6,8 cm</Item>
			{/snippet}
		</Schéma>
	</Exemple>
	<Paragraphe couleur="noir" nom_du_paragraphe="Rédaction" lignes={6}>
		<u>D'une part :</u>
		<math>
			<mfrac>
				<mi>AC</mi>
				<mi>AE</mi>
			</mfrac>
			<mo>=</mo>
			<mfrac>
				<mn>5,1</mn>
				<mn>6,8</mn>
			</mfrac>
			<mo>=</mo>
			<mn>0,75</mn>
		</math>
		<br />
		<LigneVide lignes={0.6} />
		<u>D'autre part :</u>
		<math>
			<mfrac>
				<mi>AB</mi>
				<mi>AD</mi>
			</mfrac>
			<mo>=</mo>
			<mfrac>
				<mn>3</mn>
				<mn>4</mn>
			</mfrac>
			<mo>=</mo>
			<mn>0,75</mn>
		</math>
		<br />
		D'après la réciproque du théorème de Thalès,
		<br />
		les droites (BC) et (DE) sont parallèles.
	</Paragraphe>
	<LigneVide />
	<Remarque lignes={2}>Si au moins 2 fractions n'étaient pas égales, alors les droites n'auraient pas été parallèles.</Remarque>
</Contenu>
