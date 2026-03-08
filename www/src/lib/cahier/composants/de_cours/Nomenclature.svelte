<!--
  @component
  ## Nomenclature
  Paragraphe de type « Nomenclature » (noir).
-->
<script lang="ts">
	import { Paragraphe, type ParagrapheProps } from './*';
	let props: ParagrapheProps = $props();
</script>

<Paragraphe nom_du_paragraphe="Nomenclature :" couleur="noir" {...props} />
