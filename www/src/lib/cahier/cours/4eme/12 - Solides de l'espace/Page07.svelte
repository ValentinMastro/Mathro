<script lang="ts">
	import { Contenu, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Formule, Schéma } from '$lib/cahier/composants/de_cours/*';
	import { Projecteur, Prisme, TexteSVG } from '$lib/cahier/composants/svg/*';
	import { math } from 'mathlifier';

	const projecteur = new Projecteur(0.46);
</script>

<Contenu>
	<SousPartie numero={4} titre="Prisme droit" />
	<Definition lignes={3}>
		Un prisme droit est un polyèdre dont deux des faces - les bases - sont des polygones identiques et parallèles.<br />
		Les autres faces - les faces latérales - sont des rectangles.<br />
	</Definition>
	<Formule lignes={2}>
		Si le prisme droit a une hauteur {@html math(`h`)} et une base d'aire {@html math(`A_{\\text{base}}`)}, alors {@html math(
			`V_{\\text{prisme}} = A_{\\text{base}} \\times h`
		)}.
	</Formule>
	<Schéma lignes={8}>
		{#snippet svg()}
			<Prisme nature={3} {projecteur} centre1={{ x: 500, y: 800, z: 0 }} centre2={{ x: 500, y: 200, z: 0 }} rayon={300} />
			<TexteSVG point={{ x: 500, y: 900 }} font-size={70} text-anchor="middle">Prisme droit triangulaire</TexteSVG>
			<TexteSVG point={{ x: 500, y: 970 }} font-size={70} text-anchor="middle">en perspective cavalière</TexteSVG>
		{/snippet}
	</Schéma>
</Contenu>
