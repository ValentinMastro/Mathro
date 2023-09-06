<script lang="ts">
    export let numero: number
    export let titre: string
</script>

<h4 class="souspartie">{String.fromCharCode(numero+96)}) {titre}</h4>
<slot />

<style>
    h4.souspartie {
        font-size: large;
        color: green;
    }
</style>