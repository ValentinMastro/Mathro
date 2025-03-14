<script lang="ts">
    import { Texte, Paragraphe, type ParagrapheProps } from "./*";
    let { addStyle = "", lignes = 1, children }: ParagrapheProps = $props();
</script>

{#if children === undefined}
    <Texte>
        <span id="illustration">
            Illustration :
        </span>
    </Texte>
{:else}
    <Paragraphe {lignes} nom_du_paragraphe="Illustration" couleur="black" {addStyle}>
        {@render children()}
    </Paragraphe>
{/if}

<style>
    #illustration {
        color: black;
        text-decoration: underline;
    }
</style>