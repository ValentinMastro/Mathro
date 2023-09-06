<script lang="ts">
    export let titre: string
</script>

<div>
    <u>{titre} :</u><br />
    <slot />
</div>

<style>
    div {
        color: red;
    }
</style>