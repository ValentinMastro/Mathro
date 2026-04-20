<script lang="ts">
	import type { PageData } from './$types';
	import { page_state } from '$lib/cahier/store.svelte';

	let { data }: { data: PageData } = $props();

	$effect.pre(() => {
		page_state.niveau = data.niveau;
	});

	const composants = import.meta.glob('$lib/progression/*/Progression.svelte', { eager: true }) as Record<
		string,
		{ default: typeof import('svelte').SvelteComponent }
	>;

	const Progression = $derived(composants[`/src/lib/progression/${data.niveau}eme/Progression.svelte`]?.default);
</script>

<svelte:head>
	<title>Progression — {data.niveau}ème</title>
</svelte:head>

{#if Progression}
	<Progression />
{/if}
