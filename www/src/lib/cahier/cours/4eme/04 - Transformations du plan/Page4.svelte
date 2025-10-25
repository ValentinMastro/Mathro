<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Propriete } from '$lib/cahier/composants/de_cours/*';
</script>

<Contenu>
	<Partie numero={4} titre="Propriété de conservation" />
	<Propriete lignes={12}>
		La symétrie axiale, la symétrie centrale et la translation sont des <i>isométries du plan</i>, ce qui signifie que : <br />
		→ la nature des objets est conservée <br />
		<div class="bleu">(Le symétrique d'un carré est un carré.)</div>

		→ les longueurs sont conservées
		<div class="bleu">(le symétrique d'un segment de longueur 5 cm est un segment de longueur 5 cm)</div>

		→ les mesures des angles sont conservées
		<div class="bleu">(le symétrique d'un angle de 90° est un angle de 90°)</div>

		→ les aires sont conservées
		<div class="bleu">(le symétrique d'une figure d'aire de 10 cm² est aussi une figure d'aire de 10 cm²)</div>
	</Propriete>
</Contenu>

<style>
	.bleu {
		color: var(--bleu);
	}
</style>
