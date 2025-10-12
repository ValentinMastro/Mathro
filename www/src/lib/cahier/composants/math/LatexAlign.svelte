<script lang="ts">
	import { alignStar } from 'mathlifier';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';

	type Props = {
		code: string;
		lignes?: number;
		lignes_vides?: number;
	};

	let { code, lignes = 1, lignes_vides = 0 }: Props = $props();
</script>

<div class="align" style="--lignes: {lignes};">
	{@html alignStar(code)}
</div>
{#if lignes_vides > 0}
	<LigneVide lignes={lignes_vides} />
{/if}

<style>
	.align {
		width: fit-content;
		height: calc(var(--lignes) * var(--carreau));
		overflow-y: hidden;
		font-size: var(--font-size);
	}
	:global(.align mtd.tml-right),
	:global(.align mtd.tml-left) {
		height: var(--carreau) !important;
		line-height: var(--line-height) !important;
		padding: 0 !important;
	}
</style>
