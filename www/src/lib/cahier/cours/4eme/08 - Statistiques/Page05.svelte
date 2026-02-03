<script lang="ts">
	import { Contenu, Partie, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Remarque } from '$lib/cahier/composants/de_cours/*';
</script>

<Contenu>
	<Partie numero={2} titre="Diagrammes et graphiques" />
	<SousPartie numero={1} titre="Diagrammes en barres/en bâtons" />
	<Definition lignes={2}>
		Un <i>diagramme en barres</i> permet de représenter des données par des barres de hauteurs proportionnelles.
	</Definition>
	<Remarque>On l'utilise le plus souvent pour comparer des valeurs entre elles.</Remarque>
</Contenu>
