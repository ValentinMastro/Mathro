<script lang="ts">
	import { couleur, texte } from '$lib/constitution_classes/donnees/types';
	import type { Classe } from '$lib/constitution_classes/donnees/types';
	export let classe: Classe;
</script>

<div style="display: flex; justify-content: space-evenly;">
	{#each ['LATIN', 'GREC', 'ALLEMAND LV2', 'ESPAGNOL LV2', 'HISPANICA', 'CHAAP'] as option_string}
		{@const option = option_string as 'LATIN' | 'GREC' | 'ALLEMAND LV2' | 'ESPAGNOL LV2' | 'HISPANICA' | 'CHAAP'}
		{#if classe.options[option]}
			<span style="background-color: {couleur(option)};">
				{texte(option)}
			</span>
		{/if}
	{/each}
</div>

<style>
	span {
		padding: 0.5em;
		margin: 0.5em;
		border-radius: 0.5em;
		color: white;
	}
</style>
