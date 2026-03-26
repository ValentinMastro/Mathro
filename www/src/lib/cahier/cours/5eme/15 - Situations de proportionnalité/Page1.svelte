<script lang="ts">
	import { Chapitre, Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemples, Item } from '$lib/cahier/composants/de_cours/*';
</script>

<Chapitre titre="Situations de proportionnalité" />

<Contenu apres_un_titre>
	<Partie numero={1} titre="Rappels" />
	<Definition lignes={2}>
		Une grandeur est une caractéristique quantifiable, <br />
		souvent associée à une unité de mesure.
	</Definition>
	<Exemples lignes={2}>
		Prix (€), Masse (kg), Durée (h), Distance (km), Volume ({@html '(L)'}), Température (°C)
	</Exemples>
	<Definition lignes={4}>
		Deux grandeurs sont <i>proportionnelles</i> si on passe des valeurs de l'une aux valeurs de l'autre <br />
		en multipliant par un même nombre appelé <i>coefficient de proportionnalité</i>.
	</Definition>
	<Exemples lignes={5}>
		<Item>Le côté et le périmètre d'un carré sont proportionnels (coefficient : 4).</Item>
		<Item lignes={2}>Le nombre d'articles et le prix total sont proportionnels (coefficient : prix unitaire).</Item>
		<Item lignes={2}>L'âge et la taille d'une personne ne sont pas proportionnels.</Item>
	</Exemples>
</Contenu>
