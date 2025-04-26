<script lang="ts">
	interface Props {
		bullet?: string;
		bullet_color?: string;
		lignes?: number;
		children?: any;
	}
	let { bullet = '&bullet;', bullet_color = undefined, lignes = 1, children }: Props = $props();
	import { get_tailles } from '$lib/cahier/store.svelte';
</script>

<div class="item" style="height: {get_tailles().hauteur_ligne_cahier * lignes}px;">
	{#if bullet_color}
		<span style="font-size: {get_tailles().texte}px; color: {bullet_color}">{@html bullet}</span>
	{:else}
		<span style="font-size: {get_tailles().texte}px;">{@html bullet}</span>
	{/if}
	<span style="font-size: {get_tailles().texte}px;">{@render children()}</span>
</div>

<style>
	.item {
		margin-left: 1.5em;
		width: 95%;
	}
</style>
