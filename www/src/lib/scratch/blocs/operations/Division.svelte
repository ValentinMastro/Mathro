<script lang="ts">
    import Bloc from "../Bloc.svelte";
    export let a: number;
    export let b: number;
</script>

<Bloc categorie="opérateurs" type="division">
    {a} / {b}
</Bloc>