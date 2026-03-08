<!--
  @component
  ## Or
  Paragraphe de type « Or » (bleu) — prémisse d'un raisonnement.
-->
<script lang="ts">
	import { Paragraphe, type ParagrapheProps } from './*';
	let props: ParagrapheProps = $props();
</script>

<Paragraphe nom_du_paragraphe="Or :" couleur="bleu" {...props} />
