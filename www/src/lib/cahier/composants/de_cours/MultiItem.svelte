<script lang="ts">
	import { type HTMLAttributes } from 'svelte/elements';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';
	type Props = HTMLAttributes<HTMLDivElement> & {
		colonnes?: number;
		lignes_vides?: number;
	};

	let { colonnes = 1, lignes_vides = 0, children, ...props }: Props = $props();
</script>

<div class="multi" style="--colonnes: {colonnes};" {...props}>
	{@render children?.()}
</div>
{#if lignes_vides > 0}
	<LigneVide lignes={lignes_vides} />
{/if}

<style>
	.multi {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	:global(.multi) > * {
		width: calc(95% / var(--colonnes));
	}
</style>
