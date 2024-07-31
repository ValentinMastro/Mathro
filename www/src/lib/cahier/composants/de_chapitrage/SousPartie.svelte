<script lang="ts">
    interface Props {
        numero: number,
        titre: string,
    }

    let { numero, titre }: Props = $props();

    import { hauteur_ligne_cahier, taille_titre_de_sections } from "$lib/cahier/store";

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