<!-- Pastille de couleur indiquant la catégorie du chapitre -->
<script lang="ts">
	import { type Chapitre, couleur_de_la_categorie } from '$lib/cahier/contenu/sommaires';
	let { chapitre }: { chapitre: Chapitre } = $props();
	import { math } from 'mathlifier';
</script>

{#each chapitre.catégories as categorie}
	<span style="color: {couleur_de_la_categorie(categorie)}; user-select: none;">
		{@html math('\\large\\blacksquare')}
	</span>
{/each}
