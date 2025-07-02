<script lang="ts">
	import { Contenu } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Item } from '$lib/cahier/composants/de_cours/*';
</script>

<Contenu>
	<Definition lignes={5}>
		Deux angles sont alternes-internes si, lorsque deux droites sont coupées par une troisième (la sécante) :
		<Item>les angles ont des sommets différents</Item>
		<Item>les angles ne sont pas du même côté de la sécante</Item>
		<Item>les angles sont à l'intérieur des deux droites</Item>
	</Definition>

	<Definition lignes={2}>Deux angles sont complémentaires si la somme de leur mesure est égale à 90°.</Definition>

	<Definition lignes={2}>Deux angles sont supplémentaires si la somme de leur mesure est égale à 180°.</Definition>
</Contenu>
