<script lang="ts">
    export let numero: number
    export let titre: string
</script>

<div style="width: 100%;">
    <h4 class="souspartie">{String.fromCharCode(numero+96)}) {titre}</h4>
    <slot />
</div>

<style>
    h4.souspartie {
        font-size: large;
        color: green;
    }
</style>