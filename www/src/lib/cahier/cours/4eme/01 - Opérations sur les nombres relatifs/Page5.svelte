<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Propriete, Item, Remarque, Exemple } from '$lib/cahier/composants/de_cours/*';
	import { math } from 'mathlifier';
</script>

<Contenu>
	<Partie numero={3} titre="La priorité des opérations" />
	<Propriete lignes={4}>
		Dans un calcul contenant plusieurs opérations :
		<Item>la priorité est donnée aux calculs entres parenthèses</Item>
		<Item>puis, aux multiplications et aux divisions (de gauche à droite)</Item>
		<Item>enfin, aux additions et aux soustractions (de gauche à droite)</Item>
	</Propriete>
	<Remarque lignes={2}>
		Dans un calcul contenant un trait de fraction, on calcule d'abord le numérateur et le dénominateur, puis on effectue la division.
	</Remarque>
	<Exemple lignes={6}>
		<Item bullet="">
			{@html math('\\text{A} = 3 \\times \\colorbox{red}{$(4 + 2)$} \\times 5 - 6 \\div 2')}
		</Item>
		<Item bullet="">
			{@html math('\\text{A} = \\colorbox{red}{$3 \\times 6$} \\times 5 - 6 \\div 2')}
		</Item>
		<Item bullet="">
			{@html math('\\text{A} = \\colorbox{red}{$18 \\times 5$} - 6 \\div 2')}
		</Item>
		<Item bullet="">
			{@html math('\\text{A} = 90 - \\colorbox{red}{$6 \\div 2$}')}
		</Item>
		<Item bullet="">
			{@html math('\\text{A} = 90 - 3')}
		</Item>
		<Item bullet="">
			{@html math('\\text{A} = 87')}
		</Item>
	</Exemple>
</Contenu>
