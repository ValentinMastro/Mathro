<script lang="ts">
    import { Contenu } from "$lib/cahier/composants/de_chapitrage/*";
    import { Definition, Propriete, Schema } from "$lib/cahier/composants/de_cours/*";
    import LigneVide from "$lib/cahier/composants/LigneVide.svelte";
</script>

<Contenu>
    <Definition>
        Un triangle équilatéral possède 3 côtés de même longueur.
    </Definition>
    <Schema lignes={5}>
        {#snippet svg()}
            <defs>
                <polygon id="triangle_équilatéral" points="200,800 800,800 {200+600*Math.cos(Math.PI/3)},{800-600*Math.sin(Math.PI/3)}" />
            </defs>
            <use href="#triangle_équilatéral" stroke="black" fill="none" stroke-width="8" />
        {/snippet}
    </Schema>
</Contenu>