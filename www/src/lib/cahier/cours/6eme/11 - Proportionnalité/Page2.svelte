<script lang="ts">
	import { Contenu, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Exemples, Propriete, Schema } from '$lib/cahier/composants/de_cours/*';

	let donnees_tableau_1 = [
		{ abscisse: 800, x: 1, y: 0.3 },
		{ abscisse: 1000, x: 2, y: 0.6 },
		{ abscisse: 1200, x: 5, y: 1.5 }
	];

	let donnees_tableau_2 = [
		{ abscisse: 800, x: 1, y: 50 },
		{ abscisse: 1000, x: 5, y: 250 },
		{ abscisse: 1200, x: 10, y: 500 }
	];
</script>

{#snippet tableau(donnees: { abscisse: number; x: number; y: number }[], x_label: string, y_label: string, hauteur: number, coeff: string)}
	<defs>
		<marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth">
			<path d="M0,0 L0,6 L9,3 z" stroke="none" fill="blue" />
		</marker>
	</defs>
	<rect x={100} y={hauteur} width={1300} height={200} stroke="blue" stroke-width={5} fill="none" />
	<line x1={100} y1={hauteur + 100} x2={1400} y2={hauteur + 100} stroke="blue" stroke-width={5} />
	<text x={120} y={hauteur + 70} font-size={60} fill="black">{x_label}</text>
	<text x={120} y={hauteur + 170} font-size={60} fill="black">{y_label}</text>
	{#each donnees as { abscisse: abs, x, y }}
		<line x1={abs} y1={hauteur} x2={abs} y2={hauteur + 200} stroke="blue" stroke-width={5} />
		<text x={abs + 100} y={hauteur + 70} font-size={60} fill="black" text-anchor="middle">
			{x.toLocaleString()}
		</text>
		<text x={abs + 100} y={hauteur + 170} font-size={60} fill="black" text-anchor="middle">
			{y.toLocaleString()}
		</text>
	{/each}
	{@const dx = 100 * Math.cos(0.45 * Math.PI)}
	{@const dy = 100 * Math.sin(0.45 * Math.PI)}
	<path d="M 1450,{hauteur + 50} a 50 50 0 0 1 {dx} {dy}" stroke="blue" stroke-width={5} fill="none" marker-end="url(#arrow)" />
	<text x={1550} y={hauteur + 100} font-size={60} fill="blue">× {coeff}</text>
{/snippet}

<Contenu>
	<SousPartie numero={2} titre="Tableau de proportionnalité" />
	<Propriete lignes={2}>
		Lorsque deux grandeurs sont proportionnelles, on peut <br />
		construire un tableau de proportionnalité.
	</Propriete>
	<Exemples />
	<Schema lignes={10} aspectRatioSVG={2}>
		{#snippet svg()}
			{@render tableau(donnees_tableau_1, 'Masse (kg)', 'Prix (€)', 200, '0,30 €/kg')}
			{@render tableau(donnees_tableau_2, 'Durée (h)', 'Distance (km)', 700, '50 km/h')}
		{/snippet}
	</Schema>
</Contenu>
