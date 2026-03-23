<script lang="ts">
	import { Chapitre, Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Exemples, Item, Methode, Remarque } from '$lib/cahier/composants/de_cours/*';
	import { math } from 'mathlifier';
</script>

<Chapitre titre="Calcul littéral" />

<Contenu apres_un_titre>
	<Partie numero={1} titre="Produire une expression littérale" />
	<Methode lignes={3}>
		Pour traduire un programme de calcul en expression littérale : <br />
		remplacer la valeur inconnue par une lettre, puis écrire les opérations.
	</Methode>
	<Exemples lignes={8}>
		<Item lignes={3}>
			Programme : « Choisir un nombre, le multiplier par 3, puis ajouter 5. » <br />
			On note {@html math('x')} le nombre choisi. <br />
			Expression littérale : {@html math('3x + 5')}.
		</Item>
		<Item lignes={2}>
			Périmètre d'un rectangle de longueur {@html math('L')} et largeur {@html math('\\ell')} : <br />
			{@html math('P = 2 \\times (L + \\ell) = 2L + 2\\ell')}.
		</Item>
		<Item lignes={2}>
			Aire d'un triangle de base {@html math('b')} et de hauteur {@html math('h')} : <br />
			{@html math('\\mathcal{A} = \\dfrac{b \\times h}{2}')}.
		</Item>
	</Exemples>
	<Remarque lignes={2}>
		On peut utiliser une lettre pour exprimer une propriété générale valable pour tout nombre. <br />
		Exemple : la somme de deux nombres consécutifs {@html math('n')} et {@html math('n+1')} vaut {@html math('2n + 1')}.
	</Remarque>
</Contenu>
