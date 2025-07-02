<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Methode, Item, Remarque } from '$lib/cahier/composants/de_cours/*';
	import { math } from 'mathlifier';
</script>

<Contenu>
	<Partie numero={2} titre="Agrandissements et réductions" />
	<Methode lignes={4}>
		Lors de l'agrandissement ou de la réduction d'une figure, toutes les longueurs sont multipliées par le même coefficient :
		<Item>
			{@html math('> 1')} pour un agrandissement
		</Item>
		<Item>
			{@html math('< 1')} pour une réduction
		</Item>
	</Methode>
	<Remarque>Les mesures des angles sont inchangées.</Remarque>
</Contenu>
