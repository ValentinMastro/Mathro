<script lang="ts">
	import { Contenu, Partie, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Propriete, Item, Exemples } from '$lib/cahier/composants/de_cours/*';
	import { math } from 'mathlifier';
</script>

<Contenu>
	<Partie numero={4} titre="Comparer des fractions" />
	<SousPartie numero={1} titre="Comparer des fractions à 1" />
	<Propriete lignes={3}>
		<Item>
			Une fraction est {@html math('> 1')} si {@html math('\\text{numérateur} ~ > ~ \\text{dénominateur}')}.
		</Item>
		<Item>
			Une fraction est {@html math('< 1')} si {@html math('\\text{numérateur} ~ < ~ \\text{dénominateur}')}.
		</Item>
		<Item>
			Une fraction est {@html math('= 1')} si {@html math('\\text{numérateur} ~ = ~ \\text{dénominateur}')}.
		</Item>
	</Propriete>
	<Exemples lignes={5}>
		<Item lignes={2}>
			{@html math('\\dfrac{3}{2} > 1')} car {@html math('3 > 2')}
		</Item>
		<Item lignes={2}>
			{@html math('\\dfrac{5}{7} < 1')} car {@html math('5 < 7')}
		</Item>
		<Item>
			{@html math('\\dfrac{4}{4} = 1')}
		</Item>
	</Exemples>
	<SousPartie numero={2} titre="Comparer des fractions entre elles" />
	<Propriete lignes={4}>
		<Item lignes={2}>Si deux fractions ont le même dénominateur, alors la fraction avec le plus grand numérateur est la plus grande.</Item>
		<Item lignes={2}>Si deux fractions ont le même numérateur, alors la fraction avec le plus petit dénominateur est la plus grande.</Item>
	</Propriete>
	<Exemples lignes={4}>
		<Item lignes={2}>
			{@html math('\\dfrac{4}{3} > \\dfrac{2}{3}')} car ils ont le même dénominateur et {@html math('4 > 2')}
		</Item>
		<Item lignes={2}>
			{@html math('\\dfrac{1}{2} > \\dfrac{1}{3}')} car ils ont le même numérateur et {@html math('2 < 3')}
		</Item>
	</Exemples>
</Contenu>
