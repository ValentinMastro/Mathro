<script lang="ts">
    interface Props {
        numero: number,
        titre: string,
        lignes_vides?: number,
    }

    let { numero, titre, lignes_vides = 1 }: Props = $props();

    import { hauteur_ligne_cahier, taille_titre_de_sections } from "$lib/cahier/store";
    import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    function enLettresMinuscules(n: number) {
        return String.fromCharCode(96 + n);
    }
</script>

<svelte:options runes={true} />

<div class="partie" style="height: {$hauteur_ligne_cahier}px;">
    <span style="font-size: {$taille_titre_de_sections*0.9}px;">
        {enLettresMinuscules(numero)}) {titre}
    </span>
</div>
<LigneVide lignes={lignes_vides} />

<style>
    .partie {
        width: 100%;
        color: rgb(0, 138, 0);
        position: relative;
    }
    span {
        position: absolute;
        bottom: 0;
        margin-bottom: -0.25em;
    }
</style>