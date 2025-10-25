<script lang="ts">
	import { Contenu, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemples, Item, Methode, Remarque } from '$lib/cahier/composants/de_cours/*';
	import { math } from 'mathlifier';
</script>

<Contenu>
	<SousPartie numero={3} titre="Écriture scientifique d'un nombre décimal" />
	<Definition lignes={4}>
		L'écriture scientifique d'un nombre décimal est <i>l'unique</i> écriture de la forme {@html math(`a \\times 10^n`)} où :
		<Item>
			{@html math('a')} est un nombre décimal tel que {@html math('1 \\leqslant a \\lt 10')}
		</Item>
		<Item>
			{@html math('n')} est un entier relatif
		</Item>
	</Definition>
	<Exemples lignes={8}>
		<Item>
			{@html math(`120~546 = 1{,}205~46 \\times 10^5`)}
		</Item>
		<Item>
			{@html math(`0{,}436 = 4{,}36 \\times 10^{-1}`)}
		</Item>
		<Item>
			{@html math(`540~000 = 5{,}4 \\times 10^5`)}
		</Item>
		<Item>
			{@html math(`0{,}008~76 = 8{,}76 \\times 10^{-3}`)}
		</Item>
		<Item>
			{@html math(`0{,}071~5 = 7{,}15 \\times 10^{-2}`)}
		</Item>
		<Item>
			{@html math(`12{,}34 = 1{,}234 \\times 10^1`)}
		</Item>
		<Item>
			{@html math(`0{,}000~16 = 1{,}6 \\times 10^{-4}`)}
		</Item>
		<Item>
			{@html math(`6{,}725 = 6{,}725 \\times 10^0`)}
		</Item>
	</Exemples>
</Contenu>
