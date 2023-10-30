<script lang="ts">
	import Bloc from "../Bloc.svelte";

    export let angle: number;
</script>

<Bloc categorie="mouvement" type="tourner_positif">
    tourner ↺ de {angle}°
</Bloc>
