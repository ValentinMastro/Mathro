<!--
  @component
  ## Formules
  Paragraphe de type « Formules » (rouge).
-->
<script lang="ts">
	import { Paragraphe, type ParagrapheProps } from './*';
	let props: ParagrapheProps = $props();
</script>

<Paragraphe nom_du_paragraphe="Formules :" couleur="rouge" {...props} />
