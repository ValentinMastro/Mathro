<script lang="ts">
	import { Contenu, DansLaMarge, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Exemples, Item, Propriete, Methode } from '$lib/cahier/composants/de_cours/*';
	import { Exercice } from '$lib/cahier/composants/de_marge/*';
	import { math } from 'mathlifier';
</script>

<DansLaMarge>
	<Exercice niveau={6} id_exercice={255_001} position={10} />
	<Exercice niveau={6} id_exercice={255_005} position={13} />
</DansLaMarge>

<Contenu>
	<Partie numero={5} titre="Additionner des fractions" />
	<Propriete lignes={2}>Pour additionner des fractions, il faut qu'elles aient le même dénominateur.</Propriete>
	<Methode lignes={1}>On additionne les numérateurs, et on garde le même dénominateur.</Methode>
	<Exemples lignes={5}>
		<Item lignes={2}>
			{@html math('\\dfrac{1}{3} + \\dfrac{4}{3} = \\dfrac{1+4}{3} = \\dfrac{5}{3}')}
		</Item>
		<Item lignes={2}>
			{@html math('\\dfrac{2}{5} + \\dfrac{7}{5} = \\dfrac{2+7}{5} = \\dfrac{9}{5}')}
		</Item>
		<Item>
			{@html math('\\dfrac{8}{9} + \\dfrac{5}{9} = \\dfrac{8+5}{9} = \\dfrac{13}{9}')}
		</Item>
	</Exemples>
</Contenu>
