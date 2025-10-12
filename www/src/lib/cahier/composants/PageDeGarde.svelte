<script lang="ts">
	import { page_state, set_taille_page } from '$lib/cahier/store.svelte';

	let composant: HTMLDivElement;

	$effect(() => {
		const resizeObserver = new ResizeObserver(() => {
			if (composant) {
				set_taille_page(Number(composant.clientHeight));
			}
		});
		resizeObserver.observe(composant);
	});
</script>

<div id="titre" bind:this={composant}>
	<div>Cahier {page_state.type}</div>
	<div>Mathématiques</div>
	<div>{page_state.niveau}ème</div>
	<div>2025-2026</div>
</div>

<style>
	#titre {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
		font-size: calc(var(--font-size) * 3.5);
	}
</style>
