<script lang="ts">
	interface Props {
		addStyle?: string;
		lignes?: number;
		children?: any;
	}
	let { addStyle = '', lignes = 1, children }: Props = $props();
	import { get_tailles } from '$lib/cahier/store.svelte';
</script>

<div class="texte" style="height: {get_tailles().hauteur_ligne_cahier * lignes}px; line-height: {get_tailles().separateur_texte}px; {addStyle}">
	<span style="font-size: {get_tailles().texte}px;">{@render children()}</span>
</div>

<style>
	.texte {
		width: 100%;
		position: relative;
	}
	span {
		position: absolute;
		bottom: 0;
		margin-bottom: -0.7ex;
	}
</style>
