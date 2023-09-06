<script lang="ts">
    export let numero: number
    export let titre: string
</script>

<h2 class="titre">Chapitre {numero}<br>{titre}</h2>
<slot />

<style>
    * {
        font-family: Marianne;
    }
    h2.titre {
        color: rgb(225, 0, 0);
        font-size: xx-large;
        font-weight: bold;
    }
</style>