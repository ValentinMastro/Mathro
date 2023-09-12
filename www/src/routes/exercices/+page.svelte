<script lang="ts">
	import Exercice from "./Exercice.svelte";
	import { onMount } from "svelte";

	let output: any;

	onMount(() => {
		async function generer_exercice(type: string, niveau: number, id_exercice: number) {
			const response = await fetch('/api', {
				method: 'POST',
				body: JSON.stringify({ type, niveau, id_exercice }),
				headers: {
					'content-type': 'application/json',
				},
			});
			return await response.json()
		}
		
		// test
		output = generer_exercice("vraifaux", 4, 1)
		console.log(output)
	})
</script>

<svelte:window  />

{output}

<style>

</style>
