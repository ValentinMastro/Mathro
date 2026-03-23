<script lang="ts">
	import { Chapitre, Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definitions, Exemple, Item } from '$lib/cahier/composants/de_cours/*';
</script>

<Chapitre titre="Tableaux et statistiques" />

<Contenu apres_un_titre>
	<Partie numero={1} titre="Vocabulaire" />
	<Definitions lignes={5}>
		<Item>Une <i>population</i> est l'ensemble des individus étudiés.</Item>
		<Item>Un <i>individu</i> est chaque élément de la population.</Item>
		<Item>Un <i>caractère</i> est la grandeur ou la qualité étudiée sur chaque individu.</Item>
		<Item lignes={2}>Les <i>modalités</i> sont les différentes valeurs que peut prendre le caractère.</Item>
	</Definitions>
	<Exemple lignes={5}>
		<b>Population</b> : les 30 élèves d'une classe de 5ème. <br />
		<b>Individu</b> : chaque élève. <br />
		<b>Caractère</b> : la note obtenue au contrôle de mathématiques. <br />
		<b>Modalités</b> : 5, 8, 10, 12, 14, 15, 16, 18, 20.
	</Exemple>
</Contenu>
