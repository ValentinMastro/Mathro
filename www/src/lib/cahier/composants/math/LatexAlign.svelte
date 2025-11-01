<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { alignStar } from 'mathlifier';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';

	type Props = HTMLAttributes<HTMLDivElement> & {
		code: string;
		lignes?: number;
		lignes_vides?: number;
	};

	let { code, lignes = 1, lignes_vides = 0, ...props }: Props = $props();
	let style = (props.style ?? '') + `--lignes: ${lignes};`;
</script>

<div class="align" {...props} {style}>
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
		line-height: var(--line-height);
	}
	:global(.align mtd.tml-right),
	:global(.align mtd.tml-left) {
		height: var(--carreau) !important;
		line-height: var(--line-height) !important;
		padding: 0 !important;
	}
</style>
