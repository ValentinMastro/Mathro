<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Exemple, Item, Propriete, Remarque } from '$lib/cahier/composants/de_cours/*';
	import { math } from 'mathlifier';
</script>

<Contenu>
	<Partie numero={2} titre="Priorité des opérations" />
	<Propriete lignes={4}>
		Dans un calcul contenant plusieurs opérations de natures différentes :
		<Item>on effectue d'abord les calculs entre parenthèses</Item>
		<Item>puis les multiplications et les divisions (de gauche à droite)</Item>
		<Item>enfin les additions et les soustractions (de gauche à droite)</Item>
	</Propriete>
	<Exemple lignes={5} addStyle="margin-left: calc((2/21)* 100%);">
		{@html math('3 + 4 \\times (2 + {\\color{red} 3 \\times 7})')} <br />
		{@html math('= 3 + 4 \\times {\\color{red} (2 + 21)}')} <br />
		{@html math('= 3 + {\\color{red} 4 \\times  23}')} <br />
		{@html math('= 3 + 92')} <br />
		{@html math('= \\fbox{95}')}
	</Exemple>
	<Propriete lignes={2}>Lorsqu'il n'y a que des additions, on peut additionner les nombres dans l'ordre que l'on veut.</Propriete>
	<Exemple>
		{@html math('5+3+1+4+2 = 1+2+3+4+5')}
	</Exemple>
	<Propriete lignes={2}>Lorsqu'il n'y a que des multiplications, on peut multiplier les nombres dans l'ordre que l'on veut.</Propriete>
	<Exemple>
		{@html math('5 \\times 3 \\times 1 \\times 4 \\times 2 = 1 \\times 2 \\times 3 \\times 4 \\times 5')}
	</Exemple>
</Contenu>
