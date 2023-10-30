<script lang="ts">
    import Bloc from "../Bloc.svelte";
    export let nombre: number;
</script>

<Bloc categorie="contrôle" type="répéter">
    répéter {nombre} fois
</Bloc>