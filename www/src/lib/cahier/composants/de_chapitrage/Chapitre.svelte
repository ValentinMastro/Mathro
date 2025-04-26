<script lang="ts">
	interface Props {
		titre: string;
		numero_chapitre?: number;
	}
	import { sommaire } from '$lib/cahier/contenu/sommaires';
	import { page_state, get_tailles } from '$lib/cahier/store.svelte';

	let { titre, numero_chapitre = sommaire(page_state.niveau).findIndex((chapitre) => chapitre.titre == titre) + 1 }: Props = $props();

	sommaire(page_state.niveau);
</script>

<div class="chapitre" style="font-size: {get_tailles().chapitre}px; line-height: {get_tailles().separateur_chapitre}px;">
	<div id="numero">Chapitre {numero_chapitre}</div>
	<div id="titre">{titre}</div>
</div>

<style>
	.chapitre {
		color: rgb(225, 0, 0);
	}
	#numero {
		position: absolute;
		top: 9.15%;
		left: 2%;
	}
	#titre {
		position: absolute;
		top: 9.15%;
		left: 22%;
		text-wrap: wrap;
	}
</style>
