<script lang="ts">
	import { Chapitre, Contenu, Partie, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Schema } from '$lib/cahier/composants/de_cours/*';
	import { Cube, Polylignes, TexteSVG, Projecteur, PavéDroit, Sphere, Cylindre, Cône, Pyramide } from '$lib/cahier/composants/svg/*';

	const projecteur = new Projecteur();
</script>

<Chapitre titre="Solides" />

<Contenu apres_un_titre>
	<Partie numero={1} titre="Différents types de solides" />

	<Schema lignes={6} aspectRatioSVG={20 / 6}>
		{#snippet svg()}
			<!-- Fond blanc -->
			<rect x="0%" y="0%" width="100%" height="100%" fill="white" stroke="none" />

			<TexteSVG point={{ x: 670, y: 200 }} font-size={100} text-anchor="left">sphère</TexteSVG>
			<TexteSVG point={{ x: 620, y: 750 }} font-size={100} text-anchor="left">cube</TexteSVG>
			<TexteSVG point={{ x: 2900, y: 750 }} font-size={100} text-anchor="left">pyramide</TexteSVG>
			<TexteSVG point={{ x: 2860, y: 200 }} font-size={100} text-anchor="left">cône</TexteSVG>
			<TexteSVG point={{ x: 1700, y: 200 }} font-size={100} text-anchor="left">cylindre</TexteSVG>
			<TexteSVG point={{ x: 1900, y: 750 }} font-size={100} text-anchor="left">pavé droit</TexteSVG>

			<Cube arête={280} {projecteur} coin={{ x: 50, y: 900 }} />
			<PavéDroit longueur={420} largeur={240} hauteur={220} coin={{ x: 1050, y: 900 }} {projecteur} />
			<Pyramide nature={4} {projecteur} apex={{ x: 2400, y: 600, z: 0 }} centre={{ x: 2400, y: 860, z: 0 }} />
			<Sphere rayon={180} {projecteur} centre={{ x: 250, y: 200, z: 0 }} />
			<Cylindre rayon={150} centre1={{ x: 1300, y: 350, z: 0 }} centre2={{ x: 1300, y: 90, z: 0 }} {projecteur} />
			<Cône rayon={170} apex={{ x: 2400, y: 30, z: 0 }} centre={{ x: 2400, y: 350, z: 0 }} {projecteur} />
		{/snippet}
	</Schema>

	<SousPartie numero={1} titre="Le cube" />
	<Definition>Un cube est un solide à six faces carrées identiques.</Definition>

	<Schema lignes={10} aspectRatioSVG={2}>
		{#snippet svg()}
			<!-- Cube en perspective cavalière -->
			<Cube arête={500} {projecteur} coin={{ x: 200, y: 800 }} />
			<TexteSVG point={{ x: 550, y: 880 }}>cube en perspective cavalière</TexteSVG>
			<!-- Patron du cube -->
			{@const a = 200}
			{@const x0 = 1400}
			{@const y0 = 200}
			{#each [{ x: x0, y: y0 }, { x: x0 + a, y: y0 }, { x: x0 - a, y: y0 }, { x: x0, y: y0 + a }, { x: x0, y: y0 + 2 * a }, { x: x0, y: y0 - a }] as { x, y }}
				<rect {x} {y} width={a} height={a} fill="none" stroke="black" stroke-width={3} />
			{/each}
			<TexteSVG point={{ x: 1500, y: 880 }}>patron d'un cube</TexteSVG>
		{/snippet}
	</Schema>
</Contenu>
