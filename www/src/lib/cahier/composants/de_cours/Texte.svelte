<script lang="ts">
	import { Paragraphe, type ParagrapheProps } from './*';

	let { ...props }: Omit<ParagrapheProps, 'nom_du_paragraphe'> = $props();
</script>

<Paragraphe nom_du_paragraphe="" {...props} />
