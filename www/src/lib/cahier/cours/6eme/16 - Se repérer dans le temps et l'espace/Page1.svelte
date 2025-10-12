<script lang="ts">
	import { Chapitre, Contenu, Partie, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Item, Methode, Exemple } from '$lib/cahier/composants/de_cours/*';

	import { math } from 'mathlifier';
</script>

<Chapitre titre="Se repérer dans le temps et l’espace" />

<Contenu apres_un_titre>
	<Partie numero={1} titre="Horaires et durées" />
	<SousPartie numero={1} titre="Vocabulaire" />
	<Definition lignes={11}>
		<Item>Une année est la durée d'un tour de la Terre autour du Soleil.</Item>
		<Item>Un jour est la durée d'un tour complet de la Terre sur elle-même.</Item>
		<Item>
			1 an {@html math('\\approx')} 365,25 jours
		</Item>
		<Item>1 semaine = 7 jours</Item>
		<Item>1 décade = 10 jours</Item>
		<Item>1 décennie = 10 ans</Item>
		<Item>1 siècle = 100 ans</Item>
		<Item>1 millénaire = 1000 ans</Item>
		<Item>1 j = 24 h = 86400 s</Item>
		<Item>1 h = 60 min = 3600 s</Item>
		<Item>1 min = 60 s</Item>
	</Definition>
</Contenu>
