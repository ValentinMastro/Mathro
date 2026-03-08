<!--
  @component
  ## Item — (extends HTMLDivElement)
  Élément à puce pour listes dans les paragraphes de cours.

  ### Props
  - `bullet?` *string* : symbole HTML à gauche de la ligne *(par défaut : '&bullet;')*
  - `bullet_color?` *string* : couleur du symbole
  - `lignes?` *number* : hauteur en carreaux *(par défaut : 1)*
-->
<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAttributes<HTMLDivElement> & {
		bullet?: string;
		bullet_color?: string;
		lignes?: number;
		children?: Snippet;
	};

	let { bullet = '&bullet;', bullet_color = undefined, lignes = 1, children, ...props }: Props = $props();
</script>

<div id="item" style="--lignes: {lignes};" {...props}>
	{#if bullet_color}
		<span style="color: {bullet_color}">{@html bullet}</span>
	{:else}
		<span>{@html bullet}</span>
	{/if}
	<span>{@render children?.()}</span>
</div>

<style>
	#item {
		margin-left: var(--carreau);
		font-size: var(--font-size);
		line-height: var(--line-height);
		height: calc(var(--lignes) * var(--carreau));
	}
</style>
