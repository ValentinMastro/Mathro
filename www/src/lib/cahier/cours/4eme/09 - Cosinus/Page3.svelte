<script lang="ts">
	import { Contenu } from '$lib/cahier/composants/de_chapitrage/*';
	import { Exemple, Schema, Texte } from '$lib/cahier/composants/de_cours/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';
	import { math } from 'mathlifier';
</script>

<Contenu>
	<Exemple lignes={2}>
		Dans le triangle DEF rectangle en E, on a {@html math('\\text{DE} = 6~\\text{cm}')} et {@html math('\\widehat{\\text{EDF}} = 30^\\circ')}.<br />
		Calculer la longueur DF.
	</Exemple>
	<Schema lignes={10} aspectRatioSVG={0.9}>
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
				{@html math(`
                    \\cos(\\widehat{\\text{EDF}}) = \\dfrac{\\text{adj}}{\\text{hyp}}
                    = \\dfrac{\\text{DE}}{\\text{DF}}
                `)}
			</Texte>
			<LigneVide lignes={0.5} />
			<Texte>Remplaçons les valeurs connues.</Texte>
			<LigneVide />
			<Texte>
				{@html math(`
                    \\dfrac{\\cos(30°)}{\\color{red} 1} = \\dfrac{6}{\\text{DF}}
                `)}
			</Texte>
			<LigneVide />
			<Texte>
				{@html math('\\text{DF} = 6 {\\color{red} \\times 1} \\div \\cos(30^\\circ) \\approx 6{,}93~\\text{cm}')}
			</Texte>
		{/snippet}
	</Schema>
</Contenu>
