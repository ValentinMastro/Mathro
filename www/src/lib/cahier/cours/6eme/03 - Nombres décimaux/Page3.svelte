<script lang="ts">
	import { Contenu, DansLaMarge, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Exemple, Exemples, Item, Methode, Schema } from '$lib/cahier/composants/de_cours/*';
	import { Nombre } from '$lib/cahier/composants/de_marge/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';

	import { math } from 'mathlifier';
	import { bignumber, type BigNumber } from 'mathjs';
	import { Decimal } from 'decimal.js';

	function digitAtPlace(nombre: number, place: number): BigNumber {
		// Renvoie le chiffre des   ...
		//    place = 1   ->        dixièmes
		//    place = 2   ->        centièmes
		//    place = 3   ->        millièmes
		//    etc.
		const d = bignumber(nombre);
		if (place < 1 || !Number.isInteger(place)) {
			throw new Error('place doit être un entier ≥ 1');
		}
		const facteur = bignumber(10).pow(place);
		const shifted = d.times(facteur);
		const floored = shifted.floor();
		return floored.mod(10);
	}

	let nombre = $state(0.237);
	let chiffre_des_dixiemes = $derived(digitAtPlace(nombre, 1).toNumber());
	let chiffre_des_centiemes = $derived(digitAtPlace(nombre, 2).toNumber());
	let chiffre_des_milliemes = $derived(digitAtPlace(nombre, 3).toNumber());

	let arrondi_au_dixieme = $derived(bignumber(nombre).toDecimalPlaces(1, Decimal.ROUND_DOWN).toNumber());
	let arrondi_au_centieme = $derived(bignumber(nombre).toDecimalPlaces(2, Decimal.ROUND_DOWN).toNumber());
</script>

<DansLaMarge>
	<LigneVide lignes={5} />
	<Nombre bind:valeur={nombre} min={0} max={1} step={0.001} />
</DansLaMarge>

<Contenu>
	<Partie numero={3} titre="Repérage sur une droite graduée" />
	<Exemple />
	<Schema lignes={10} aspectRatioSVG={1.7}>
		{#snippet svg()}
			{@const position_du_nombre_sur_le_1er_axe = 400 + 1000 * nombre}
			{@const position_du_nombre_sur_le_2e__axe = 400 + (1000 * (nombre - arrondi_au_dixieme)) / 0.1}
			{@const position_du_nombre_sur_le_3e__axe = 400 + (1000 * (nombre - arrondi_au_centieme)) / 0.01}
			<circle cx={position_du_nombre_sur_le_1er_axe} cy={200} r={10} fill="red" />
			<circle cx={position_du_nombre_sur_le_2e__axe} cy={500} r={12} fill="red" />
			<circle cx={position_du_nombre_sur_le_3e__axe} cy={800} r={14} fill="red" />
			<!-- Nombre -->
			<text x={position_du_nombre_sur_le_1er_axe} y={200 + 80} font-size={45} text-anchor="middle" fill="red">{nombre.toLocaleString('fr-FR')}</text>
			<text x={position_du_nombre_sur_le_2e__axe} y={500 + 80} font-size={45} text-anchor="middle" fill="red">{nombre.toLocaleString('fr-FR')}</text>
			{#if chiffre_des_milliemes != 0}
				<text x={position_du_nombre_sur_le_3e__axe} y={800 + 80} font-size={45} text-anchor="middle" fill="red">{nombre.toLocaleString('fr-FR')}</text
				>
			{/if}
			<!-- Axes -->
			{#each [200, 500, 800] as y, index}
				<!-- Axe -->
				<line x1={400} x2={1500} y1={y} y2={y} stroke="black" stroke-width={5} />
				<!-- Petites graduations -->
				{@const petite_graduation = 15}
				{#each [1, 2, 3, 4, 5, 6, 7, 8, 9] as chiffre}
					{@const x = 300 + 100 * (chiffre + 1)}
					<line x1={x} x2={x} y1={y - petite_graduation} y2={y + petite_graduation} stroke="black" stroke-width={5} />
				{/each}
				<!-- Graduations de début et de fin -->
				{@const grande_graduation = 30}
				{@const debut = bignumber(nombre).toDecimalPlaces(index, Decimal.ROUND_DOWN).toNumber().toLocaleString('fr-FR')}
				{@const fin = bignumber(nombre).toDecimalPlaces(index, Decimal.ROUND_UP).toNumber().toLocaleString('fr-FR')}
				<text x={400} y={y + 80} font-size={45} text-anchor="middle">{debut}</text>
				<text x={1400} y={y + 80} font-size={45} text-anchor="middle">{fin}</text>
				<line x1={400} x2={400} y1={y - grande_graduation} y2={y + grande_graduation} stroke="black" stroke-width={5} />
				<line x1={1400} x2={1400} y1={y - grande_graduation} y2={y + grande_graduation} stroke="black" stroke-width={5} />
			{/each}
			<!-- Lignes de zoom -->
			<line x1={400 + 100 * chiffre_des_dixiemes} y1={200} x2={400} y2={500} stroke="green" stroke-width={5} />
			<line x1={400 + 100 * (chiffre_des_dixiemes + 1)} y1={200} x2={1400} y2={500} stroke="green" stroke-width={5} />
			<line x1={400 + 100 * chiffre_des_centiemes} y1={500} x2={400} y2={800} stroke="green" stroke-width={5} />
			<line x1={400 + 100 * (chiffre_des_centiemes + 1)} y1={500} x2={1400} y2={800} stroke="green" stroke-width={5} />
		{/snippet}
	</Schema>
	<Partie numero={4} titre="Comparaison" />
	<Methode lignes={4}>
		Pour comparer deux nombres décimaux :
		<Item>on compare d'abord leur partie entière (avant la virgule)</Item>
		<Item lignes={2}>puis, on compare chaque chiffre après la virgule, en commençant par les dixièmes, puis les centièmes, etc.</Item>
	</Methode>
	<Exemples lignes={2}>
		<Item>
			{@html math('1{,}23 < 1{,}24')}
		</Item>
		<Item>
			{@html math('3{,}3 > 3{,}07')}
		</Item>
	</Exemples>
</Contenu>
