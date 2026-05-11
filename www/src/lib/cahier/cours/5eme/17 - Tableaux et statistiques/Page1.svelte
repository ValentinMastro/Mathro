<script lang="ts">
	import { Chapitre, Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definitions, Exemple, Item } from '$lib/cahier/composants/de_cours/*';
</script>

<Chapitre titre="Tableaux et statistiques" />

<Contenu apres_un_titre>
	<Partie numero={1} titre="Vocabulaire" />
	<Definitions lignes={4}>
		<Item>Une <i>population</i> est l'ensemble des individus étudiés.</Item>
		<Item>Un <i>individu</i> est chaque élément de la population.</Item>
		<Item lignes={2}>Un <i>caractère</i> est la grandeur ou la qualité étudiée sur chaque individu.</Item>
	</Definitions>
	<Exemple lignes={4}>
		<Item><b>Population</b> : les 30 élèves d'une classe de 5ème.</Item>
		<Item><b>Individu</b> : chaque élève.</Item>
		<Item lignes={2}><b>Caractère</b> : la note obtenue au contrôle de mathématiques (quantitatif)</Item>
	</Exemple>
</Contenu>
