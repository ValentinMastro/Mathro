<script lang="ts">
	import { Paragraphe, type ParagrapheProps } from './*';
	let { nom_du_theoreme = 'Théorème :', ...props }: ParagrapheProps & { nom_du_theoreme?: string } = $props();
</script>

<Paragraphe nom_du_paragraphe={nom_du_theoreme} couleur="rouge" {...props} />
