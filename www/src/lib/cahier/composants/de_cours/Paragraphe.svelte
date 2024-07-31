<script lang="ts">
    interface Props {
        nom_du_paragraphe: string,
        couleur: string,
        lignes: number,
        children?: any,
    }

    let { nom_du_paragraphe, couleur, lignes = 1, children }: Props = $props();

    import { taille_texte, separateur_texte, hauteur_ligne_cahier } from "$lib/cahier/store";
</script>

<svelte:options runes={true} />

<div style="color: {couleur}; font-size: {$taille_texte}px; line-height: {$separateur_texte}px;">
    <div class="titre_de_section" style="height: {$hauteur_ligne_cahier}px;">
        <span>
            {nom_du_paragraphe} :
        </span>
    </div>
    <div class="contenu_de_section" style="height: {$hauteur_ligne_cahier * lignes}px">
        <div>
            {@render children()}
        </div>
    </div>
</div>

<style>
    .titre_de_section {
        width: 100%;
        position: relative;
    }
    .titre_de_section > span {
        position: absolute;
        bottom: 0;
        margin-bottom: -0.13em;
        text-decoration: underline;
    }
    .contenu_de_section {
        width: 100%;
        display: flex;
    }
    .contenu_de_section > div {
        width: 100%;
        align-self: flex-end;
        margin-bottom: -0.7ex;
    }
</style>