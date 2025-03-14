<script lang="ts">
    import { Paragraphe, type ParagrapheProps } from "./*";
    let { addStyle = "", lignes = 1, children }: ParagrapheProps = $props();
</script>

<Paragraphe {lignes} nom_du_paragraphe="Définitions" couleur="rgb(0, 138, 0)" {addStyle}>
    {@render children()}
</Paragraphe>