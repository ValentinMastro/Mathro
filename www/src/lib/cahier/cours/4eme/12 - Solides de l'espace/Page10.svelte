<script lang="ts">
	import { Contenu, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Formule, Schéma } from '$lib/cahier/composants/de_cours/*';
	import { Projecteur, Sphere, TexteSVG } from '$lib/cahier/composants/svg/*';
	import { math } from 'mathlifier';

	const projecteur = new Projecteur();
</script>

<Contenu>
	<SousPartie numero={3} titre="Sphère et boule" />
	<Definition lignes={2}>
		Une sphère est un solide de révolution obtenu en faisant tourner un cercle autour de son diamètre. Une boule est une sphère pleine.
	</Definition>
	<Formule>
		Si la sphère a un rayon {@html math(`r`)}, alors {@html math(`A_{\\text{sphere}} = 4 \\times \\pi r^2`)}
		et {@html math(`V_{\\text{boule}} = \\frac{4}{3} \\times \\pi r^3`)}.
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
