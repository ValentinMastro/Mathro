<script lang="ts">
	import { Contenu, Partie, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Formule, Schéma } from '$lib/cahier/composants/de_cours/*';
	import { Cylindre, Projecteur, TexteSVG } from '$lib/cahier/composants/svg/*';
	import { math } from 'mathlifier';

	const projecteur = new Projecteur(0.46);
</script>

<Contenu>
	<Partie numero={3} titre="Solides de révolution" />
	<Definition lignes={2}>Un solide de révolution est un solide obtenu en faisant tourner un polygone autour d'un axe.</Definition>
	<SousPartie numero={1} titre="Cylindre de révolution" />
	<Definition lignes={2}>Un cylindre de révolution est un solide obtenu en faisant tourner un rectangle autour d'un de ses côtés.</Definition>
	<Formule lignes={2}>
		Si le cylindre a une hauteur {@html math(`h`)} et un rayon de base {@html math(`r`)}, alors {@html math(
			`V_{\\text{cylindre}} = \\pi r^2 \\times h`
		)}.
	</Formule>
	<Schéma lignes={8}>
		{#snippet svg()}
			<Cylindre rayon={170} centre1={{ x: 500, y: 800, z: 0 }} centre2={{ x: 500, y: 200, z: 0 }} {projecteur} />
			<TexteSVG point={{ x: 500, y: 900 }} font-size={70} text-anchor="middle">Cylindre de révolution</TexteSVG>
			<TexteSVG point={{ x: 500, y: 970 }} font-size={70} text-anchor="middle">en perspective cavalière</TexteSVG>
		{/snippet}
	</Schéma>
</Contenu>
