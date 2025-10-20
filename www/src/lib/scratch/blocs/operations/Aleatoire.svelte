<script lang="ts">
	import Bloc from '../Bloc.svelte';
	export let a: number;
	export let b: number;
</script>

<Bloc categorie="opérateurs" type="aleatoire">
	Nombre aléatoire entre {a} et {b}
</Bloc>
