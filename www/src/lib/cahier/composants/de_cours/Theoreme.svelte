<script lang="ts">
    interface Props {
        nom_du_theoreme?: string,
        lignes?: number,
        children?: any,
    }
    let { nom_du_theoreme = "Théorème", lignes = 1, children }: Props = $props();
    import Paragraphe from "$lib/cahier/composants/de_cours/Paragraphe.svelte";
</script>

<Paragraphe {lignes} nom_du_paragraphe={nom_du_theoreme} couleur="rgb(225, 0, 0)">
    {@render children()}
</Paragraphe>