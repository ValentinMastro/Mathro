<script lang="ts">
    import { Paragraphe, type ParagrapheProps } from "./*";
    let { addStyle = "", lignes = 1, children }: ParagrapheProps = $props();
</script>

<Paragraphe {lignes} nom_du_paragraphe="Convention" couleur="rgb(225, 0, 0)" {addStyle}>
    {@render children()}
</Paragraphe>