<script lang="ts">
	import { page_state, taille_page, taille_titre } from '$lib/cahier/store.svelte';

	let composant: HTMLDivElement;

	$effect(() => {
		const resizeObserver = new ResizeObserver(() => {
			if (composant) {
				taille_page.set(Number(composant.clientHeight));
			}
		});
		resizeObserver.observe(composant);
	});
</script>

<div id="titre" bind:this={composant} style="font-size: {$taille_titre}px">
	<div>Cahier de cours</div>
	<div>Mathématiques</div>
	<div>{page_state.niveau}ème</div>
	<div>2024-2025</div>
</div>

<style>
	#titre {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
	}
</style>
