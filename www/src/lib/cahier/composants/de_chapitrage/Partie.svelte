<script lang="ts">
    interface Props {
        numero: number,
        titre: string,
    }

    let { numero, titre }: Props = $props();

    import { hauteur_ligne_cahier, taille_titre_de_sections } from "$lib/cahier/store";

    function enChiffresRomains(n: number) {
        switch (n) {
            case 1: return "I";
            case 2: return "II";
            case 3: return "III";
            case 4: return "IV";
            case 5: return "V";
            case 6: return "VI";
            case 7: return "VII";
            case 8: return "VIII";
            case 9: return "IX";
            case 10: return "X";
            default: return n.toString();
        }
    }
</script>

<svelte:options runes={true} />

<div class="partie" style="height: {$hauteur_ligne_cahier}px;">
    <span style="font-size: {$taille_titre_de_sections}px;">
        {enChiffresRomains(numero)} - {titre}
    </span>
</div>


<style>
    .partie {
        width: 100%;
        color: rgb(225, 0, 0);
        position: relative;
    }
    span {
        position: absolute;
        bottom: 0;
        margin-left: 0.8em;
        margin-bottom: -0.25em;
    }
</style>