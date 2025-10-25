<script lang="ts">
	import { SousPartie, Contenu } from '$lib/cahier/composants/de_chapitrage/*';
	import { CelluleTableau, LigneTableau, Paragraphe, Schema, Tableau } from '$lib/cahier/composants/de_cours/*';
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

	function cos(angle: number): number {
		return Math.cos((angle * Math.PI) / 180);
	}
	function sin(angle: number): number {
		return Math.sin((angle * Math.PI) / 180);
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

	<Tableau style="font-size: calc(var(--font-size) * 0.8); width: 100%; background-color: white;">
		<LigneTableau style="font-weight: bold; color: white; background-color: #777;" --lignes={1}>
			<CelluleTableau>Grandeur physique</CelluleTableau>
			<CelluleTableau>Unité</CelluleTableau>
			<CelluleTableau>Symbole de l'unité</CelluleTableau>
		</LigneTableau>
		{#each unites as { grandeur, unite, symbole }}
			<LigneTableau>
				<CelluleTableau>{grandeur}</CelluleTableau>
				<CelluleTableau>{unite}</CelluleTableau>
				<CelluleTableau>{symbole}</CelluleTableau>
			</LigneTableau>
		{/each}
	</Tableau>
	<Schema lignes={10} aspectRatioSVG={2}>
		{#snippet svg()}
			{#snippet secteur(cx: number, cy: number, r1: number, r2: number, r3: number, couleur: string, angle: number)}
				<path
					class="petit_secteur"
					d="M {r1 * cos(angle - 22.5)} {r1 * sin(angle - 22.5)}
                        L {r2 * cos(angle - 22.5)} {r2 * sin(angle - 22.5)}
                        A {r2} {r2} 0 0 1 {r2 * cos(angle + 22.5)} {r2 * sin(angle + 22.5)}
                        L {r1 * cos(angle + 22.5)} {r1 * sin(angle + 22.5)}
                        A {r1} {r1} 0 0 0 {r1 * cos(angle - 22.5)} {r1 * sin(angle - 22.5)}
                        Z"
					transform={`translate(${cx}, ${cy})`}
					opacity="50%"
					fill={couleur}
				></path>
				<path
					class="grand_secteur"
					d="M {r2 * cos(angle - 22.5)} {r2 * sin(angle - 22.5)}
                        L {r3 * cos(angle - 22.5)} {r3 * sin(angle - 22.5)}
                        A {r3} {r3} 0 0 1 {r3 * cos(angle + 22.5)} {r3 * sin(angle + 22.5)}
                        L {r2 * cos(angle + 22.5)} {r2 * sin(angle + 22.5)}
                        A {r2} {r2} 0 0 0 {r2 * cos(angle - 22.5)} {r2 * sin(angle - 22.5)}
                        Z"
					transform={`translate(${cx}, ${cy})`}
					fill={couleur}
				></path>
			{/snippet}
			{#each unites as { couleur, constante, lien, symbole }, i}
				{@render secteur(1000, 500, 160, 256, 448, couleur, -90 + 51 * i)}
				<text
					x={1000}
					y={500 - (160 + 256) / 2}
					font-size="75"
					font-style="italic"
					text-anchor="middle"
					dominant-baseline="middle"
					transform={`rotate(${51 * i}, 1000, 500)`}
				>
					{@html constante}
				</text>
				<text
					x={1000}
					y={500 - (256 + 448) / 2}
					font-size="100"
					font-weight="bold"
					fill="white"
					text-anchor="middle"
					dominant-baseline="middle"
					transform={`rotate(${51 * i}, 1000, 500)`}
				>
					{symbole}
				</text>
			{/each}
			<text x="1000" y="510" font-size="180" text-anchor="middle" dominant-baseline="middle">SI</text>
		{/snippet}
	</Schema>
</Contenu>
