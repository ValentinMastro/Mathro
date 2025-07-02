<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Convention, Tableau, LigneTableau } from '$lib/cahier/composants/de_cours/*';
	import { math } from 'mathlifier';
</script>

<Contenu>
	<Partie numero={1} titre="Unités de volume et contenance" />
	<Definition lignes={3}>
		Le volume d'un solide est la place qu'il occupe dans l'espace.<br />
		La contenance d'un récipient est le volume de liquide qu'il peut contenir.
	</Definition>
	<Convention lignes={3}>
		Dans le Système International d'unités (SI), le volume s'exprime en mètres cubes ({@html math('\\text{m}^3')}).<br />
		On exprime la contenance en litres ({@html math('\\ell')}), sachant que {@html math('1000 \\ell = 1~\\text{m}^3')}.
	</Convention>

	<Tableau lignes={3}>
		<caption>Tableau de conversion des unités de volume et de contenance</caption>
		<LigneTableau>
			{#each Array(11) as _}
				<th></th>
			{/each}
			<th>k&#x2113;</th>
			<th>h&#x2113;</th>
			<th>da&#x2113;</th>
			<th>&#x2113;</th>
			<th>d&#x2113;</th>
			<th>c&#x2113;</th>
			<th>m&#x2113;</th>
			<th></th>
			<th></th>
			<th></th>
		</LigneTableau>
		<LigneTableau>
			<th colspan="3">km<sup>3</sup></th>
			<th colspan="3">hm<sup>3</sup></th>
			<th colspan="3">dam<sup>3</sup></th>
			<th colspan="3">m<sup>3</sup></th>
			<th colspan="3">dm<sup>3</sup></th>
			<th colspan="3">cm<sup>3</sup></th>
			<th colspan="3">mm<sup>3</sup></th>
		</LigneTableau>
		<LigneTableau>
			{#each Array(21) as _}
				<td></td>
			{/each}
		</LigneTableau>
	</Tableau>
</Contenu>
