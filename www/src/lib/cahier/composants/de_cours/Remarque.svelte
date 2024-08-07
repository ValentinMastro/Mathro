<script lang="ts">
    import { Paragraphe, type ParagrapheProps } from "./*";
    let { lignes = 1, children }: ParagrapheProps = $props();
</script>

<Paragraphe {lignes} nom_du_paragraphe="Remarque" couleur="black">
    {@render children()}
</Paragraphe>