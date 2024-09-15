<script lang="ts">
    import { Contenu, Partie } from "$lib/cahier/composants/de_chapitrage/*";
    import { Definition, Notation, Exemples, Schema, Item, Exemple } from "$lib/cahier/composants/de_cours/*";
    import LigneVide from "$lib/cahier/composants/LigneVide.svelte";
	import { math } from "mathlifier";
</script>

<Contenu>
    <Partie numero={2} titre="Alignement et appartenance" />
        <LigneVide />
        <Notation lignes={2}>
            Si le point M est sur la droite (AB), on note {@html math("\\text{M} \\in (\\text{AB})")}.<br>
            Si le point A n'est pas sur le segment [BC], on note {@html math("\\text{A} \\notin [\\text{BC}]")}.
        </Notation>
        <Exemples></Exemples>
        <Schema lignes={5} aspectRatioSVG={4}>
            {#snippet svg()}
                <line x1="200" y1="200" x2="3600" y2="800" stroke="black" stroke-width="10"></line>
                <line x1="300" x2="300" y1="170" y2="270" stroke="black" stroke-width="10"></line>
                <line x1="2500" x2="2500" y1="570" y2="670" stroke="black" stroke-width="10"></line>
                <!-- line qui passe par 2500 600 -->
                <line x1="2500" x2="3000" y1="600" y2="600" stroke="black" stroke-width="10"></line>
            {/snippet}
        </Schema>
</Contenu>