<script lang="ts">
	import { Contenu, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Formule, Schéma } from '$lib/cahier/composants/de_cours/*';
	import { Projecteur, Sphere, TexteSVG } from '$lib/cahier/composants/svg/*';


	const projecteur = new Projecteur();
</script>

<Contenu>
	<SousPartie numero={3} titre="Sphère et boule" />
	<Definition lignes={2}>
		Une sphère est un solide de révolution obtenu en faisant tourner un cercle autour de son diamètre. Une boule est une sphère pleine.
	</Definition>
	<Formule lignes={2}>
		Si la sphère a un rayon <math><mi>r</mi></math>, alors <br />
		<math><msub><mi>A</mi><mtext>sphere</mtext></msub><mo>=</mo><mn>4</mn><mo>×</mo><mi>π</mi><msup><mi>r</mi><mn>2</mn></msup><mspace width="1em" /><mtext>et</mtext><mspace width="1em" /><msub><mi>V</mi><mtext>boule</mtext></msub><mo>=</mo><mfrac><mn>4</mn><mn>3</mn></mfrac><mo>×</mo><mi>π</mi><msup><mi>r</mi><mn>3</mn></msup></math>
	</Formule>
	<Schéma lignes={8} centré>
		{#snippet svg()}
			{@const cx = 500}
			{@const cy = 480}
			{@const r = 300}
			<Sphere rayon={r} centre={{ x: cx, y: cy, z: 0 }} {projecteur} />
			<circle {cx} {cy} r={12} fill="black" />
			<TexteSVG point={{ x: cx - 55, y: cy - 40 }} font-size={70}>O</TexteSVG>
			<line x1={cx} y1={cy} x2={cx + r} y2={cy} stroke="black" stroke-width={5} />
			<TexteSVG point={{ x: cx + r / 2, y: cy - 45 }} font-size={70} font-style="italic">r</TexteSVG>
			<TexteSVG point={{ x: 500, y: 860 }} font-size={70} text-anchor="middle">Sphère</TexteSVG>
			<TexteSVG point={{ x: 500, y: 930 }} font-size={70} text-anchor="middle">en perspective cavalière</TexteSVG>
		{/snippet}
	</Schéma>
</Contenu>
