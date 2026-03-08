<!--
  @component
  ## MultiItem — (extends HTMLDivElement)
  Conteneur multi-colonnes pour disposer des items côte à côte.

  ### Props
  - `colonnes?` *number* : nombre de colonnes *(par défaut : 1)*
  - `lignes_vides?` *number* : nombre de lignes vides après le conteneur *(par défaut : 0)*
-->
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
