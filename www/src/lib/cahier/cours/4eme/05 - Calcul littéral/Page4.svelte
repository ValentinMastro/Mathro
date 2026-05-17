<script lang="ts">
	import { Contenu, DansLaMarge, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemples, Item } from '$lib/cahier/composants/de_cours/*';
	import { SaisieNombreEntier } from '$lib/cahier/composants/de_marge/*';
	import { math } from 'mathlifier';

	let a = $state(3n);
</script>

<DansLaMarge lignes_vides={7}>
	<SaisieNombreEntier bind:value={a} min={-20n} max={20n} />
</DansLaMarge>

<Contenu>
	<SousPartie numero={4} titre="Égalité d'expressions" />
	<Definition lignes={2}>
		Deux expressions littérales sont égales lorsque, <i>quelques soient les valeurs des variables choisies</i>, elles donnent le même résultat.
	</Definition>
	<Exemples lignes={6}>
		<Item lignes={3}>
			<math><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn><mi>a</mi></math> et <math><mi>a</mi><mo>(</mo><mi>a</mi><mo>+</mo><mn>3</mn><mo>)</mo></math> sont égales.
			<Item>
				{@html math(`a^2 + 3a = ${a}^2 + 3 \\times ${a} = \\textcolor{forestgreen}{${a * a + 3n * a}}`)}
			</Item>
			<Item>
				{@html math(`a(a+3) = ${a} \\times (${a}+3) = ${a} \\times ${a + 3n} = \\textcolor{forestgreen}{${a * (a + 3n)}}`)}
			</Item>
		</Item>
		<Item lignes={3}>
			<math><msup><mi>a</mi><mn>2</mn></msup></math> et <math><mn>2</mn><mi>a</mi></math> ne sont pas égales. En effet, si on choisit <math><mi>a</mi><mo>=</mo><mn>3</mn></math> :
			<Item>
				{@html math(`a^2 = ${a}^2 = \\textcolor{red}{${a * a}}`)}
			</Item>
			<Item>
				{@html math(`2a = 2 \\times ${a} = \\textcolor{red}{${2n * a}}`)}
			</Item>
		</Item>
	</Exemples>
</Contenu>
