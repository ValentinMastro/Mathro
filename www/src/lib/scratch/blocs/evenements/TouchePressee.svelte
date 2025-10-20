<script lang="ts">
	import Bloc from '../Bloc.svelte';

	export let touche: string;
</script>

<Bloc categorie="évènements" type="touche pressée">
	quand la touche {touche} est pressée
</Bloc>
