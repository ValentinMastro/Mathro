<script lang="ts">
    interface Props {
        lignes?: number,
        children?: any,
    }
    let { lignes = 1, children }: Props = $props();
    import Paragraphe from "$lib/cahier/composants/de_cours/Paragraphe.svelte";
</script>

<Paragraphe {lignes} nom_du_paragraphe="Définition" couleur="rgb(0, 138, 0)">
    {@render children()}
</Paragraphe>