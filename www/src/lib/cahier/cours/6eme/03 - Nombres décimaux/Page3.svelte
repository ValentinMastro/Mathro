<script lang="ts">
	import { Contenu, DansLaMarge, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Exemple, Exemples, Item, Methode, Schema } from '$lib/cahier/composants/de_cours/*';
	import { SaisieNombreDecimal } from '$lib/cahier/composants/de_marge/*';
	import { NombreDecimal } from '$lib/cahier/composants/math/*';
	import { Point } from '$lib/cahier/composants/svg/*';
	import { math } from 'mathlifier';

	let nombre = $state(NombreDecimal.depuisPartiesEntieresEtDecimales(0n, 237n, 'POSITIF'));
	let chiffre_des_dixiemes = $derived(nombre.chiffre_des('dixièmes'));
	let chiffre_des_centiemes = $derived(nombre.chiffre_des('centièmes'));
	let chiffre_des_milliemes = $derived(nombre.chiffre_des('millièmes'));

	let A1 = $derived({
		x: 400 + 1000 * nombre.toNumber(),
		y: 200
	});
	let A2 = $derived({
		x: 400 + 100 * chiffre_des_centiemes + 10 * chiffre_des_milliemes,
		y: 500
	});
	let A3 = $derived({
		x: 400 + 100 * chiffre_des_milliemes,
		y: 800
	});
</script>

<DansLaMarge lignes_vides={5}>
	<SaisieNombreDecimal bind:value={nombre} min={NombreDecimal.ZERO} max={NombreDecimal.UN} step={new NombreDecimal(1n, 3n, 'POSITIF')} />
</DansLaMarge>

<Contenu>
	<Partie numero={3} titre="Repérage sur une droite graduée" />
	<Exemple />
	<Schema lignes={10} aspectRatioSVG={1.7}>
		{#snippet svg()}
			<Point point={A1} nom={nombre.toString()} type={{ forme: 'disque', taille: 10 }} fill="red" font-size={45} dy={60} />
			<Point point={A2} nom={nombre.toString()} type={{ forme: 'disque', taille: 12 }} fill="red" font-size={45} dy={60} />
			<Point point={A3} nom={nombre.toString()} type={{ forme: 'disque', taille: 14 }} fill="red" font-size={45} dy={60} />

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
				{@const debut = nombre.arrondi_au(-index, 'INFÉRIEUR')}
				{@const fin = nombre.arrondi_au(-index, 'SUPÉRIEUR')}
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
