<script lang="ts">
	import { get_taille_page } from '$lib/cahier/store.svelte';
	type Props = {
		afficher_bulle: boolean;
		position_bulle: { x: number; y: number };
		objectifs: string[];
		titre?: boolean;
	};
	let { afficher_bulle, position_bulle, objectifs, titre = false }: Props = $props();

	let position = $derived(titre ? position_bulle.x : position_bulle.x - 0.55 * get_taille_page());
</script>

{#if afficher_bulle}
	<div class="bulle-objectifs" style="top: {position_bulle.y}px; left: {position}px">
		<ul class="liste_objectifs">
			{#each objectifs as objectif}
				<li class="objectif">{objectif}</li>
			{/each}
		</ul>
	</div>
{/if}

<style>
	.bulle-objectifs {
		position: fixed;
		background: white;
		border: 1px solid #ccc;
		box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
		border-radius: 0.5em;
		font-size: calc(var(--taille-page) / 70);
		min-width: calc(var(--taille-page) / 2);
		max-width: calc(var(--taille-page) / 2);
		z-index: 1000;
		pointer-events: none;
	}

	.objectif {
		text-align: left;
		font-size: calc(var(--taille-page) / 70);
		line-height: calc(var(--taille-page) / 50);
	}
</style>
