<script lang="ts">
	import { SousPartie, Contenu } from '$lib/cahier/composants/de_chapitrage/*';
	import { CelluleTableau, LigneTableau, Paragraphe, Schema, Tableau } from '$lib/cahier/composants/de_cours/*';
	import { Disque, SecteurDeCouronne, TexteSVG } from '$lib/cahier/composants/svg/*';
	import { math } from 'mathlifier';

	const PREFIXES: Record<number, { préfixe: string; symbole: string }> = {
		'9': { préfixe: 'giga', symbole: 'G' },
		'6': { préfixe: 'méga', symbole: 'M' },
		'3': { préfixe: 'kilo', symbole: 'k' },
		'2': { préfixe: 'hecto', symbole: 'h' },
		'1': { préfixe: 'déca', symbole: 'da' },
		'-1': { préfixe: 'déci', symbole: 'd' },
		'-2': { préfixe: 'centi', symbole: 'c' },
		'-3': { préfixe: 'milli', symbole: 'm' },
		'-6': { préfixe: 'micro', symbole: 'µ' },
		'-9': { préfixe: 'nano', symbole: 'n' }
	};

	const préfixe = (exposant: number) => PREFIXES[exposant]?.préfixe || '';
	const symbole = (exposant: number) => PREFIXES[exposant]?.symbole || '';

	let unites = [
		{
			grandeur: 'Masse',
			unite: 'Le kilogramme',
			symbole: 'kg',
			couleur: '#c9323b',
			constante: 'h',
			lien: 'https://fr.wikipedia.org/wiki/Constante_de_Planck'
		},
		{
			grandeur: 'Longueur',
			unite: 'Le mètre',
			symbole: 'm',
			couleur: '#ec6c3b',
			constante: 'c',
			lien: 'https://fr.wikipedia.org/wiki/Vitesse_de_la_lumi%C3%A8re'
		},
		{
			grandeur: 'Temps',
			unite: 'La seconde',
			symbole: 's',
			couleur: '#f5a02b',
			constante: 'Δν',
			lien: 'https://fr.wikipedia.org/wiki/Seconde_(temps)'
		},
		{
			grandeur: 'Courant électrique',
			unite: "L'ampère",
			symbole: 'A',
			couleur: '#68a23c',
			constante: 'e',
			lien: 'https://fr.wikipedia.org/wiki/Charge_%C3%A9l%C3%A9mentaire'
		},
		{
			grandeur: 'Température thermodynamique',
			unite: 'Le kelvin',
			symbole: 'K',
			couleur: '#1c5d95',
			constante: 'k',
			lien: 'https://fr.wikipedia.org/wiki/Constante_de_Boltzmann'
		},
		{
			grandeur: 'Quantité de matière',
			unite: 'La mole',
			symbole: 'mol',
			couleur: '#a43f85',
			constante: "N<tspan font-size='40' dx='-10' dy='20'>A</tspan>",
			lien: 'https://fr.wikipedia.org/wiki/Nombre_d%27Avogadro'
		},
		{
			grandeur: 'Intensité lumineuse',
			unite: 'La candela',
			symbole: 'cd',
			couleur: '#4a2874',
			constante: "K<tspan font-size='40' dx='-5' dy='20'>cd</tspan>",
			lien: 'https://fr.wikipedia.org/wiki/Candela'
		}
	];

	function range(start: number, end: number, step: number): number[] {
		const result = [];
		for (let i = start; step > 0 ? i <= end : i >= end; i += step) {
			result.push(i);
		}
		return result;
	}
</script>

<Tableau style="position:absolute; top: 18.8%; font-size: calc(var(--font-size) * 0.8); width: 100%; background-color: white;" lignes={4}>
	<LigneTableau>
		{#each ['Milliards', 'Millions', 'Milliers', 'Unités', 'Millièmes', 'Millionièmes', 'Milliardièmes'] as classe}
			<CelluleTableau colonnes={3}>{classe}</CelluleTableau>
		{/each}
	</LigneTableau>
	<LigneTableau>
		{#each range(11, -9, -1) as exposant}
			<CelluleTableau>
				{@html math(`10^{${exposant}}`)}
			</CelluleTableau>
		{/each}
	</LigneTableau>
	<LigneTableau>
		{#each range(11, -9, -1) as exposant}
			<CelluleTableau>
				{préfixe(exposant)}
			</CelluleTableau>
		{/each}
	</LigneTableau>
	<LigneTableau>
		{#each range(11, -9, -1) as exposant}
			<CelluleTableau>
				{symbole(exposant)}
			</CelluleTableau>
		{/each}
	</LigneTableau>
</Tableau>

<Contenu>
	<SousPartie titre="Système International (SI)" numero={4} />
	<Paragraphe couleur="noir" nom_du_paragraphe="Tableau des préfixes du SI" lignes_vides={6} />
	<Paragraphe couleur="noir" nom_du_paragraphe="Les sept unités de base du Système International" />

	<Tableau style="font-size: calc(var(--font-size) * 0.8); background-color: white;" colonnes={20}>
		<LigneTableau style="font-weight: bold; color: white; background-color: #777;" --lignes={1}>
			<CelluleTableau colonnes={9}>Grandeur physique</CelluleTableau>
			<CelluleTableau colonnes={7}>Unité</CelluleTableau>
			<CelluleTableau colonnes={4}>Symbole</CelluleTableau>
		</LigneTableau>
		{#each unites as { grandeur, unite, symbole }}
			<LigneTableau>
				<CelluleTableau colonnes={9}>{grandeur}</CelluleTableau>
				<CelluleTableau colonnes={7}>{unite}</CelluleTableau>
				<CelluleTableau colonnes={4}>{symbole}</CelluleTableau>
			</LigneTableau>
		{/each}
	</Tableau>
	<Schema lignes={10} aspectRatioSVG={2}>
		{#snippet svg()}
			<Disque centre={{ x: 1000, y: 500 }} rayon={450} fill="white" />
			{#each unites as { couleur, constante, lien, symbole }, i}
				{@const [rayon1, rayon2, rayon3] = [160, 256, 448]}
				{@const [angle1, angle2] = [((-90 + 51 * i - 22.5) * Math.PI) / 180, ((-90 + 51 * i + 22.5) * Math.PI) / 180]}
				<SecteurDeCouronne centre={{ x: 1000, y: 500 }} {rayon1} {rayon2} {angle1} {angle2} fill={couleur} opacity={0.5} />
				<SecteurDeCouronne centre={{ x: 1000, y: 500 }} rayon1={rayon2} rayon2={rayon3} {angle1} {angle2} fill={couleur} />
				<TexteSVG
					point={{ x: 1000, y: 500 - (rayon1 + rayon2) / 2 }}
					font-size="75"
					font-style="italic"
					transform={`rotate(${51 * i}, 1000, 500)`}
					style="user-select: none;"
				>
					{@html constante}
				</TexteSVG>
				<TexteSVG
					point={{ x: 1000, y: 500 - (rayon2 + rayon3) / 2 }}
					font-size="100"
					font-weight="bold"
					fill="white"
					transform={`rotate(${51 * i}, 1000, 500)`}
					style="user-select: none;"
				>
					{symbole}
				</TexteSVG>
			{/each}
			<TexteSVG point={{ x: 1000, y: 510 }} font-size={180}>SI</TexteSVG>
		{/snippet}
	</Schema>
</Contenu>
