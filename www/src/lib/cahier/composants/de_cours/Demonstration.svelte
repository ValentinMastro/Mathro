<!--
  @component
  ## Demonstration
  Paragraphe de type « Démonstration » (bleu).
-->
<script lang="ts">
	import { Paragraphe, type ParagrapheProps } from './*';
	let props: ParagrapheProps = $props();
</script>

<Paragraphe nom_du_paragraphe="Démonstration :" couleur="bleu" {...props} />
