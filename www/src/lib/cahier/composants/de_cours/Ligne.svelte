<script lang="ts">
	interface Props {
		lignes?: number;
		couleur?: 'bleu' | 'rouge' | 'vert' | 'noir';
		children?: any;
		addStyle?: string;
	}
	let { lignes = 1, couleur = 'noir', children, addStyle }: Props = $props();
	import { get_tailles } from '$lib/cahier/store.svelte';
</script>

<div
	class="texte"
	style="
	    color: var(--{couleur});
		height: {get_tailles().hauteur_ligne_cahier * lignes}px;
		line-height: {get_tailles().separateur_texte}px;
		{addStyle}
		"
>
	{@render children()}
</div>

<style>
	.texte {
		width: 100%;
		position: relative;
	}
</style>
