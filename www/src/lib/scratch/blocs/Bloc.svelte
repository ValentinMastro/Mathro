<script lang="ts">
    export let categorie: string;
    export const type: string = "none";

    let backgroundColor: string;
    switch (categorie) {
        case "mouvement":
            backgroundColor = "blue";
            break;
        case "apparence":
            backgroundColor = "purple";
            break;
        case "évènements":
            backgroundColor = "yellow";
            break;
        case "contrôle":
            backgroundColor = "orange";
            break;
        case "opérateurs":
            backgroundColor = "green";
            break;
        default:
            backgroundColor = "black";
    }
</script>

<div id="bloc" style="background-color: {backgroundColor}">
    <slot />
</div>

<style>
    #bloc {
        height: 35px;
    }
</style>


