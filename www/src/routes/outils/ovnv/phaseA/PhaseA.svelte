<script lang="ts">
    import { fade } from "svelte/transition";
    import { etape } from "./stores";
    import type { Etape } from "./stores";

    import Squelette from "./etapes/Squelette.svelte";
    import Matieres from "./etapes/Matieres.svelte";
    import Classes from "./etapes/Classes.svelte";
    import Enseignants from "./etapes/Enseignants.svelte";

    let etape_actuelle: Etape;
    etape.subscribe((valeur) => {
        etape_actuelle = valeur;
    })
</script>

{#if etape_actuelle == "squelette"}
    <div 
        class="page" 
        transition:fade={{delay:250, duration: 500}}
    >
        <Squelette />
    </div>
{:else if etape_actuelle == "matieres"}
    <div 
        class="page" 
        transition:fade={{delay:250, duration: 500}}
    >
        <Matieres />
    </div>
{:else if etape_actuelle == "classes"}
    <div 
        class="page" 
        transition:fade={{delay:250, duration: 500}}
    >
        <Classes />
    </div>
{:else if etape_actuelle == "enseignants"}
    <div 
        class="page" 
        transition:fade={{delay:250, duration: 500}}
    >
        <Enseignants />
    </div>
{/if}

<style>
    .page {
        height: 100vh;
        width: 100vw;
    }
</style>