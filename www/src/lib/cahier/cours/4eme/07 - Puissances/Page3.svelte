<script lang="ts">
	import { Contenu, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Exemples, Item, Methode, Remarque } from '$lib/cahier/composants/de_cours/*';
	import { math } from 'mathlifier';
</script>

<Contenu>
	<SousPartie numero={2} titre="Multiplier ou diviser par une puissance de 10" />
	<Methode lignes={5}>
		Soit {@html math('n')} un nombre entier positif.
		<Item lignes={2}>
			Multiplier un nombre par {@html math('10^n')}, c'est déplacer la virgule de {@html math('n')} chiffres vers la droite.
		</Item>
		<Item lignes={2}>
			Multiplier un nombre par {@html math('10^{-n}')}, c'est déplacer la virgule de {@html math('n')} chiffres vers la gauche.
		</Item>
	</Methode>
	<Remarque>
		Multiplier par {@html math('10^{-n}')} revient à diviser par {@html math('10^n')}.
	</Remarque>
	<Exemples lignes={6}>
		<Item>
			{@html math(`1{,}234 \\times 10^2 = 123{,}4`)}
		</Item>
		<Item>
			{@html math(`96{,}76 \\times 10^{-3} = 0{,}096~76`)}
		</Item>
		<Item>
			{@html math(`39{,}426~49 \\times 10^4 = 394~264{,}9`)}
		</Item>
		<Item>
			{@html math(`0{,}003~825 \\times 10^{-1} = 0{,}000~382~5`)}
		</Item>
		<Item>
			{@html math(`1{,}927~4 \\times 10^5 = 192~740`)}
		</Item>
		<Item>
			{@html math(`96{,}76 \\times 10^{-3} = 0{,}096~76`)}
		</Item>
	</Exemples>
</Contenu>
