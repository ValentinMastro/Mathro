<script lang="ts">
	import Bloc from '../Bloc.svelte';

	export let message: string;
</script>

<Bloc categorie="apparence" type="dire">
	dire {message}
</Bloc>
