<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Methode, Item, Remarque, Schéma } from '$lib/cahier/composants/de_cours/*';
	import { PavéDroit, Projecteur, TexteSVG } from '$lib/cahier/composants/svg/*';

	const projecteur = new Projecteur(0.46);
</script>

<Contenu>
	<Partie numero={2} titre="Représentation en perspective cavalière" />
	<Definition lignes={2}>
		La <i>perspective cavalière</i> est une façon de représenter un solide en 2D sur papier. <br />
		Les arêtes cachées (non visibles) sont tracées en pointillés.
	</Definition>
	<Schéma lignes={8} aspectRatioSVG={2}>
		{#snippet svg()}
			<PavéDroit {projecteur} coin={{ x: 200, y: 900 }} longueur={900} largeur={500} hauteur={500} />
			<TexteSVG point={{ x: 700, y: 980 }} font-size={80}>pavé droit en perspective cavalière</TexteSVG>
			<TexteSVG point={{ x: 190, y: 880 }} font-size={70} fill="red">A</TexteSVG>
			<TexteSVG point={{ x: 1110, y: 880 }} font-size={70} fill="red">B</TexteSVG>
			<TexteSVG point={{ x: 1110, y: 380 }} font-size={70} fill="red">C</TexteSVG>
			<TexteSVG point={{ x: 190, y: 380 }} font-size={70} fill="red">D</TexteSVG>
		{/snippet}
	</Schéma>
	<Methode lignes={4}>
		<Item>Tracer la face avant (rectangle visible).</Item>
		<Item>Tracer les arêtes obliques partant des sommets, avec le même angle et la même longueur réduite.</Item>
		<Item>Tracer la face arrière (parallèle à la face avant).</Item>
		<Item>Mettre les arêtes cachées en pointillés.</Item>
	</Methode>
	<Remarque lignes={2}>En perspective cavalière, les arêtes parallèles restent parallèles et de même longueur.</Remarque>
</Contenu>
