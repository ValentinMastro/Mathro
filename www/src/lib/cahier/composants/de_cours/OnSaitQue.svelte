<!--
  @component
  ## OnSaitQue
  Paragraphe de type « On sait que » (bleu) — prémisse d'un raisonnement.
-->
<script lang="ts">
	import { Paragraphe, type ParagrapheProps } from './*';
	let props: ParagrapheProps = $props();
</script>

<Paragraphe nom_du_paragraphe="On sait que :" couleur="bleu" {...props} />
