<script lang="ts">
	import Bloc from '../Bloc.svelte';

	export let angle: number;
</script>

<Bloc categorie="mouvement" type="s'orienter">
	s'orienter à {angle}°
</Bloc>
