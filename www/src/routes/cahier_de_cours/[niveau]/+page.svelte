<script lang="ts">
    // Récupération du niveau de la page
    import type { PageData } from "./$types";
    import { 
        numero_de_la_page, 
        niveau, 
        nombre_de_pages_a_afficher, 
        nombre_de_pages } from "../../../lib/cahier/store";
    export let data: PageData;

    niveau.set(data.niveau as 3 | 4 | 5 | 6);

    // Composants de la page
    import ZoneCentrale_AfficheurDePages from "$lib/cahier/composants/ZoneCentrale_AfficheurDePages.svelte";

    function touche_pressee(event: KeyboardEvent) {
        switch (event.key) {
            case "p":
                nombre_de_pages_a_afficher.update((n) => n == 1 ? 2 : 1);
                break;
            case "ArrowRight":
                numero_de_la_page.update((n) => {
                    if ($numero_de_la_page < nombre_de_pages($niveau) - 1) {
                        return n + 2;
                    } else {
                        return n;
                    }
                });
                break;
            case "ArrowLeft":
                numero_de_la_page.update((n) => {
                    if ($numero_de_la_page > 0) {
                        return n - 2;
                    } else {
                        return n;
                    }
                });
                break;
        }
    }
</script>

<svelte:window on:keydown={touche_pressee} />

<ZoneCentrale_AfficheurDePages />