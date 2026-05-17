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
		Dans le Système International d'unités (SI), le volume s'exprime en mètres cubes (<math><msup><mtext>m</mtext><mn>3</mn></msup></math>).<br />
		On exprime la contenance en litres (<math><mi>ℓ</mi></math>), sachant que <math><mn>1000</mn><mo> </mo><mi>ℓ</mi><mo>=</mo><mn>1</mn><mtext> m</mtext><msup><mrow></mrow><mn>3</mn></msup></math>.
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
			<CelluleTableau><math><mtext>kℓ</mtext></math></CelluleTableau>
			<CelluleTableau><math><mtext>hℓ</mtext></math></CelluleTableau>
			<CelluleTableau><math><mtext>daℓ</mtext></math></CelluleTableau>
			<CelluleTableau><math><mi>ℓ</mi></math></CelluleTableau>
			<CelluleTableau><math><mtext>dℓ</mtext></math></CelluleTableau>
			<CelluleTableau><math><mtext>cℓ</mtext></math></CelluleTableau>
			<CelluleTableau><math><mtext>mℓ</mtext></math></CelluleTableau>
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
