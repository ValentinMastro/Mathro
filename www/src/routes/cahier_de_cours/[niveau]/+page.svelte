<script lang="ts">
	import { page as navigateur } from '$app/state';
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();

	import { page_state } from '$lib/cahier/store.svelte';
	import ZoneCentrale from '$lib/cahier/composants/ZoneCentrale.svelte';

	page_state.niveau = data.niveau as 3 | 4 | 5 | 6;

	function nombre_de_pages(niveau: 3 | 4 | 5 | 6): number {
		switch (niveau) {
			case 3:
				return 0;
			case 4:
				return Object.entries(import.meta.glob('$lib/cahier/{composants/{Page0,PageDeGarde,sommaire/Sommaire},contenu/4eme/*/*}.svelte')).length;
			case 5:
				return Object.entries(import.meta.glob('$lib/cahier/{composants/{Page0,PageDeGarde,sommaire/Sommaire},contenu/5eme/*/*}.svelte')).length;
			case 6:
				return Object.entries(import.meta.glob('$lib/cahier/{composants/{Page0,PageDeGarde,sommaire/Sommaire},contenu/6eme/*/*}.svelte')).length;
		}
	}

	function changement_de_page(diff: number) {
		if (page_state.numero_de_la_page + diff >= 0 && page_state.numero_de_la_page + diff <= nombre_de_pages(page_state.niveau) - 2) {
			page_state.numero_de_la_page += diff;
		}
	}

	function touche_pressee(event: KeyboardEvent) {
		switch (event.key) {
			case 'm':
				page_state.plein_ecran = !page_state.plein_ecran;
				break;
			case 'z':
				page_state.zoom_page = !page_state.zoom_page;
				break;
			case 'ArrowRight':
				changement_de_page(2);
				break;
			case 'ArrowLeft':
				changement_de_page(-2);
				break;
			case 'ArrowUp':
				changement_de_page(1);
				break;
			case 'ArrowDown':
				changement_de_page(-1);
				break;
		}
	}

	$effect(() => {
		const on_est_sur_mobile: boolean = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent);
		const on_est_en_mode_portrait: boolean = window.innerHeight > window.innerWidth; // aspect_ratio < 1 ?
		const on_demande_le_plein_ecran: boolean = navigateur.url.searchParams.get('plein_ecran') !== null;

		if (on_est_sur_mobile) {
			page_state.plein_ecran = true;
			page_state.sur_mobile = true;
		}
		if (on_est_en_mode_portrait || on_demande_le_plein_ecran) {
			page_state.plein_ecran = true;
		}

		page_state.numero_de_la_page = parseInt(navigateur.url.searchParams.get('page') ?? '0');
	});
</script>

<svelte:window on:keydown={touche_pressee} />

<svelte:head>
	<title>
		Cahier de cours - {page_state.niveau}ème
	</title>
</svelte:head>

<ZoneCentrale />
