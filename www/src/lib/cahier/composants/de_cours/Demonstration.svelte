<script lang="ts">
    import { Paragraphe, type ParagrapheProps } from "./*";
    let { addStyle = "", lignes = 1, children }: ParagrapheProps = $props();
</script>

<Paragraphe {lignes} nom_du_paragraphe="Démonstration" couleur="rgb(0, 0, 138)" {addStyle}>
    {@render children()}
</Paragraphe>