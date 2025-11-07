<script lang="ts">
	import { page as interface_navigateur } from '$app/state';
	import { get_taille_page, PAGES, page_state } from '$lib/cahier/store.svelte';
	import PageDeCahier from './PageDeCahier.svelte';
	
	const numero_de_page_dans_la_barre_URL = interface_navigateur.url.searchParams.get('page');
	const scroll_jusqua_la_page: number = numero_de_page_dans_la_barre_URL == null ? page_state.numero_de_la_page : parseInt(numero_de_page_dans_la_barre_URL);
	const gap = 8;

	$effect(() => {
		window.scrollTo(0, (get_taille_page() + 2 * gap) * (scroll_jusqua_la_page - 1));
	});
</script>

<div id="scroll" style="gap: {gap}px;">
	{#each PAGES.liste as { composant: PageNumero, nom_fichier }, i}
		{#if i != 0}
			<PageDeCahier numero_de_page={i} {nom_fichier} onmouseenter={() => page_state.numero_de_la_page = i} >
				<PageNumero />
			</PageDeCahier>
		{/if}
		<div class="fin_de_page"></div>
	{/each}
</div>

<style>
	#scroll {
		display: flex;
		flex-direction: column;
		overflow-y: scroll;
		width: 100%;
		height: fit-content;
		align-items: center;
	}
	.fin_de_page {
		height: 0px;
		width: 100%;
	}

	@media print {
		#scroll {
			gap: 0;
		}
		.fin_de_page {
			page-break-after: always;
		}
	}
</style>
