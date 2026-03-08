<!--
  @component
  ## Definitions
  Paragraphe de type « Définitions » (vert).
-->
<script lang="ts">
	import { Paragraphe, type ParagrapheProps } from './*';
	let props: ParagrapheProps = $props();
</script>

<Paragraphe nom_du_paragraphe="Définitions :" couleur="vert" {...props} />
