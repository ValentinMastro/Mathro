<!--
  @component
  ## TheoremeDefinition
  Paragraphe de type « Théorème-Définition » (rouge).
-->
<script lang="ts">
	import { Paragraphe, type ParagrapheProps } from './*';
	let props: ParagrapheProps = $props();
</script>

<Paragraphe nom_du_paragraphe="Théorème-Définition :" couleur="rouge" {...props} />
