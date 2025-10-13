<script lang="ts">
	import { type Snippet } from 'svelte';
	let { lignes = 1, children }: { lignes?: number; children?: Snippet } = $props();
</script>

<div class="énoncé" style="--lignes: {lignes};">
	{@render children?.()}
</div>

<style>
	.énoncé {
		font-size: var(--font-size);
		line-height: var(--line-height);
		height: calc(var(--lignes) * var(--carreau));
		width: 100%;
	}
</style>
