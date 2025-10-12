<script lang="ts">
	import { page as navigateur } from '$app/state';
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();

	import { importer_cours } from '$lib/cahier/importation_pages';
	import { exporterToutesLesPagesEnPDF } from '$lib/cahier/impression';
	import { page_state, PAGES, NOMBRE_DE_PAGES } from '$lib/cahier/store.svelte';
	import ZoneCentrale from '$lib/cahier/composants/ZoneCentrale.svelte';

	page_state.niveau = data.niveau as 3 | 4 | 5 | 6;
	PAGES.liste = importer_cours(page_state.niveau);

	function changement_de_page(diff: number) {
		if (page_state.numero_de_la_page + diff >= 0 && page_state.numero_de_la_page + diff <= NOMBRE_DE_PAGES() - 2) {
			page_state.numero_de_la_page += diff;
		}
	}

	function onkeydown(event: KeyboardEvent) {
		if ((event.ctrlKey || event.metaKey) && event.code === 'KeyP') {
			event.preventDefault();
			event.stopPropagation();
			exporterToutesLesPagesEnPDF();
			return;
		}

		switch (event.key) {
			case 'm':
				page_state.plein_ecran = !page_state.plein_ecran;
				break;
			case 'z':
				page_state.zoom_page = !page_state.zoom_page;
				break;
			case 's':
				page_state.afficher_fond_seyes = !page_state.afficher_fond_seyes;
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

	function onbeforeprint() {
		alert('Utilisez le bouton Export PDF de l’appli, pas l’impression du navigateur.');
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

<svelte:window {onbeforeprint} {onkeydown} />

<svelte:head>
	<title>
		Cahier de cours - {page_state.niveau}ème
	</title>
</svelte:head>

<ZoneCentrale />
