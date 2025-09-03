<script lang="ts">
	import { Contenu, Partie, DansLaMarge } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Notation, Exemples, Schema, Item, Exemple, Texte } from '$lib/cahier/composants/de_cours/*';
	import { Slider } from '$lib/cahier/composants/de_marge/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';
	import { math } from 'mathlifier';

	let t = $state(0);
	let point: { x: number; y: number } = $derived({
		x: 200 + (3000 - 200) * t,
		y: 200 + (700 - 200) * t
	});
</script>

<DansLaMarge>
	<LigneVide lignes={22} />
	<Slider bind:valeur={t} min={0} max={1} pas={0.01} />
</DansLaMarge>

<Contenu>
	<Partie numero={2} titre="Alignement et appartenance" />
	<Definition lignes={2}>Trois points sont alignés s'il est possible de les placer sur la même droite.</Definition>
	<Notation lignes={2}>
		Si le point M est sur la droite (AB), on note {@html math('\\text{M} \\in (\\text{AB})')}.<br />
		Si le point A n'est pas sur le segment [BC], on note {@html math('\\text{A} \\notin [\\text{BC}]')}.
	</Notation>
	<Exemples lignes={5}>
		<Schema lignes={5} aspectRatioSVG={4}>
			{#snippet svg()}
				<line x1="200" y1="200" x2="3600" y2="800" stroke="black" stroke-width="10"></line>
				<line x1="300" x2="300" y1="170" y2="270" stroke="black" stroke-width="10"></line>
				<line x1="2500" x2="2500" y1="570" y2="670" stroke="black" stroke-width="10"></line>
				<!-- line qui passe par 2500 600 -->
				<line x1="2500" x2="3200" y1="600" y2="300" stroke="black" stroke-width="10"></line>
				<line x1="3200" x2="3200" y1="250" y2="350" stroke="black" stroke-width="10"></line>
				<!-- Nom des points -->
				<text x={200} y={400} font-size="150" fill="black">A</text>
				<text x={2500} y={780} font-size="150" fill="black">B</text>
				<text x={3200} y={200} font-size="150" fill="black">C</text>
			{/snippet}
		</Schema>
	</Exemples>
	<LigneVide lignes={3} />
	<Schema lignes={5} aspectRatioSVG={3.4}>
		{#snippet svg()}
			<line x1="200" y1="200" x2="3000" y2="700" stroke="black" stroke-width="10"></line>
			<line x1="1000" x2="1000" y1="300" y2="400" stroke="black" stroke-width="10"></line>
			<line x1="2500" x2="2500" y1="570" y2="670" stroke="black" stroke-width="10"></line>
			<text x="1000" y="570" font-size="150" text-anchor="middle" fill="black">O</text>
			<text x="2500" y="800" font-size="150" text-anchor="middle" fill="black">P</text>
			<circle cx={point.x} cy={point.y} r="35" fill="red"></circle>
			<text x={point.x} y={point.y + 180} font-size="150" text-anchor="middle" fill="red">N</text>
		{/snippet}
		{#snippet html()}
			<Texte>
				{#if point.x >= 1000 && point.x <= 2500}
					{@html math('\\text{N} \\in [\\text{OP}]')}
				{:else}
					{@html math('\\text{N} \\notin [\\text{OP}]')}
				{/if}
			</Texte>
			<Texte>
				{#if point.x >= 1000}
					{@html math('\\text{N} \\in [\\text{OP})')}
				{:else}
					{@html math('\\text{N} \\notin [\\text{OP})')}
				{/if}
			</Texte>
			<Texte>
				{#if point.x <= 2500}
					{@html math('\\text{N} \\in (\\text{OP}]')}
				{:else}
					{@html math('\\text{N} \\notin (\\text{OP}]')}
				{/if}
			</Texte>
			<Texte>
				{@html math('\\text{N} \\in (\\text{OP})')}
			</Texte>
		{/snippet}
	</Schema>
</Contenu>
