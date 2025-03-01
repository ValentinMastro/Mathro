<script lang="ts">
    import type { Component } from "svelte";
    // TODO: depreciated
    import { page as interface_navigateur } from "$app/stores";
    const scroll_jusqua_la_page: number = parseInt(
        $interface_navigateur.url.searchParams.get("page") ?? "1"
    )
        
    import { nombre_de_pages, niveau, taille_page } from "$lib/cahier/store";
    import PageDeCahier from "./PageDeCahier.svelte";

    let { pages } = $props();

    const gap = 8;

    $effect(() => {
        window.scrollTo(0, ($taille_page + 2*gap) * (scroll_jusqua_la_page - 1));
    });
</script>

<div id="scroll" style="gap: {gap}px;">
    {#each pages as page, i}
        {#if i != 0 && i != nombre_de_pages($niveau)}
            {@const PageNumero: Component = page.default }
            <PageDeCahier numero_de_page={i}> 
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