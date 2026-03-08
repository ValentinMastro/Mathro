<!--
  @component
  ## Paragraphe
  Composant de base pour les paragraphes de cours.
  Affiche un titre coloré souligné suivi d'un contenu dimensionné en carreaux.

  ### Props
  - `nom_du_paragraphe?` *string* : titre du paragraphe *(par défaut : 'Paragraphe :')*
  - `couleur?` *couleur* : couleur du texte — 'bleu', 'rouge', 'vert' ou 'noir' *(par défaut : 'noir')*
  - `lignes?` *number* : hauteur du contenu en carreaux *(par défaut : 1)*
  - `lignes_vides?` *number* : nombre de lignes vides après le contenu
  - `addStyleNomParagraphe?` *string* : styles CSS additionnels pour le titre
  - `addStyle?` *string* : styles CSS additionnels pour le contenu
-->
<script lang="ts">
	import { type ParagrapheProps } from './*';

	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';

	let {
		addStyleNomParagraphe = '',
		addStyle = '',
		nom_du_paragraphe = 'Paragraphe :',
		couleur = 'noir',
		lignes = 1,
		lignes_vides = Number.isInteger(lignes) ? 1 : Math.ceil(lignes) - lignes,
		children
	}: ParagrapheProps = $props();
</script>

<div class="conteneur" style="color: var(--{couleur});">
	{#if nom_du_paragraphe != ''}
		<div class="titre_de_section">
			<span style={'text-decoration: underline;' + addStyleNomParagraphe}>
				{@html nom_du_paragraphe}
			</span>
		</div>
	{/if}
	{#if children}
		<div class="contenu_de_section" style="height: calc({lignes} * var(--carreau));">
			<div style={addStyle}>
				{@render children?.()}
			</div>
		</div>
	{/if}
</div>
<LigneVide lignes={lignes_vides} />

<style>
	.conteneur {
		font-size: var(--font-size);
		line-height: var(--line-height);
		.titre_de_section {
			width: 100%;
			position: relative;
			height: var(--carreau);
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
