<script lang="ts">
	import { Chapitre, Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Exemples, Item, Methode, MultiItem } from '$lib/cahier/composants/de_cours/*';

	import { math } from 'mathlifier';
</script>

<Chapitre titre="Résoudre des problèmes" />

<Contenu apres_un_titre>
	<Partie numero={1} titre="La fraction d'un nombre" />
	<Methode lignes={2}>Multiplier un nombre par une fraction, c'est multiplier le nombre par le numérateur, et diviser par le dénominateur.</Methode>
	<Exemples lignes={4}>
		<MultiItem>
			<div>
				Calculons {@html math('3 \\times \\dfrac{2}{5}')}
				<Item>
					{@html math('3 \\times 2 \\div 5 = 6 \\div 5 = \\fbox{1,2}')}
				</Item>
				<Item>
					{@html math('3 \\div 5 \\times 2 = 0,6 \\times 2 = \\fbox{1,2}')}
				</Item>
				<Item>
					{@html math('2 \\div 5 \\times 3 = 0,4 \\times 3 = \\fbox{1,2}')}
				</Item>
			</div>
			<div>
				Calculons {@html math('\\dfrac{1}{4}')} de 500 g.
				<Item>
					{@html math('1 \\times 500~\\text{g} \\div 4  = \\fbox{125~\\text{g}}')}
				</Item>
				<Item>
					{@html math('1 \\div 4 \\times 500~\\text{g} = 0,25 \\times 500~\\text{g} = \\fbox{125~\\text{g}}')}
				</Item>
				<Item>
					{@html math('500~\\text{g} \\div 4 \\times 1 = \\fbox{125~\\text{g}}')}
				</Item>
			</div>
		</MultiItem>
	</Exemples>
</Contenu>
