<script lang="ts">
	import { type Snippet } from 'svelte';
	import LigneVide from '../LigneVide.svelte';
	let {
		numéro = 1,
		lignes = 1,
		lignes_vides = 0,
		children
	}: { numéro: number; lignes?: number; lignes_vides?: number; children?: Snippet } = $props();
</script>

<div class="question" style="--lignes: {lignes};">
	<span>
		Q{numéro}) {@render children?.()}
	</span>
</div>
{#if lignes_vides > 0}
	<LigneVide lignes={lignes_vides} />
{/if}

<style>
	.question {
		font-size: var(--font-size);
		line-height: var(--line-height);
		height: calc(var(--lignes) * var(--carreau));
		width: 100%;

		position: relative;

		span {
			position: absolute;
			bottom: 0;
			margin-bottom: -0.36em;
		}
	}
</style>
