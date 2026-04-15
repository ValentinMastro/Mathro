<script lang="ts">
	import { Contenu, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Formule, Schéma } from '$lib/cahier/composants/de_cours/*';
	import { Cône, Projecteur, TexteSVG } from '$lib/cahier/composants/svg/*';
	import { math } from 'mathlifier';

	const projecteur = new Projecteur(0.46);
</script>

<Contenu>
	<SousPartie numero={2} titre="Cône de révolution" />
	<Definition lignes={3}>
		Un cône de révolution est un solide obtenu en faisant tourner un triangle rectangle autour d'un des deux côtés qui n'est pas l'hypoténuse.
	</Definition>
	<Formule lignes={2}>
		Si le cône a une hauteur {@html math(`h`)} et un rayon de base {@html math(`r`)}, alors {@html math(
			`V_{\\text{cone}} = \\frac{1}{3} \\times \\pi r^2 \\times h`
		)}.
	</Formule>
	<Schéma lignes={8}>
		{#snippet svg()}
			<Cône rayon={170} apex={{ x: 500, y: 200, z: 0 }} centre={{ x: 500, y: 790, z: 0 }} {projecteur} />
			<TexteSVG point={{ x: 500, y: 900 }} font-size={70} text-anchor="middle">Cône de révolution</TexteSVG>
			<TexteSVG point={{ x: 500, y: 970 }} font-size={70} text-anchor="middle">en perspective cavalière</TexteSVG>
		{/snippet}
	</Schéma>
</Contenu>
