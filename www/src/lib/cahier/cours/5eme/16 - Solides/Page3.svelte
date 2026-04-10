<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Remarque, Schéma } from '$lib/cahier/composants/de_cours/*';
	import { Cône, Cylindre, Projecteur, TexteSVG } from '$lib/cahier/composants/svg/*';

	const projecteur = new Projecteur(0.46);
</script>

<Contenu>
	<Partie numero={3} titre="Le cylindre et le cône" />

	<Definition lignes={2}>
		Un <i>cylindre</i> est un solide délimité par deux disques parallèles (les bases) et une surface latérale courbe.
	</Definition>

	<Schéma lignes={7} aspectRatioSVG={3.5}>
		{#snippet svg()}
			<rect x="0%" y="0%" width="100%" height="100%" fill="white" stroke="none" />

			<!-- Perspective cavalière : cylindre -->
			<Cylindre rayon={160} centre1={{ x: 650, y: 800, z: 0 }} centre2={{ x: 650, y: 250, z: 0 }} {projecteur} />
			<TexteSVG point={{ x: 650, y: 960 }} font-size={75} text-anchor="middle">cylindre</TexteSVG>

			<!-- Séparateur -->
			<line x1={1500} y1={50} x2={1500} y2={950} stroke="#ccc" stroke-width={3} stroke-dasharray="10 8" />

			<!-- Patron : cylindre -->
			{@const r = 130}
			{@const cyl_h = 330}
			{@const cx_p = 2600}
			{@const rect_w = Math.round(2 * Math.PI * r)}
			{@const rect_x = Math.round(cx_p - rect_w / 2)}
			{@const rect_y = 335}
			<!-- Rectangle (surface latérale déroulée) -->
			<rect x={rect_x} y={rect_y} width={rect_w} height={cyl_h} fill="none" stroke="black" stroke-width={5} />
			<!-- Cercle supérieur (base du haut) -->
			<circle cx={cx_p} cy={rect_y - r} {r} fill="none" stroke="black" stroke-width={5} />
			<!-- Cercle inférieur (base du bas) -->
			<circle cx={cx_p} cy={rect_y + cyl_h + r} {r} fill="none" stroke="black" stroke-width={5} />
			<TexteSVG point={{ x: cx_p, y: 960 }} font-size={75} text-anchor="middle">patron du cylindre</TexteSVG>
		{/snippet}
	</Schéma>

	<Definition lignes={2}>
		Un <i>cône</i> est un solide dont la base est un disque et dont la surface latérale courbe se termine en un point appelé <i>apex</i>.
	</Definition>
	<Remarque lignes={2}>La sphère, le cylindre et le cône ne sont pas des polyèdres car ils ont des faces courbes.</Remarque>

	<Schéma lignes={7} aspectRatioSVG={3.5}>
		{#snippet svg()}
			<rect x="0%" y="0%" width="100%" height="100%" fill="white" stroke="none" />

			<!-- Perspective cavalière : cône -->
			<Cône rayon={160} apex={{ x: 650, y: 200, z: 0 }} centre={{ x: 650, y: 790, z: 0 }} {projecteur} />
			<TexteSVG point={{ x: 650, y: 960 }} font-size={75} text-anchor="middle">cône</TexteSVG>

			<!-- Séparateur -->
			<line x1={1500} y1={50} x2={1500} y2={950} stroke="#ccc" stroke-width={3} stroke-dasharray="10 8" />

			<!-- Patron : cône -->
			{@const r_base = 132}
			{@const l_slant = 384}
			{@const theta = (2 * Math.PI * r_base) / l_slant}
			{@const cx_s = 2600}
			{@const cy_s = 120}
			{@const sin_demi = Math.sin(theta / 2)}
			{@const cos_demi = Math.cos(theta / 2)}
			{@const x1_arc = Math.round(cx_s + l_slant * sin_demi)}
			{@const y1_arc = Math.round(cy_s + l_slant * cos_demi)}
			{@const x2_arc = Math.round(cx_s - l_slant * sin_demi)}
			{@const large_arc = theta > Math.PI ? 1 : 0}
			<!-- Secteur circulaire (surface latérale déroulée) -->
			<path
				d={`M ${cx_s} ${cy_s} L ${x1_arc} ${y1_arc} A ${l_slant} ${l_slant} 0 ${large_arc} 1 ${x2_arc} ${y1_arc} Z`}
				fill="none"
				stroke="black"
				stroke-width={5}
			/>
			<!-- Disque (base du cône) — tangent au bas de l'arc : centre à cy_s + l_slant + r_base -->
			<circle cx={cx_s} cy={cy_s + l_slant + r_base} r={r_base} fill="none" stroke="black" stroke-width={5} />
			<TexteSVG point={{ x: cx_s, y: 960 }} font-size={75} text-anchor="middle">patron du cône</TexteSVG>
		{/snippet}
	</Schéma>
</Contenu>
