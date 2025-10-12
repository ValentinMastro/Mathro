<script lang="ts">
	import { Contenu, DansLaMarge, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Propriete, Exemple, Item } from '$lib/cahier/composants/de_cours/*';
	import { Exercice } from '$lib/cahier/composants/de_marge/*';
	import { LatexAlign } from '$lib/cahier/composants/math/*';
</script>

<DansLaMarge>
	<Exercice niveau={4} id_exercice={2001} position={10} />
</DansLaMarge>

<Contenu>
	<SousPartie numero={1} titre="Addition et soustraction" />
	<Propriete lignes={2}>Pour additionner deux fractions, il faut qu'elles aient le même dénominateur.</Propriete>

	<Exemple lignes={8}>
		<LatexAlign
			lignes={8}
			code={`
		        \\dfrac{3}{4} + \\dfrac{2}{5} &=
				\\dfrac{3 {\\color{red} \\times 5}}{4 {\\color{red} \\times 5}}
				+ \\dfrac{2 {\\color{red} \\times 4}}{5 {\\color{red} \\times 4}} \\\\
				\\\\
				&= \\dfrac{15}{20} + \\dfrac{8}{20} \\\\
				\\\\
				&= \\dfrac{23}{20}
			`}
		/>
	</Exemple>
</Contenu>
