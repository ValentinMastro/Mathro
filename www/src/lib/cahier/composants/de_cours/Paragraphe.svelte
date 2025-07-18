<script lang="ts">
	import { Texte, type ParagrapheProps } from './*';

	import { get_tailles } from '$lib/cahier/store.svelte';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';

	let {
		addStyle = '',
		nom_du_paragraphe = 'Paragraphe',
		couleur = 'noir',
		lignes = 1,
		lignes_vides = Number.isInteger(lignes) ? 1 : Math.ceil(lignes) - lignes,
		children
	}: ParagrapheProps = $props();
</script>

{#if children == undefined}
	<Texte>
		<span id="no_child" style="color: var(--{couleur})">
			{nom_du_paragraphe} :
		</span>
	</Texte>
{:else}
	<div class="conteneur" style="color: var(--{couleur});">
		<div class="titre_de_section">
			<span>
				{nom_du_paragraphe} :
			</span>
		</div>
		<div class="contenu_de_section" style="height: calc({lignes} * var(--hauteur-ligne-cahier));">
			<div style={addStyle}>
				{@render children()}
			</div>
		</div>
	</div>
	<LigneVide lignes={lignes_vides} />
{/if}

<style>
	span#no_child {
		text-decoration: underline;
	}
	.conteneur {
		font-size: var(--font-size);
		line-height: var(--line-height);
		.titre_de_section {
			width: 100%;
			position: relative;
			height: var(--hauteur-ligne-cahier);
			span {
				position: absolute;
				bottom: 0;
				margin-bottom: -0.13em;
				text-decoration: underline;
			}
		}
		.contenu_de_section {
			width: 100%;
			display: flex;
			div {
				width: 100%;
				align-self: flex-end;
				margin-bottom: -0.7ex;
			}
		}
	}
</style>
