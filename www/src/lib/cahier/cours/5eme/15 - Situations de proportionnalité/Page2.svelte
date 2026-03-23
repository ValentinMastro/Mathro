<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Exemples, Item, Methode, Propriete, Schéma } from '$lib/cahier/composants/de_cours/*';
</script>

{#snippet tableau(x_label: string, y_label: string, valeurs: { x: number | string; y: number | string }[], coeff: string, hauteur: number)}
	<defs>
		<marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth">
			<path d="M0,0 L0,6 L9,3 z" stroke="none" fill="blue" />
		</marker>
	</defs>
	{@const col_width = 280}
	{@const x0 = 100}
	{@const row_height = 100}
	{@const total_width = col_width * (valeurs.length + 1)}
	<rect x={x0} y={hauteur} width={total_width} height={row_height * 2} stroke="blue" stroke-width={5} fill="none" />
	<line x1={x0} y1={hauteur + row_height} x2={x0 + total_width} y2={hauteur + row_height} stroke="blue" stroke-width={5} />
	<line x1={x0 + col_width} y1={hauteur} x2={x0 + col_width} y2={hauteur + row_height * 2} stroke="blue" stroke-width={5} />
	<text x={x0 + 10} y={hauteur + 70} font-size={55} fill="black">{x_label}</text>
	<text x={x0 + 10} y={hauteur + 170} font-size={55} fill="black">{y_label}</text>
	{#each valeurs as { x, y }, i}
		{@const cx = x0 + col_width * (i + 1) + col_width / 2}
		<line x1={x0 + col_width * (i + 1)} y1={hauteur} x2={x0 + col_width * (i + 1)} y2={hauteur + row_height * 2} stroke="blue" stroke-width={5} />
		<text x={cx} y={hauteur + 70} font-size={65} fill="black" text-anchor="middle">{x}</text>
		<text x={cx} y={hauteur + 170} font-size={65} fill="black" text-anchor="middle">{y}</text>
	{/each}
	<text x={x0 + total_width + 30} y={hauteur + 100} font-size={55} fill="blue">× {coeff}</text>
{/snippet}

<Contenu>
	<Partie numero={2} titre="Tableau de proportionnalité" />
	<Propriete lignes={2}>
		Dans un tableau de proportionnalité, on passe d'une ligne à l'autre <br />
		en multipliant par le coefficient de proportionnalité.
	</Propriete>
	<Schéma lignes={6} aspectRatioSVG={4}>
		{#snippet svg()}
			{@render tableau(
				'Nb de pommes',
				'Prix (€)',
				[
					{ x: 2, y: '1,60' },
					{ x: 5, y: '4,00' },
					{ x: 10, y: '8,00' }
				],
				'0,80',
				100
			)}
			{@render tableau(
				'Durée (h)',
				'Distance (km)',
				[
					{ x: 1, y: 60 },
					{ x: 3, y: 180 },
					{ x: 5, y: 300 }
				],
				'60',
				450
			)}
		{/snippet}
	</Schéma>
	<Methode lignes={3}>
		Pour vérifier qu'un tableau est un tableau de proportionnalité :
		<Item>calculer les rapports entre les valeurs de chaque colonne ;</Item>
		<Item>si tous les rapports sont égaux, les grandeurs sont proportionnelles.</Item>
	</Methode>
	<Exemples lignes={3}>
		<Item>2 → 1,60 ; 5 → 4,00 ; 10 → 8,00 : rapports 1,60÷2 = 0,80 ; 4÷5 = 0,80 ; 8÷10 = 0,80 → proportionnel.</Item>
	</Exemples>
</Contenu>
