<script lang="ts">
    import { onMount } from "svelte";

    import type { PageData } from "./$types";
    export let data: PageData;

    import { nombre_de_pages, niveau, numero_de_la_page, plein_ecran, sur_mobile } from "$lib/cahier/store";
    import ZoneCentrale from "$lib/cahier/composants/ZoneCentrale.svelte";
    
    niveau.set(data.niveau as 3 | 4 | 5 | 6);

    function changement_de_page(diff: number) {
        numero_de_la_page.update((n) => {
            if ($numero_de_la_page + diff >= 0 && $numero_de_la_page + diff <= nombre_de_pages($niveau) - 1) {
                return n + diff;
            } else {
                return n;
            }
        });
    }
    
    onMount(() => {
        function detection_mobile(): boolean {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent);
        }

        function detection_mode_portrait(): boolean {
            return window.innerHeight > window.innerWidth;
        }

        if (detection_mobile()) {
            plein_ecran.set(true);
            sur_mobile.set(true);
        }
        if (detection_mode_portrait()) {
            plein_ecran.set(true);
        }
    });

    function touche_pressee(event: KeyboardEvent) {
        switch (event.key) {
            case "m":
                plein_ecran.update((plein_ecran) => !plein_ecran);
                break;
            case "ArrowRight":
                changement_de_page(2);
                break;
            case "ArrowLeft":
                changement_de_page(-2);
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

<svelte:head>
    <title>
        Cahier de cours - {$niveau}ème
    </title>
</svelte:head>

<ZoneCentrale />

<style>
    :global(.katex) {
        font-size: 1.1em;
    }
    :global(.mathlifier-display) {
        margin-bottom: -2.4ex;
    }
</style>