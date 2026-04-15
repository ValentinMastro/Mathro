<script lang="ts">
	import { Contenu, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Formule, Schéma } from '$lib/cahier/composants/de_cours/*';
	import { Projecteur, Pyramide, TexteSVG } from '$lib/cahier/composants/svg/*';
	import { math } from 'mathlifier';

	const projecteur = new Projecteur(0.46);
</script>

<Contenu>
	<SousPartie numero={3} titre="Pyramide" />
	<Definition lignes={3}>
		Une pyramide est un polyèdre dont une face est un polygone (la base) et les autres des triangles (les faces latérales).<br />
		Tous les sommets de la base sont reliés en un point appelé <i>l'apex.</i><br />
	</Definition>
	<Formule lignes={2}>
		Si la pyramide a une hauteur {@html math(`h`)} et une base d'aire {@html math(`A_{\\text{base}}`)}, alors {@html math(
			`V_{\\text{pyramide}} = \\frac{1}{3} \\times A_{\\text{base}} \\times h`
		)}.
	</Formule>
	<Schéma lignes={8}>
		{#snippet svg()}
			<Pyramide nature={4} {projecteur} apex={{ x: 500, y: 150, z: 0 }} centre={{ x: 500, y: 720, z: 0 }} rayon={300} />
			<TexteSVG point={{ x: 500, y: 900 }} font-size={70} text-anchor="middle">Pyramide à base carrée</TexteSVG>
			<TexteSVG point={{ x: 500, y: 970 }} font-size={70} text-anchor="middle">en perspective cavalière</TexteSVG>
		{/snippet}
	</Schéma>
</Contenu>
