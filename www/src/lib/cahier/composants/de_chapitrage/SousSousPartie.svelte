<script lang="ts">
    interface Props {
        numero: number,
        titre: string,
    }

    let { numero, titre }: Props = $props();

    import { hauteur_ligne_cahier, taille_titre_de_sections } from "$lib/cahier/store";

    function enChiffresRomains(n: number) {
        switch (n) {
            case 1: return "i";
            case 2: return "ii";
            case 3: return "iii";
            case 4: return "iv";
            case 5: return "v";
            case 6: return "vi";
            case 7: return "vii";
            case 8: return "viii";
            case 9: return "ix";
            case 10: return "x";
            default: return n.toString();
        }
    }
</script>

<svelte:options runes={true} />

<div class="partie" style="height: {$hauteur_ligne_cahier}px;">
    <span style="font-size: {$taille_titre_de_sections*0.85}px;">
        {enChiffresRomains(numero)}) {titre}
    </span>
</div>


<style>
    .partie {
        width: 100%;
        color: rgb(0, 0, 138);
        position: relative;
    }
    span {
        position: absolute;
        bottom: 0;
        margin-bottom: -0.25em;
    }
</style>