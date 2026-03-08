<!--
  @component
  ## PourMieuxComprendre
  Paragraphe de type « Pour mieux comprendre » (bleu).
-->
<script lang="ts">
	import { Paragraphe, type ParagrapheProps } from './*';
	let props: ParagrapheProps = $props();
</script>

<Paragraphe nom_du_paragraphe="Pour mieux comprendre :" couleur="bleu" {...props} />
