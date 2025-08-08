<script lang="ts">
	import type { Snippet } from 'svelte';
	interface Props {
		bullet?: string;
		bullet_color?: string;
		lignes?: number;
		children?: Snippet;
	}
	let { bullet = '&bullet;', bullet_color = undefined, lignes = 1, children }: Props = $props();
</script>

<div class="item" style="--lignes: {lignes};">
	{#if bullet_color}
		<span style="color: {bullet_color}">{@html bullet}</span>
	{:else}
		<span>{@html bullet}</span>
	{/if}
	<span>{@render children?.()}</span>
</div>

<style>
	.item {
		margin-left: 1.5em;
		width: 95%;
		font-size: var(--font-size);
		line-height: var(--line-height);
		height: calc(var(--lignes) * var(--carreau));
	}
</style>
