<script lang="ts">
    import { Paragraphe, type ParagrapheProps } from "./*";
    let {
        addStyle,
        nom_du_paragraphe = "Méthode",
        couleur = "rouge",
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