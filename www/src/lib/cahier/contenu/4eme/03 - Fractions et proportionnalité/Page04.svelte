<script lang="ts">
	import { Contenu, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Propriete, Exemple, Exemples, Item } from '$lib/cahier/composants/de_cours/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';
	import { math, display } from 'mathlifier';
</script>

<Contenu>
	<SousPartie numero={2} titre="Multiplication et division" />
	<Propriete lignes={4}>
		Il suffit de multiplier les numérateurs entre eux et les dénominateurs entre eux.<br />
		Soient quatre nombres {@html math('a, b, c, d')} avec {@html math('b \\neq 0, d \\neq 0')}.<br />
		<center>
			{@html math('\\dfrac{a}{b} \\times \\dfrac{c}{d} = \\dfrac{a \\times c}{b \\times d}')}
		</center>
	</Propriete>
	<Exemple>
		<center>
			{@html math('\\dfrac{3}{7} \\times \\dfrac{2}{5} = \\dfrac{3 \\times 2}{7 \\times 5} = \\dfrac{6}{35}')}
		</center>
	</Exemple>

	<Propriete>Diviser par un nombre revient à multiplier par son inverse.</Propriete>

	<Exemples lignes={3}>
		<Item>
			{@html math(`
			    \\dfrac{3}{4} \\fcolorbox{red}{white}{$ \\div \\dfrac{2}{5} $}
				= \\dfrac{3}{4} \\fcolorbox{red}{white}{$ \\times \\dfrac{5}{2} $}
				= \\dfrac{3 \\times 5}{4 \\times 2}
				= \\dfrac{15}{8}`)}
		</Item>
		<LigneVide />
		<Item>
			{@html math(
				`3{,}5 \\div 0{,}5
				= \\dfrac{7}{2} \\fcolorbox{red}{white}{$ \\div \\dfrac{1}{2} $}
				= \\dfrac{7}{2} \\fcolorbox{red}{white}{$ \\times 2 $}
				= \\dfrac{7 \\times 2}{2}
				= 7`
			)}
		</Item>
	</Exemples>
</Contenu>
