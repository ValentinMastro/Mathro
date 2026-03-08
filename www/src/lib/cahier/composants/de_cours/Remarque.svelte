<!--
  @component
  ## Remarque
  Paragraphe de type « Remarque » (noir).
-->
<script lang="ts">
	import { Paragraphe, type ParagrapheProps } from './*';
	let props: ParagrapheProps = $props();
</script>

<Paragraphe nom_du_paragraphe="Remarque :" couleur="noir" {...props} />
