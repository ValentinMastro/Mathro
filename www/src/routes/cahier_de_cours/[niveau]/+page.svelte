<script lang="ts">
    // Récupération du niveau de la page
    import type { PageData } from "./$types";
    export let data: PageData;

    import { nombre_de_pages, niveau, numero_de_la_page, nombre_de_pages_a_afficher } from "$lib/cahier/store";

    import ZoneCentraleAfficheurDePages from "$lib/cahier/composants/ZoneCentrale_AfficheurDePages.svelte";

    function changement_de_page(diff: number) {
        numero_de_la_page.update((n) => {
            if ($numero_de_la_page + diff >= 0 && $numero_de_la_page + diff <= nombre_de_pages($niveau) - ($nombre_de_pages_a_afficher - 1) ) {
                return n + diff;
            } else {
                return n;
            }
        });
    }

    function touche_pressee(event: KeyboardEvent) {
        switch (event.key) {
            case "p":
                nombre_de_pages_a_afficher.set(($nombre_de_pages_a_afficher == 1) ? 2 : 1);
                break;
            case "ArrowRight":
                if ($nombre_de_pages_a_afficher == 1) {
                    changement_de_page(1);
                } else {
                    changement_de_page(2);
                }
                break;
            case "ArrowLeft":
                if ($nombre_de_pages_a_afficher == 1) {
                    changement_de_page(-1);
                } else {
                    changement_de_page(-2);
                }
                break;
            case "ArrowUp":
                changement_de_page(1);
                break;
            case "ArrowDown":
                changement_de_page(-1);
                break;
        }
    }
</script>

<svelte:window on:keydown={touche_pressee} />

<ZoneCentraleAfficheurDePages />