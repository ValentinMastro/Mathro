<script lang="ts">
	import { Contenu, DansLaMarge } from '$lib/cahier/composants/de_chapitrage/*';
	import { Exemples, Item, Propriete, Schema } from '$lib/cahier/composants/de_cours/*';
	import { Slider } from '$lib/cahier/composants/de_marge/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';

	import { math } from 'mathlifier';

	function en_radians(deg: number): number {
		return (deg * Math.PI) / 180;
	}

	let facteur_1: number = $state(2);
	let facteur_2: number = $state(5);
</script>

<DansLaMarge apres_un_titre lignes_vides={10}>
	<Slider min={1} max={10} bind:valeur={facteur_1} />
	<Slider min={1} max={5} bind:valeur={facteur_2} />
</DansLaMarge>

{#snippet cercle(cx: number, cy: number, r: number, numerateur: number, denominateur: number, facteur: number)}
	{#each Array(denominateur * facteur) as _, i}
		<path
			d="M {cx} {cy} L {cx + r} {cy} A {r} {r} 0 0 0 {cx + r * Math.cos(en_radians(360 / denominateur / facteur))} {cy -
				r * Math.sin(en_radians(360 / denominateur / facteur))} Z"
			transform-origin="{cx} {cy}"
			transform={`rotate(-${(i * (360 / denominateur)) / facteur})`}
			stroke="black"
			stroke-width={3}
			fill={i + 1 <= numerateur * facteur ? 'green' : 'red'}
		/>
		<text
			x={cx + (r + 50 + (i % 2) * 70) * Math.cos(en_radians(((i + 0.5) * (360 / denominateur)) / facteur))}
			y={cy - (r + 50 + (i % 2) * 70) * Math.sin(en_radians(((i + 0.5) * (360 / denominateur)) / facteur))}
			font-size={i % 2 == 1 ? 70 : 40}
			fill={i + 1 <= numerateur * facteur ? 'green' : 'red'}
			text-anchor="middle"
			dominant-baseline="middle"
		>
			{i + 1}
		</text>
	{/each}
{/snippet}

<Contenu>
	<Propriete lignes={2}>
		Soient deux nombres {@html math('a')} et {@html math('b')} avec {@html math('b \\neq 0')}. Soit {@html math('k \\neq 0')}.<br />
		Alors {@html math('\\dfrac{a}{b} = \\dfrac{k \\times a}{k \\times b}')}
	</Propriete>

	<Exemples lignes={3}>
		<Item>
			{@html math(`\\dfrac{3}{4} = \\dfrac{${facteur_1} \\times 3}{${facteur_1} \\times 4} = \\dfrac{${facteur_1 * 3}}{${facteur_1 * 4}}`)}
		</Item>
		<LigneVide />
		<Item>
			{@html math(`\\dfrac{7}{15} = \\dfrac{${facteur_2} \\times 7}{${facteur_2} \\times 15} = \\dfrac{${facteur_2 * 7}}{${facteur_2 * 15}}`)}
		</Item>
	</Exemples>

	<Schema lignes={8} aspectRatioSVG={2.4}>
		{#snippet svg()}
			{@render cercle(500, 500, 300, 3, 4, facteur_1)}
			{@render cercle(1750, 500, 300, 7, 15, facteur_2)}
		{/snippet}
	</Schema>
</Contenu>
