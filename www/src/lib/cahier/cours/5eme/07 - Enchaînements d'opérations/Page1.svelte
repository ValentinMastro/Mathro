<script lang="ts">
	import { Chapitre, Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Exemples, Item, Propriete, Remarque } from '$lib/cahier/composants/de_cours/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';

	import { alignStar } from 'mathlifier';
</script>

<Chapitre titre="Enchaînement d'opérations" />

<Contenu apres_un_titre>
	<Partie numero={1} titre="Priorité des opérations" />
	<LigneVide />
	<Propriete lignes={4}>
		Dans un calcul contenant plusieurs opérations de natures différentes :
		<Item>on effectue d'abord les calculs entre parenthèses</Item>
		<Item>puis les multiplications et les divisions (de gauche à droite)</Item>
		<Item>enfin les additions et les soustractions (de gauche à droite)</Item>
	</Propriete>
	<Remarque lignes={2}>
		Lorsqu'il y a un trait de fraction, on calcule d'abord le numérateur et le dénominateur, puis on effectue la division.
	</Remarque>
	<LigneVide />
	<Exemples lignes={13}>
		<div style="width: 100%; height: 100%; display: flex;">
			<div style="width: 50%; height: 100%;">
				{@html alignStar(`
                        & 3 + 4 \\times (2 + \\fcolorbox{red}{none}{$3 \\times 7$}) \\\\
                        =~& 3 + 4 \\times \\fcolorbox{red}{none}{$(2 + {\\color{red} 21})$} \\\\
                        =~& 3 + \\fcolorbox{red}{none}{$4 \\times {\\color{red} 23}$} \\\\
                        =~& \\fcolorbox{red}{none}{$3 + {\\color{red} 92}$} \\\\
                        =~& \\fbox{95}
                    `)}
			</div>
			<div style="width: 50%; height: 100%;">
				{@html alignStar(`
                        & \\dfrac{ 2 + 3 \\times 6 }{ 10 \\div 5 } \\\\[1.2em]
                        =~& \\dfrac{ 2 + \\fcolorbox{red}{none}{$3 \\times 6$} }{ 10 \\div 5 } \\\\[1.2em]
                        =~& \\dfrac{ \\fcolorbox{red}{none}{$2 + {\\color{red} 18}$} }{ 10 \\div 5 } \\\\[1.2em]
                        =~& \\dfrac{ {\\color{red} 20} }{ \\fcolorbox{red}{none}{$10 \\div 5$} } \\\\[1.2em]
                        =~& \\dfrac{ 20 }{ {\\color{red} 2} } \\\\[1.2em]
                        =& \\fbox{10}
                    `)}
			</div>
		</div>
	</Exemples>
</Contenu>
