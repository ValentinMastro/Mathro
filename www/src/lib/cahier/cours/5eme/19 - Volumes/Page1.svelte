<script lang="ts">
	import { Chapitre, Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Convention, Definition, Exemples, Item } from '$lib/cahier/composants/de_cours/*';
	import Remarque from '$lib/cahier/composants/de_cours/Remarque.svelte';
	import { math } from 'mathlifier';
</script>

<Chapitre titre="Volumes" />

<Contenu apres_un_titre>
	<Definition>
		Le volume d'un solide est la mesure de l'espace qu'il délimite.
	</Definition>
	<Definition>
		La contenance mesure l'espace contenu dans un solide.
	</Definition>
	
	<Partie numero={1} titre="Unités de volume" />
	<Convention lignes={2}>
		<Item>
			Volume en {@html math("\\text{m}^3")}
		</Item>
		<Item>
			Contenance en {@html math("\\ell")}
		</Item>
	</Convention>
	<Remarque>
		{@html math("\\text{1 m}^3 = 1000 \\ell")}
	</Remarque>

	<Exemples lignes={2}>
		<Item>
			15 {@html math("\\text{m}^3")} = ? {@html math("\\text{cm}^3")}
		</Item>
		<Item>
			35 {@html math("\\text{d}\\ell")} = ? {@html math("\\text{k}\\ell")}
		</Item>
	</Exemples>
</Contenu>
