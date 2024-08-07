<script lang="ts">
    import { Paragraphe, type ParagrapheProps } from "./*";
    let { lignes = 1, children }: ParagrapheProps = $props();
</script>

<Paragraphe {lignes} nom_du_paragraphe="Notation" couleur="black">
    {@render children()}
</Paragraphe>