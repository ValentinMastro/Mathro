<script lang="ts">
	import { Chapitre, Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemples, Item, Notation, Remarque } from '$lib/cahier/composants/de_cours/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';

	import { math } from 'mathlifier';
</script>

<Chapitre titre="Nombres relatifs" />

<Contenu apres_un_titre>
	<Partie numero={1} titre="Positif et négatif" />
	<LigneVide />
	<Definition lignes={2}>
		Un nombre positif est supérieur ou égal à O. <br />
		Un nombre négatif est inférieur ou égal à 0.
	</Definition>
	<Remarque>0 est à la fois positif et négatif.</Remarque>
	<Notation lignes={2}>
		Un nombre positif est noté avec un signe {@html math('+')} devant, ou sans signe. <br />
		Un nombre négatif est noté avec un signe {@html math('-')} devant.
	</Notation>
	<LigneVide />
	<Exemples lignes={4}>
		<Item>
			Pythagore est né vers l'an 580 avant J.-C. {@html math('\\longrightarrow -580')}.
		</Item>
		<Item>
			Leonhard Euler est né en 1707 {@html math('\\longrightarrow +1707')}.
		</Item>
		<Item>
			La température de fusion du diazote est de {@html math('-210~^{\\circ}\\text{C}')}.
		</Item>
		<Item>
			La température d'ébullition du diazote est de {@html math('-196~^{\\circ}\\text{C}')}.
		</Item>
	</Exemples>
</Contenu>
