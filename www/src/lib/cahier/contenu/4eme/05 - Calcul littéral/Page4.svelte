<script lang="ts">
	import { Contenu, DansLaMarge, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemples, Item } from '$lib/cahier/composants/de_cours/*';
	import { Nombre } from '$lib/cahier/composants/de_marge/*';
	import { math } from 'mathlifier';

	let a = $state(3);
</script>

<DansLaMarge lignes_vides={7}>
	<Nombre label="a" bind:valeur={a} min={-20} max={20} />
</DansLaMarge>

<Contenu>
	<SousPartie numero={4} titre="Égalité d'expressions" />
	<Definition lignes={2}>
		Deux expressions littérales sont égales lorsque, <i>quelques soient les valeurs des variables choisies</i>, elles donnent le même résultat.
	</Definition>
	<Exemples lignes={6}>
		<Item lignes={3}>
			{@html math('a^2 + 3a')} et {@html math('a(a+3)')} sont égales.
			<Item>
				{@html math(`a^2 + 3a = ${a}^2 + 3 \\times ${a} = \\textcolor{forestgreen}{${a * a + 3 * a}}`)}
			</Item>
			<Item>
				{@html math(`a(a+3) = ${a} \\times (${a}+3) = ${a} \\times ${a + 3} = \\textcolor{forestgreen}{${a * (a + 3)}}`)}
			</Item>
		</Item>
		<Item lignes={3}>
			{@html math('a^2')} et {@html math('2a')} ne sont pas égales. En effet, si on choisit {@html math('a=3')} :
			<Item>
				{@html math(`a^2 = ${a}^2 = \\textcolor{red}{${a * a}}`)}
			</Item>
			<Item>
				{@html math(`2a = 2 \\times ${a} = \\textcolor{red}{${2 * a}}`)}
			</Item>
		</Item>
	</Exemples>
</Contenu>
