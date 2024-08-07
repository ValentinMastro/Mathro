<script lang="ts">
    import { Paragraphe, type ParagrapheProps } from "./*";
    let { lignes = 1, children }: ParagrapheProps = $props();
</script>

<Paragraphe {lignes} nom_du_paragraphe="Exemple" couleur="rgb(0, 0, 138)">
    {@render children()}
</Paragraphe>