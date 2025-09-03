<script lang="ts">
	import { Chapitre, Contenu, DansLaMarge, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Tableau, LigneTableau, Exemples, Item, CelluleTableau } from '$lib/cahier/composants/de_cours/*';
	import { Nombre } from '$lib/cahier/composants/de_marge/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';

	let nombre_1 = $state(123.456_789);
	let nombre_2 = $state(13.482);
	let nombre_3 = $state(0.7894);

	function chiffre(nombre: number, puissance: number | undefined) {
		if (puissance == undefined) {
			return ',';
		}
		return Math.floor(nombre / Math.pow(10, puissance)) % 10;
	}

	function nombre_de(nombre: number, puissance: number) {
		return Math.floor(nombre / Math.pow(10, puissance));
	}
</script>

<Chapitre titre="Nombres décimaux" />

<DansLaMarge>
	<LigneVide lignes={19} />
	<Nombre bind:valeur={nombre_1} min={0} max={999} step={0.000_001} />
	<Nombre bind:valeur={nombre_2} min={0} max={999} step={0.000_001} />
	<Nombre bind:valeur={nombre_3} min={0} max={999} step={0.000_001} />
</DansLaMarge>

<Contenu apres_un_titre>
	<Partie numero={1} titre="Le tableau de numération décimale" />
	<Tableau colonnes={20}>
		<LigneTableau>
			<CelluleTableau colonnes={6}>Partie entière</CelluleTableau>
			<CelluleTableau colonnes={2} addStyle="color: red;">,</CelluleTableau>
			<CelluleTableau colonnes={12}>Partie décimale</CelluleTableau>
		</LigneTableau>
		<LigneTableau lignes={14}>
			{#each ['centaine', 'dizaine', 'unité', 'virgule', 'dixième', 'centième', 'millième', 'dix-millième', 'cent-millième', 'millionnième'] as t}
				<CelluleTableau
					colonnes={2}
					texte_vertical
					addStyle="text-transform: uppercase; padding-top: calc(0.5*var(--carreau)); letter-spacing: 0.27em;"
				>
					{t}
				</CelluleTableau>
			{/each}
		</LigneTableau>
		{#each [nombre_1, nombre_2, nombre_3] as nombre}
			<LigneTableau>
				{#each [2, 1, 0, undefined, -1, -2, -3, -4, -5, -6] as puissance}
					<CelluleTableau colonnes={2}>
						{chiffre(nombre, puissance)}
					</CelluleTableau>
				{/each}
			</LigneTableau>
		{/each}
	</Tableau>

	<Exemples lignes={6}>
		<Item lignes={3}>
			{nombre_2.toLocaleString('fr-FR')} :
			<Item>le chiffre des unités est {chiffre(nombre_2, 0)}</Item>
			<Item>le nombre des dixièmes est {nombre_de(nombre_2, -1)}</Item>
		</Item>
		<Item lignes={3}>
			{nombre_3.toLocaleString('fr-FR', { minimumFractionDigits: 4, maximumFractionDigits: 6 })} :
			<Item>le chiffre des dix-millièmes est {chiffre(nombre_3, -4)}</Item>
			<Item>le nombre de dix-millièmes est {nombre_de(nombre_3, -4)}</Item>
		</Item>
	</Exemples>
</Contenu>
