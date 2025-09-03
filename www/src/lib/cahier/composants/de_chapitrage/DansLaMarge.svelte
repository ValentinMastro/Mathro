<script lang="ts">
	import LigneVide from '../LigneVide.svelte';

	interface Props {
		apres_un_titre?: boolean;
		lignes_vides?: number;
		children?: any;
	}

	let { apres_un_titre = false, lignes_vides = 0, children }: Props = $props();
</script>

<div id="marge" class={apres_un_titre ? 'apres_un_titre' : 'pas_de_titre'}>
	{#if lignes_vides > 0}
		<LigneVide lignes={lignes_vides} />
	{/if}
	{@render children()}
</div>

<style>
	#marge {
		position: absolute;
		left: 0%;
		width: 20%;
	}

	.pas_de_titre {
		--top: 8.6%;
		top: var(--top);
		height: calc(92.18% - var(--top));
	}

	.apres_un_titre {
		top: 14.1%;
		height: 78.08%;
	}
</style>
