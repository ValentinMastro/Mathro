<script lang="ts">
    import { Paragraphe, type ParagrapheProps } from "./*";

    interface TheoremeProps extends ParagrapheProps {
        nom_du_theoreme?: string,
    }

    let {
        addStyle,
        nom_du_paragraphe = "Théorème",
        nom_du_theoreme = "Théorème",
        couleur = "rouge",
        lignes,
        lignes_vides,
        children
    }: TheoremeProps = $props();
</script>

<Paragraphe 
    {addStyle} 
    nom_du_paragraphe = {nom_du_theoreme}
    {couleur}
    {lignes}
    {lignes_vides}
    {children}
/>