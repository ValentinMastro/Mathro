<script lang="ts">
    import { Paragraphe, type ParagrapheProps } from "./*";
    let { addStyle = "", lignes = 1, children }: ParagrapheProps = $props();
</script>

<Paragraphe 
    {lignes} 
    nom_du_paragraphe="Théorème-Définition" 
    couleur="rouge" 
    addStyle={addStyle + "background: linear-gradient(90deg, rgba(225,0,0,1) 50%, rgba(0,138,0,1) 50%); background-clip: text; color: transparent;"}
    {children}
/>