<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Convention, Tableau, LigneTableau, Texte, CelluleTableau } from '$lib/cahier/composants/de_cours/*';
	import { math } from 'mathlifier';
</script>

<Contenu>
	<Partie numero={1} titre="Unités de volume et contenance" />
	<Definition lignes={3}>
		Le volume d'un solide est la place qu'il occupe dans l'espace.<br />
		La contenance d'un récipient est le volume de liquide qu'il peut contenir.
	</Definition>
	<Convention lignes={3} lignes_vides={2}>
		Dans le Système International d'unités (SI), le volume s'exprime en mètres cubes ({@html math('\\text{m}^3')}).<br />
		On exprime la contenance en litres ({@html math('\\ell')}), sachant que {@html math('1000 \\ell = 1~\\text{m}^3')}.
	</Convention>

	<Texte couleur="noir">
		<center>
			<u>Tableau de conversion des unités de volume et de contenance</u>
		</center>
	</Texte>
	<Tableau lignes={3} colonnes={21}>
		<LigneTableau>
			{#each Array(11) as _}
				<CelluleTableau />
			{/each}
			<CelluleTableau>{@html math('\\text{k}\\ell')}</CelluleTableau>
			<CelluleTableau>{@html math('\\text{h}\\ell')}</CelluleTableau>
			<CelluleTableau>{@html math('\\text{da}\\ell')}</CelluleTableau>
			<CelluleTableau>{@html math('\\ell')}</CelluleTableau>
			<CelluleTableau>{@html math('\\text{d}\\ell')}</CelluleTableau>
			<CelluleTableau>{@html math('\\text{c}\\ell')}</CelluleTableau>
			<CelluleTableau>{@html math('\\text{m}\\ell')}</CelluleTableau>
			{#each Array(3) as _}
				<CelluleTableau />
			{/each}
		</LigneTableau>
		<LigneTableau>
			{#each ['\\text{km}^3', '\\text{hm}^3', '\\text{da}m^3', '\\text{m}^3', '\\text{dm}^3', '\\text{cm}^3', '\\text{mm}^3'] as unite}
				<CelluleTableau colonnes={3}>
					{@html math(unite)}
				</CelluleTableau>
			{/each}
		</LigneTableau>
		<LigneTableau lignes={5}>
			{#each Array(21) as _}
				<CelluleTableau />
			{/each}
		</LigneTableau>
	</Tableau>
</Contenu>
