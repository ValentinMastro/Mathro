<script lang="ts">
	import { Chapitre, Contenu } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemples, Item } from '$lib/cahier/composants/de_cours/*';
	import { math } from 'mathlifier';

	import { SERIE_1, SERIE_3, afficher_serie, effectif_total, moyenne } from './store.svelte';
</script>

<Chapitre titre="Statistiques" />

<Contenu apres_un_titre>
	<Definition>Une série statistique est un ensemble de valeurs non ordonnées.</Definition>
	<Exemples lignes={5}>
		<Item lignes={2}>
			J'ai lancé {effectif_total(SERIE_1)} dés à six faces et j'ai obtenu les valeurs suivantes :<br />
			<center>{@html math(afficher_serie(SERIE_1))}</center>
		</Item>
		<Item lignes={3}>
			J'ai mesuré la taille de {effectif_total(SERIE_3)} élèves de ma classe et j'ai obtenu les valeurs suivantes (en cm) :
			<center>{@html math(afficher_serie(SERIE_3))}</center>
		</Item>
	</Exemples>
</Contenu>
