<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Exemple, Exemples, Item, Methode, Remarque } from '$lib/cahier/composants/de_cours/*';
	import { math } from 'mathlifier';
</script>

<Contenu>
	<Partie numero={2} titre="Produire une expression littérale" />
	<Methode lignes={3}>
		Pour traduire un programme de calcul en expression littérale : remplacer la valeur inconnue par une lettre, puis écrire les opérations.
	</Methode>
	<Exemples lignes={4}>
		<u>Programme de calcul :</u>
		<Item>Choisir un nombre <span class="noir">(On note {@html math('x')} le nombre choisi.)</span></Item>
		<Item>Le multiplier par 3 <span class="noir">({@html math('3 \\times x = 3x')})</span></Item>
		<Item>Ajouter 5 <span class="noir">({@html math('3x + 5')})</span></Item>
	</Exemples>
	<Remarque lignes={2}>
		On peut utiliser une lettre pour exprimer une propriété générale valable pour tout nombre. <br />
	</Remarque>
	<Exemple lignes={3}>
		La somme de deux nombres consécutifs est égale au nombre qui suit le double du premier. <br />
		Soit {@html math('n')} un nombre entier, alors {@html math('(n) + (n+1) = 2n + 1')}
	</Exemple>
</Contenu>

<style>
	.noir {
		color: var(--noir);
	}
</style>
