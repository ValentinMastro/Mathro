<!--
  @component
  ## Donc
  Paragraphe de type « Donc » (bleu) — conclusion d'un raisonnement.
-->
<script lang="ts">
	import { Paragraphe, type ParagrapheProps } from './*';
	let props: ParagrapheProps = $props();
</script>

<Paragraphe nom_du_paragraphe="Donc :" couleur="bleu" {...props} />
