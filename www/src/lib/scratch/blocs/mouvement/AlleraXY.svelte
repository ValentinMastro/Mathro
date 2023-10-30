<script lang="ts">
	import Bloc from "../Bloc.svelte";

    export let x: number;
    export let y: number;
</script>

<Bloc categorie="mouvement" type="alleràxy">
    aller à x: {x} y: {y}
</Bloc>
