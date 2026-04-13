<script lang="ts">
	import { Contenu } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Schéma } from '$lib/cahier/composants/de_cours/*';
	import { math } from 'mathlifier';
	import { Projecteur, Sphere, TexteSVG } from '$lib/cahier/composants/svg/*';

	const projecteur = new Projecteur();
</script>

<Contenu>
	<Definition lignes={2}>Une sphère est l'ensemble des points situés à une distance {@html math('r')} d'un point O.</Definition>

	<Schéma lignes={7} aspectRatioSVG={1.5} centré>
		{#snippet svg()}
			<rect x="0%" y="0%" width="100%" height="100%" fill="white" stroke="none" />
			{@const cx = 750}
			{@const cy = 500}
			{@const r = 300}
			<Sphere rayon={r} centre={{ x: cx, y: cy, z: 0 }} {projecteur} />
			<!-- Centre O -->
			<circle cx={cx} cy={cy} r={12} fill="black" />
			<TexteSVG point={{ x: cx - 50, y: cy - 35 }} font-size={80}>O</TexteSVG>
			<!-- Rayon r -->
			<line x1={cx} y1={cy} x2={cx + r} y2={cy} stroke="black" stroke-width={5} />
			<TexteSVG point={{ x: cx + r / 2, y: cy - 45 }} font-size={80} font-style="italic">r</TexteSVG>
		{/snippet}
	</Schéma>
</Contenu>
