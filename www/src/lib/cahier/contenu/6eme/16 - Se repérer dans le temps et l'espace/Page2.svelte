<script lang="ts">
	import { Contenu, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Methode, Exemple, Texte } from '$lib/cahier/composants/de_cours/*';
</script>

<Contenu>
	<SousPartie numero={2} titre="Convertir des secondes en hh:mm:ss" />
	<Texte couleur="rouge"><u>Méthode :</u> Utilisation de la division euclidienne</Texte>
	<Exemple>35000 s = ??h ??min ??s</Exemple>

	<SousPartie numero={3} titre="Convertir des hh:mm:ss en secondes" />
	<Texte couleur="rouge"><u>Méthode :</u> Se rappeler que 1h = 3600s et que 1min = 60s</Texte>
	<Exemple>2h 30min 45s = ?? secondes</Exemple>
</Contenu>
