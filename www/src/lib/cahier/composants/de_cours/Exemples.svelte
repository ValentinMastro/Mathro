<script lang="ts">
    import { Paragraphe, type ParagrapheProps } from "./*";
    let {
        addStyle,
        nom_du_paragraphe = "Exemples",
        couleur = "bleu",
        lignes,
        lignes_vides,
        children
    }: ParagrapheProps = $props();
</script>

<Paragraphe 
    {addStyle} 
    {nom_du_paragraphe} 
    {couleur}
    {lignes}
    {lignes_vides}
    {children}
/>