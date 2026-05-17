<script lang="ts">
	import { Contenu, DansLaMarge, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Propriete, Exemple, Exemples, Item } from '$lib/cahier/composants/de_cours/*';
	import { Exercice } from '$lib/cahier/composants/de_marge/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';
	import { math } from 'mathlifier';
</script>

<DansLaMarge>
	<Exercice niveau={4} id_exercice={2003} position={9} />
	<Exercice niveau={4} id_exercice={2007} position={15} />
</DansLaMarge>

<Contenu>
	<SousPartie numero={2} titre="Multiplication et division" />
	<Propriete lignes={4}>
		Il suffit de multiplier les numérateurs entre eux et les dénominateurs entre eux.
		<br />
		Soient quatre nombres
		<math>
			<mi>a</mi>
			<mo>,</mo>
			<mi>b</mi>
			<mo>,</mo>
			<mi>c</mi>
			<mo>,</mo>
			<mi>d</mi>
		</math>
		avec
		<math>
			<mi>b</mi>
			<mo>≠</mo>
			<mn>0</mn>
			<mo>,</mo>
			<mi>d</mi>
			<mo>≠</mo>
			<mn>0</mn>
		</math>
		.
		<br />
		<center>
			<math>
				<mfrac>
					<mi>a</mi>
					<mi>b</mi>
				</mfrac>
				<mo>×</mo>
				<mfrac>
					<mi>c</mi>
					<mi>d</mi>
				</mfrac>
				<mo>=</mo>
				<mfrac>
					<mrow>
						<mi>a</mi>
						<mo>×</mo>
						<mi>c</mi>
					</mrow>
					<mrow>
						<mi>b</mi>
						<mo>×</mo>
						<mi>d</mi>
					</mrow>
				</mfrac>
			</math>
		</center>
	</Propriete>
	<Exemple>
		<center>
			<math>
				<mfrac>
					<mn>3</mn>
					<mn>7</mn>
				</mfrac>
				<mo>×</mo>
				<mfrac>
					<mn>2</mn>
					<mn>5</mn>
				</mfrac>
				<mo>=</mo>
				<mfrac>
					<mrow>
						<mn>3</mn>
						<mo>×</mo>
						<mn>2</mn>
					</mrow>
					<mrow>
						<mn>7</mn>
						<mo>×</mo>
						<mn>5</mn>
					</mrow>
				</mfrac>
				<mo>=</mo>
				<mfrac>
					<mn>6</mn>
					<mn>35</mn>
				</mfrac>
			</math>
		</center>
	</Exemple>

	<Propriete>Diviser par un nombre revient à multiplier par son inverse.</Propriete>

	<Exemples lignes={3}>
		<Item>
			{@html math(`
			    \\dfrac{3}{4} \\fcolorbox{red}{white}{$ \\div \\dfrac{2}{5} \\vphantom{\\dfrac{1}{\\frac{1}{1}}}   $}
				= \\dfrac{3}{4} \\fcolorbox{red}{white}{$ \\times \\dfrac{5}{2} \\vphantom{\\dfrac{1}{\\frac{1}{1}}}$}
				= \\dfrac{3 \\times 5}{4 \\times 2}
				= \\dfrac{15}{8}`)}
		</Item>
		<LigneVide />
		<Item>
			{@html math(
				`3{,}5 \\div 0{,}5
				= \\dfrac{7}{2} \\fcolorbox{red}{white}{$ \\div \\dfrac{1}{2} \\vphantom{\\dfrac{1}{\\frac{1}{1}}}$}
				= \\dfrac{7}{2} \\fcolorbox{red}{white}{$ \\times 2 $}
				= \\dfrac{7 \\times 2}{2}
				= 7`
			)}
		</Item>
	</Exemples>
</Contenu>
