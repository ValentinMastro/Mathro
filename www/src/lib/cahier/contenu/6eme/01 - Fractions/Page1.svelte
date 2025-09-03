<script lang="ts">
	import { Chapitre, Partie, SousPartie, Contenu, DansLaMarge } from '$lib/cahier/composants/de_chapitrage/*';
	import { Tableau, LigneTableau, Texte, Exemples, Item, Definitions, PourMieuxComprendre, CelluleTableau } from '$lib/cahier/composants/de_cours/*';
	import { Nombre } from '$lib/cahier/composants/de_marge/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';

	let numero_1 = $state(1234);
	let numero_2 = $state(1500036000);
	let surbrillances = $state([false, false, false, false]);

	function chiffre(n: number, puissance: number): number {
		return Math.floor(n / 10 ** puissance) % 10;
	}

	function chiffre_sans_zeros_inutiles(n: number, puissance: number): number | string {
		if (10 ** puissance > n) return '';
		return chiffre(n, puissance);
	}

	function nombre(n: number, puissance: number): number {
		return Math.floor(n / 10 ** puissance);
	}
</script>

<Chapitre titre="Fractions" />

<DansLaMarge apres_un_titre={true}>
	<LigneVide lignes={15} />
	<Nombre bind:valeur={numero_1} min={1000} max={9999} />
	<Nombre bind:valeur={numero_2} min={1000000000} max={9999999999} />
</DansLaMarge>

{#snippet ligne_de_chiffres(
	index_surbrillance_chiffre: number,
	puissance_chiffre: number,
	index_surbrillance_nombre: number,
	puissance_nombre: number,
	numero: number
)}
	{#each Array(12) as _, index}
		{@const condition =
			(surbrillances[index_surbrillance_chiffre] && index == 11 - puissance_chiffre) ||
			(surbrillances[index_surbrillance_nombre] && index <= 11 - puissance_nombre)}
		<CelluleTableau addStyle="border-right: 1px solid black; {condition ? 'background-color: red; color: white;' : ''}">
			{chiffre_sans_zeros_inutiles(numero, 11 - index)}
		</CelluleTableau>
	{/each}
{/snippet}
{#snippet ligne_de_texte(index_surbrillance: number, numero: number, puissance: number, texte: string)}
	<Item>
		{chiffre(numero, puissance)} est
		<span
			role="tooltip"
			onmouseenter={() => (surbrillances[index_surbrillance] = true)}
			onmouseleave={() => (surbrillances[index_surbrillance] = false)}
		>
			{texte}
		</span>
		de {numero.toLocaleString()}.
	</Item>
{/snippet}
{#snippet ligne_de_texte_nombre(index_surbrillance: number, numero: number, puissance: number, texte: string)}
	<Item>
		{nombre(numero, puissance)} est
		<span
			role="tooltip"
			onmouseenter={() => (surbrillances[index_surbrillance] = true)}
			onmouseleave={() => (surbrillances[index_surbrillance] = false)}
		>
			{texte}
		</span>
		de {numero.toLocaleString()}.
	</Item>
{/snippet}

<Contenu apres_un_titre={true}>
	<Partie numero={1} titre="Chiffres et nombres" />
	<Definitions lignes={3}>
		<Item>Un chiffre est un symbole parmi 0 ; 1 ; 2 ; 3 ; 4 ; 5 ; 6 ; 7 ; 8 ; 9</Item>
		<Item lignes={2}>Un nombre sert à compter, mesurer ou comparer, et on peut l'écrire avec un ou plusieurs chiffres.</Item>
	</Definitions>
	<PourMieuxComprendre lignes={2}>
		<Item>Le <u>mot</u> maison s'écrit avec 6 <u>lettres</u> : M-A-I-S-O-N.</Item>
		<Item>Le <u>nombre</u> 396 s'écrit avec 3 <u>chiffres</u> : 3-9-6.</Item>
	</PourMieuxComprendre>
	<SousPartie numero={1} titre="Tableau de numération" />
	<Tableau colonnes={12} lignes={4}>
		<LigneTableau>
			<CelluleTableau colonnes={3}>Milliards</CelluleTableau>
			<CelluleTableau colonnes={3}>Millions</CelluleTableau>
			<CelluleTableau colonnes={3}>Milliers</CelluleTableau>
			<CelluleTableau colonnes={3}>Unités</CelluleTableau>
		</LigneTableau>
		<LigneTableau>
			{#each Array(4) as _}
				<CelluleTableau>C</CelluleTableau>
				<CelluleTableau>D</CelluleTableau>
				<CelluleTableau addStyle="border-right: 1px solid black;">U</CelluleTableau>
			{/each}
		</LigneTableau>
		<LigneTableau>{@render ligne_de_chiffres(0, 2, 2, 1, numero_1)}</LigneTableau>
		<LigneTableau>{@render ligne_de_chiffres(1, 4, 3, 4, numero_2)}</LigneTableau>
	</Tableau>
	<LigneVide />

	<SousPartie numero={2} titre="Chiffres de ... / Nombres de ..." />
	<Exemples lignes={4}>
		{@render ligne_de_texte(0, numero_1, 2, 'le chiffre des centaines')}
		{@render ligne_de_texte(1, numero_2, 4, 'le chiffre des dizaines de milliers')}
		{@render ligne_de_texte_nombre(2, numero_1, 1, 'le nombre des dizaines')}
		{@render ligne_de_texte_nombre(3, numero_2, 4, 'le nombre des dizaines de milliers')}
	</Exemples>
</Contenu>
