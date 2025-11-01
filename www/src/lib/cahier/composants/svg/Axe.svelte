<script lang="ts">
	import type { Fraction } from 'mathjs';
	import { type Coordonnées2D } from './*';

	type Props = {
		debut: Coordonnées2D;
		fin: Coordonnées2D;
		graduations:
			| {
					type_de_graduation: 'fraction';
					premiere_valeur: Fraction;
					derniere_valeur: Fraction;
					pas: Fraction;
					premiere_graduation: Fraction;
					pas_graduation: Fraction;
			  }
			| {
					type_de_graduation: 'decimal';
					premiere_valeur: number;
					derniere_valeur: number;
					pas: number;
					premiere_graduation: number;
					pas_graduation: number;
			  };
		affichage?: 'décimal' | 'fraction' | 'fraction simplifiée';
		taille_graduations?: number;
		font_size_valeurs_graduations?: number;
		couleur?: string;
		couleur_texte?: string;
		stroke_width?: number;
	};
	let {
		debut,
		fin,
		graduations,
		affichage = 'décimal',
		taille_graduations = 25,
		font_size_valeurs_graduations = 100,
		couleur = 'black',
		couleur_texte = couleur,
		stroke_width = 10
	}: Props = $props();

	let nombre_de_valeurs: number = $state(0);

	if (graduations.type_de_graduation == 'fraction') {
		nombre_de_valeurs = graduations.derniere_valeur.sub(graduations.premiere_valeur).div(graduations.pas).add(1).floor().valueOf();
	} else if (graduations.type_de_graduation == 'decimal') {
		nombre_de_valeurs = Math.floor((graduations.derniere_valeur - graduations.premiere_valeur) / graduations.pas + 1);
	}
</script>

<defs>
	<marker id="fleche_axe" viewBox="0 0 10 10" refX={10} refY={5} markerWidth={6} markerHeight={6} orient="auto-start-reverse">
		<path d="M 0 0 L 10 5 L 0 10 z" fill={couleur} />
	</marker>
</defs>

<line x1={debut.x} y1={debut.y} x2={fin.x} y2={fin.y} stroke={couleur} stroke-width={stroke_width} marker-end="url(#fleche_axe)" />

{#if graduations.type_de_graduation == 'decimal'}
	{#each Array.from({ length: nombre_de_valeurs }).map((_, index) => index) as index}
		{@const valeur = graduations.premiere_valeur + index * graduations.pas}
	{/each}
{:else}
	{#each Array.from({ length: nombre_de_valeurs }).map((_, index) => index) as index}
		{@const valeur_a_afficher = graduations.premiere_valeur.add(graduations.pas.mul(index))}
		{@const t = graduations.premiere_graduation.add(graduations.pas_graduation.mul(index)).valueOf()}
		{#if debut.x == fin.x}
			<!-- Vertical -->
			{@const y = debut.y + (fin.y - debut.y) * t}
			{@const x = debut.x}
			<line x1={x - taille_graduations} x2={x + taille_graduations} y1={y} y2={y} stroke={couleur} stroke-width={stroke_width} />
			{@render afficher_texte(x, y + 4 * taille_graduations, valeur_a_afficher)}
		{:else if debut.y == fin.y}
			<!-- Horizontal -->
			{@const x = debut.x + (fin.x - debut.x) * t}
			{@const y = debut.y}
			<line y1={y - taille_graduations} y2={y + taille_graduations} x1={x} x2={x} stroke={couleur} stroke-width={stroke_width} />
			{@render afficher_texte(x, y + 1.5 * font_size_valeurs_graduations, valeur_a_afficher)}
		{/if}
	{/each}
{/if}

{#snippet afficher_texte(x: number, y: number, valeur: Fraction)}
	{#if (affichage == 'fraction' || affichage == 'fraction simplifiée') && graduations.type_de_graduation == 'fraction'}
		{@const dénominateur = affichage == 'fraction simplifiée' ? valeur.d : graduations.pas.d}
		{@const numérateur = affichage == 'fraction simplifiée' ? valeur.n : valeur.n * (graduations.pas.d / valeur.d)}
		<!-- Numérateur -->
		<text
			{x}
			y={y - font_size_valeurs_graduations * 0.3}
			font-size={font_size_valeurs_graduations}
			text-anchor="middle"
			alignment-baseline="middle"
			fill={couleur_texte}
		>
			{numérateur}
		</text>

		<!-- Barre de fraction -->
		<line
			x1={x - font_size_valeurs_graduations * 0.4}
			x2={x + font_size_valeurs_graduations * 0.4}
			y1={y}
			y2={y}
			stroke={couleur_texte}
			stroke-width={5}
		/>

		<!-- Dénominateur -->
		<text
			{x}
			y={y + font_size_valeurs_graduations * 0.9}
			font-size={font_size_valeurs_graduations}
			text-anchor="middle"
			alignment-baseline="middle"
			fill={couleur_texte}
		>
			{dénominateur}
		</text>
	{:else if affichage == 'décimal'}
		<text {x} {y} font-size={font_size_valeurs_graduations} text-anchor="middle" alignment-baseline="middle" fill={couleur_texte}>
			{valeur.toString()}
		</text>
	{/if}
{/snippet}
