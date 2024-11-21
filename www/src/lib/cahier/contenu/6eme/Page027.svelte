<script lang="ts">
	import { Chapitre, Contenu, Partie } from "$lib/cahier/composants/de_chapitrage/*";
	import { Exemple, Item, Propriete, Remarque } from "$lib/cahier/composants/de_cours/*";
	import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

	import { alignStar, display, math } from "mathlifier";
</script>

<Chapitre titre="Addition, Soustraction et Multiplication" />

<Contenu apres_un_titre>
    <Partie numero={1} titre="Priorité des opérations" />
		<LigneVide />
		<Propriete lignes={4}>
			Dans un calcul contenant plusieurs opérations de natures différentes :
			<Item>
				on effectue d'abord les calculs entre parenthèses
			</Item>
			<Item>
				puis les multiplications et les divisions (de gauche à droite)
			</Item>
			<Item>
				enfin les additions et les soustractions (de gauche à droite)
			</Item>
		</Propriete>
		<Remarque lignes={2}>
			Lorsqu'il y a un trait de fraction, on calcule d'abord le numérateur et le dénominateur,
			puis on effectue la division.
		</Remarque>
		<LigneVide />
		<Exemple lignes={5}>
			{@html alignStar(`
				&3 + 4 \\times (2 + {\\color{red} 3 \\times 7}) \\\\
				=& 3 + 4 \\times {\\color{red} (2 + 21)} \\\\
				=& 3 + {\\color{red} 4 \\times  23} \\\\
				=& 3 + 92 \\\\
				=& \\fbox{95}
			`)}
		</Exemple>
</Contenu>