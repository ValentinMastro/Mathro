<script lang="ts">
	import { Contenu } from '$lib/cahier/composants/de_chapitrage/*';
	import { Exemple, Schéma, Texte } from '$lib/cahier/composants/de_cours/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';
</script>

<Contenu>
	<Exemple lignes={2}>
		Dans le triangle DEF rectangle en E, on a <math><mi>DE</mi><mo>=</mo><mn>6</mn><mspace width="0.2em"/><mi>cm</mi></math> et <math><mover><mrow><mi>E</mi><mi>D</mi><mi>F</mi></mrow><mo>^</mo></mover><mo>=</mo><mn>30</mn><mo>°</mo></math>.<br />
		Calculer la longueur DF.
	</Exemple>
	<Schéma lignes={10} aspectRatioSVG={0.9}>
		{#snippet svg()}
			<defs>
				<polygon id="triangle" points="100,100 100,900, 700,900" />
				<clipPath id="clip_triangle">
					<use href="#triangle" fill="white" />
				</clipPath>
			</defs>

			<circle cx="700" cy="900" r="100" fill="red" clip-path="url(#clip_triangle)" />
			<use href="#triangle" fill="none" stroke="black" stroke-width="5" />
			<rect x="100" y="850" width="50" height="50" fill="black" />
			<line x1="700" y1="900" x2="100" y2="900" stroke="red" stroke-width="8" />

			<text x="60" y="100" font-size="65" text-anchor="middle" fill="black">F</text>
			<text x="60" y="950" font-size="65" text-anchor="middle" fill="black">E</text>
			<text x="730" y="950" font-size="65" text-anchor="middle" fill="red">D</text>

			<text x="400" y="950" font-size="55" text-anchor="middle" fill="red">adj</text>
			<text x="460" y="500" font-size="55" text-anchor="middle" fill="black">hyp</text>
		{/snippet}
		{#snippet html()}
			<LigneVide />
			<Texte>Le triangle DEF est rectangle en E, l'hypoténuse est [DF].</Texte>
			<LigneVide lignes={0.5} />
			<Texte>
				<math>
				<mi>cos</mi><mo>(</mo><mover><mrow><mi>E</mi><mi>D</mi><mi>F</mi></mrow><mo>^</mo></mover><mo>)</mo>
				<mo>=</mo>
				<mfrac><mi>adj</mi><mi>hyp</mi></mfrac>
				<mo>=</mo>
				<mfrac><mi>DE</mi><mi>DF</mi></mfrac>
			</math>
			</Texte>
			<LigneVide lignes={0.5} />
			<Texte>Remplaçons les valeurs connues.</Texte>
			<LigneVide />
			<Texte>
				<math>
				<mfrac>
					<mrow><mi>cos</mi><mo>(</mo><mn>30</mn><mo>°</mo><mo>)</mo></mrow>
					<mstyle mathcolor="red"><mn>1</mn></mstyle>
				</mfrac>
				<mo>=</mo>
				<mfrac><mn>6</mn><mi>DF</mi></mfrac>
			</math>
			</Texte>
			<LigneVide />
			<Texte>
				<math>
				<mi>DF</mi><mo>=</mo><mn>6</mn>
				<mstyle mathcolor="red"><mo>×</mo><mn>1</mn></mstyle>
				<mo>÷</mo><mi>cos</mi><mo>(</mo><mn>30</mn><mo>°</mo><mo>)</mo>
				<mo>≈</mo><mn>6</mn><mo>,</mo><mn>93</mn><mspace width="0.2em"/><mi>cm</mi>
			</math>
			</Texte>
		{/snippet}
	</Schéma>
</Contenu>
