<script lang="ts">
	import { Paragraphe, type ParagrapheProps } from '$lib/cahier/composants/de_cours/*';
	let { addStyle, nom_du_paragraphe = 'Exercice :', couleur = 'noir', lignes, lignes_vides, children }: ParagrapheProps = $props();
</script>

<Paragraphe {addStyle} {nom_du_paragraphe} {couleur} {lignes} {lignes_vides} {children} />
