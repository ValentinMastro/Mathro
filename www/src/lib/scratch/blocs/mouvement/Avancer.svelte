<script lang="ts">
    import Bloc from "../Bloc.svelte";

    export let distance: number;
</script>

<Bloc categorie="mouvement" type="avancer">
    avancer de {distance} pas
</Bloc>