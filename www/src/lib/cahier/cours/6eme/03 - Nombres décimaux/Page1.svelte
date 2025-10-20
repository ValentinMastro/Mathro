<script lang="ts">
	import { Chapitre, Contenu, DansLaMarge, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Tableau, LigneTableau, Exemples, Item, CelluleTableau } from '$lib/cahier/composants/de_cours/*';
	import { SaisieNombreDecimal, Exercice } from '$lib/cahier/composants/de_marge/*';
	import { NombreDecimal, POSITIONS } from '$lib/cahier/composants/math/*';

	let _nombre_1 = $state(NombreDecimal.depuisPartiesEntieresEtDecimales(123n, 456789n, 'POSITIF'));
	let _nombre_2 = $state(NombreDecimal.depuisPartiesEntieresEtDecimales(13n, 482n, 'POSITIF'));
	let _nombre_3 = $state(NombreDecimal.depuisPartiesEntieresEtDecimales(0n, 7894n, 'POSITIF'));

	let min = NombreDecimal.depuisEntier(0n);
	let max = NombreDecimal.depuisEntier(999n);
</script>

<Chapitre titre="Nombres décimaux" />

<DansLaMarge lignes_vides={19}>
	<SaisieNombreDecimal bind:value={_nombre_1} {min} {max} step={new NombreDecimal(1n, 6n, 'POSITIF')} />
	<SaisieNombreDecimal bind:value={_nombre_2} {min} {max} step={new NombreDecimal(1n, 3n, 'POSITIF')} />
	<SaisieNombreDecimal bind:value={_nombre_3} {min} {max} step={new NombreDecimal(1n, 4n, 'POSITIF')} />
	<Exercice niveau={6} id_exercice={1} position={23} />
	<Exercice niveau={6} id_exercice={2} position={26} />
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
					addStyle="text-transform: uppercase; padding-top: calc(0.25*var(--carreau)); letter-spacing: 0.26em;"
				>
					{t}
				</CelluleTableau>
			{/each}
		</LigneTableau>
		{#each [_nombre_1, _nombre_2, _nombre_3] as nombre}
			<LigneTableau>
				{#each ['centaines', 'dizaines', 'unités', undefined, 'dixièmes', 'centièmes', 'millièmes', 'dix-millièmes', 'cent-millièmes', 'millionièmes'] as position}
					<CelluleTableau colonnes={2}>
						{#if position == 'unités' && nombre.inférieur_à(1)}
							0
						{:else if position}
							{nombre.chiffre_significatif_des(position as keyof typeof POSITIONS)}
						{:else}
							,
						{/if}
					</CelluleTableau>
				{/each}
			</LigneTableau>
		{/each}
	</Tableau>

	<Exemples lignes={6}>
		<Item lignes={3}>
			{_nombre_2} :
			<Item>le chiffre des unités est {_nombre_2.chiffre_significatif_des('unités')}</Item>
			<Item>le nombre des dixièmes est {_nombre_2.nombres_des('dixièmes')}</Item>
		</Item>
		<Item lignes={3}>
			{_nombre_3} :
			<Item>le chiffre des dix-millièmes est {_nombre_3.chiffre_significatif_des('dix-millièmes')}</Item>
			<Item>le nombre de dix-millièmes est {_nombre_3.nombres_des('dix-millièmes')}</Item>
		</Item>
	</Exemples>
</Contenu>
