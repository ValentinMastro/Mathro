<script lang="ts">
	import { Chapitre, Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemples, Item } from '$lib/cahier/composants/de_cours/*';
	import { math } from 'mathlifier';
</script>

<Chapitre titre="Calculer avec des relatifs" />
<Contenu apres_un_titre>
	<Partie numero={1} titre="Valeur absolue" />
	<Definition>La valeur absolue d'un nombre est le nombre "sans le signe".</Definition>
	<Exemples lignes={2}>
		<Item>La valeur absolue de {@html math('+5')} est {@html math('5')}</Item>
		<Item>La valeur absolue de {@html math('-7')} est {@html math('7')}</Item>
	</Exemples>
</Contenu>
