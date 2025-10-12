<script lang="ts">
	import { Contenu, DansLaMarge, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Convention, Formule, Schema, Texte } from '$lib/cahier/composants/de_cours/*';
	import { Slider } from '$lib/cahier/composants/de_marge/*';
	import { Cube, Projecteur } from '$lib/cahier/composants/svg/*';
	import { math } from 'mathlifier';

	const projecteur = new Projecteur(0.46);

	let nombre_de_cubes = $state(0);
</script>

<DansLaMarge lignes_vides={20}>
	<Slider bind:valeur={nombre_de_cubes} min={0} max={6 * 6 * 6} />
</DansLaMarge>

<Contenu>
	<Partie numero={2} titre="Unité de volume" />
	<Convention lignes={2}>
		Un centimètre cube ({@html math('\\text{cm}^3')}) est une unité de volume, correspondant à un cube de côté 1 cm.
	</Convention>
	<Schema lignes={5} aspectRatioSVG={1.4}>
		{#snippet svg()}
			<Cube arête={600} {projecteur} coin={{ x: 200, y: 800 }} />
		{/snippet}
		{#snippet html()}
			<Texte lignes={3}>
				Ce cube a toutes ses arêtes de la même longueur : {@html math('1~\\text{cm}')}. <br />
				Son volume est égal à {@html math('1~\\text{cm}^3')}.
			</Texte>
		{/snippet}
	</Schema>
	<Formule lignes={2}>
		Le volume d'un cube de côté {@html math('a')} cm est égal à {@html math('a \\times a \\times a')} cm<sup>3</sup>.
		<center>{@html math('\\mathcal{V}_{\\text{cube}} = a \\times a \\times a')}</center>
	</Formule>
	<Schema lignes={10} aspectRatioSVG={2}>
		{#snippet svg()}
			{@const decal_z = 0.331}
			{#each [0, 1, 2, 3, 4, 5] as ix}
				{#each [0, 1, 2, 3, 4, 5] as iy}
					{#each [0, 1, 2, 3, 4, 5] as iz}
						{#if nombre_de_cubes > ix + 6 * iy + 6 * 6 * iz}
							<Cube arête={100} {projecteur} coin={{ x: 500 + ix * 100 + iz * 100 * decal_z, y: 900 - iy * 100 - iz * 100 * decal_z }} />
						{/if}
					{/each}
				{/each}
			{/each}
			<Cube arête={600} {projecteur} coin={{ x: 500, y: 900 }} />
		{/snippet}
	</Schema>
</Contenu>
