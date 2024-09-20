<!-- Pastille de couleur indiquant la catégorie du chapitre -->
<script lang="ts">
    import { taille_chapitre } from "$lib/cahier/store";
    import { type Chapitre, couleur_de_la_categorie, categories_visibles } from "$lib/cahier/contenu/sommaires";

    let { chapitre }: { chapitre: Chapitre } = $props();
    import { math } from "mathlifier";
</script>

{#snippet pastille(couleur: string)}
    <span style="color: {couleur};" >
        {@html math("\\Large\\bullet")}
    </span>
{/snippet}

{#each chapitre.categories as categorie}
    {@render pastille(couleur_de_la_categorie(categorie))}
{/each}

<style>
    span {
        user-select: none;
    }
</style>