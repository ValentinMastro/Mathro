<script lang="ts">
	import { Contenu, DansLaMarge, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Convention, Formule, Schéma, Texte } from '$lib/cahier/composants/de_cours/*';
	import { Slider } from '$lib/cahier/composants/de_marge/*';
	import { Cube, Projecteur } from '$lib/cahier/composants/svg/*';
	import { math } from 'mathlifier';

	const projecteur = new Projecteur(0.46);

	let nombre_de_cubes = $state(0);

	const a = 100; // arête d'un cube unité
	const coinX = 500;
	const coinY = 900;
	const dx = projecteur.dx; // ≈ 0.325
	const dy = projecteur.dy; // ≈ −0.325
</script>

<DansLaMarge lignes_vides={20}>
	<Slider bind:valeur={nombre_de_cubes} min={0} max={6 * 6 * 6} />
</DansLaMarge>

<Contenu>
	<Partie numero={2} titre="Unité de volume" />
	<Convention lignes={2}>
		Un centimètre cube ({@html math('\\text{cm}^3')}) est une unité de volume, correspondant à un cube de côté 1 cm.
	</Convention>
	<Schéma lignes={5} aspectRatioSVG={1.4}>
		{#snippet svg()}
			<Cube arête={600} {projecteur} coin={{ x: 200, y: 800 }} />
		{/snippet}
		{#snippet html()}
			<Texte lignes={3}>
				Ce cube a toutes ses arêtes de la même longueur : {@html math('1~\\text{cm}')}. <br />
				Son volume est égal à {@html math('1~\\text{cm}^3')}.
			</Texte>
		{/snippet}
	</Schéma>
	<Formule lignes={2}>
		Le volume d'un cube de côté {@html math('a')} cm est égal à {@html math('a \\times a \\times a')} cm<sup>3</sup>.
		<center>{@html math('\\mathcal{V}_{\\text{cube}} = a \\times a \\times a')}</center>
	</Formule>
	<Schéma lignes={10} aspectRatioSVG={2}>
		{#snippet svg()}
			<!-- Algorithme du peintre : iz décroissant (fond → avant) pour la superposition correcte -->
			{#each [5, 4, 3, 2, 1, 0] as iz}
				{#each [0, 1, 2, 3, 4, 5] as iy}
					{#each [0, 1, 2, 3, 4, 5] as ix}
						{@const i = iy * 36 + iz * 6 + ix}
						{#if i < nombre_de_cubes}
							{@const bx = coinX + ix * a + iz * a * dx}
							{@const by = coinY - iy * a + iz * a * dy}
							<!-- Face avant -->
							<polygon points="{bx},{by - a} {bx},{by} {bx + a},{by} {bx + a},{by - a}" fill="#5B9BD5" stroke="#0d3050" stroke-width="2" />
							<!-- Face droite (ombre) -->
							<polygon
								points="{bx + a},{by} {bx + a + a * dx},{by + a * dy} {bx + a + a * dx},{by - a + a * dy} {bx + a},{by - a}"
								fill="#2E75B6"
								stroke="#0d3050"
								stroke-width="2"
							/>
							<!-- Face du dessus (lumière) -->
							<polygon
								points="{bx},{by - a} {bx + a},{by - a} {bx + a + a * dx},{by - a + a * dy} {bx + a * dx},{by - a + a * dy}"
								fill="#9DC3E6"
								stroke="#0d3050"
								stroke-width="2"
							/>
						{/if}
					{/each}
				{/each}
			{/each}
			<!-- Cage du grand cube par-dessus les cubes unités -->
			<Cube arête={600} {projecteur} coin={{ x: coinX, y: coinY }} />
		{/snippet}
	</Schéma>
</Contenu>
