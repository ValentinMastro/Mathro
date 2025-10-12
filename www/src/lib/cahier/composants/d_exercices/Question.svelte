<script lang="ts">
	import { type Snippet } from 'svelte';
	let { numéro = 1, lignes = 1, children }: { numéro: number; lignes?: number; children?: Snippet } = $props();
</script>

<div class="question" style="--lignes: {lignes};">
	Q{numéro}) {@render children?.()}
</div>

<style>
	.question {
		font-size: var(--font-size);
		line-height: calc(var(--line-height) * 1.5);
		height: calc(var(--lignes) * var(--carreau));
		width: 100%;
	}
</style>
