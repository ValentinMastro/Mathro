<script lang="ts">
	import { Chapitre, Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definitions, Item, Nomenclature, Notation, Remarque, Schéma } from '$lib/cahier/composants/de_cours/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';
	import { Cône, Cube, Cylindre, PavéDroit, Projecteur, Pyramide, Sphere, TexteSVG } from '$lib/cahier/composants/svg/*';

	const projecteur = new Projecteur();
</script>

<Chapitre titre="Solides" />

<Contenu apres_un_titre>
	<Partie numero={1} titre="Les solides usuels" />

	<Schéma lignes={6} aspectRatioSVG={20 / 6}>
		{#snippet svg()}
			<rect x="0%" y="0%" width="100%" height="100%" fill="white" stroke="none" />
			<TexteSVG point={{ x: 500, y: 750 }} font-size={100} text-anchor="left">cube</TexteSVG>
			<TexteSVG point={{ x: 500, y: 200 }} font-size={100} text-anchor="left">sphère</TexteSVG>
			<TexteSVG point={{ x: 1500, y: 200 }} font-size={100} text-anchor="left">cylindre</TexteSVG>
			<TexteSVG point={{ x: 1600, y: 750 }} font-size={100} text-anchor="left">pavé droit</TexteSVG>
			<TexteSVG point={{ x: 2600, y: 750 }} font-size={100} text-anchor="left">pyramide</TexteSVG>
			<TexteSVG point={{ x: 2600, y: 200 }} font-size={100} text-anchor="left">cône</TexteSVG>
			<Cube arête={280} {projecteur} coin={{ x: 50, y: 900 }} />
			<PavéDroit longueur={420} largeur={240} hauteur={220} coin={{ x: 1050, y: 900 }} {projecteur} />
			<Pyramide nature={4} {projecteur} apex={{ x: 2400, y: 600, z: 0 }} centre={{ x: 2400, y: 860, z: 0 }} />
			<Sphere rayon={180} {projecteur} centre={{ x: 250, y: 200, z: 0 }} />
			<Cylindre rayon={150} centre1={{ x: 1300, y: 350, z: 0 }} centre2={{ x: 1300, y: 90, z: 0 }} {projecteur} />
			<Cône rayon={170} apex={{ x: 2400, y: 30, z: 0 }} centre={{ x: 2400, y: 350, z: 0 }} {projecteur} />
		{/snippet}
	</Schéma>

	<LigneVide />

	<Definitions lignes={3}>
		<Item>Une <i>face</i> est une surface (plane ou courbe) délimitant le solide.</Item>
		<Item>Une <i>arête</i> est un segment où se rejoignent deux faces.</Item>
		<Item>Un <i>sommet</i> est un point où se rejoignent plusieurs arêtes.</Item>
		<Item>Un <i>polyèdre</i> est un solide dont les faces sont des polygones.</Item>
	</Definitions>
	<Remarque lignes={2}>La sphère, le cylindre et le cône ont des faces courbes : ce ne sont pas des polyèdres.</Remarque>
	<Nomenclature lignes={5}>
		<Item>4 faces : un tétraèdre</Item>
		<Item>5 faces : un pentaèdre</Item>
		<Item>6 faces : un hexaèdre</Item>
		<Item>8 faces : un octaèdre</Item>
		<Item>10 faces : un décaèdre</Item>
	</Nomenclature>
</Contenu>
