<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { LigneTableau, Tableau } from '$lib/cahier/composants/de_cours/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';
</script>

<Contenu>
	<Partie numero={2} titre="Aires" />
	<LigneVide />

	<Tableau>
		<LigneTableau>
			<td></td>
			<td></td>
			<td></td>
			<td>ha</td>
			<td></td>
			<td>a</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</LigneTableau>
		<LigneTableau>
			<td colspan={2}>km²</td>
			<td colspan={2}>hm²</td>
			<td colspan={2}>dam²</td>
			<td colspan={2}>m²</td>
			<td colspan={2}>dm²</td>
			<td colspan={2}>cm²</td>
			<td colspan={2}>mm²</td>
		</LigneTableau>
	</Tableau>
</Contenu>
