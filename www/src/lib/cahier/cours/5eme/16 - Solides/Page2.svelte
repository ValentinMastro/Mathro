<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Item, Remarque, Schéma } from '$lib/cahier/composants/de_cours/*';
	import { Prisme, Projecteur, Pyramide, SegmentVertical, TexteSVG } from '$lib/cahier/composants/svg/*';

	const projecteur = new Projecteur(0.46);
</script>

<Contenu>
	<Partie numero={2} titre="Les polyèdres" />

	<Definition lignes={2}>
		Un <i>prisme droit</i> est un solide dont les deux bases sont des polygones identiques et parallèles, et dont les faces latérales sont des rectangles.
	</Definition>
	<Remarque lignes={2}>
		<Item>Le pavé droit est un prisme droit à base rectangulaire.</Item>
		<Item>Le cube est un prisme droit à base carrée.</Item>
	</Remarque>

	<Schéma lignes={7} aspectRatioSVG={3.5}>
		{#snippet svg()}
			<!-- Perspective cavalière : prisme triangulaire -->
			<Prisme nature={3} {projecteur} centre1={{ x: 705, y: 810, z: 0 }} centre2={{ x: 705, y: 190, z: 0 }} rayon={375} />
			<TexteSVG point={{ x: 670, y: 1020 }} font-size={75} text-anchor="middle">prisme triangulaire</TexteSVG>

			<!-- Séparateur -->
			<SegmentVertical x={1500} y1={50} y2={950} stroke="#ccc" stroke-width={3} stroke-dasharray="10 8" />

			<!-- Patron : prisme triangulaire -->
			{@const a = 200}
			{@const h_rect = 350}
			{@const h_tri = Math.round((a * Math.sqrt(3)) / 2)}
			{@const x0 = 2300}
			{@const y0 = Math.round((1000 - h_tri * 2 - h_rect) / 2) + h_tri}
			<!-- Trois rectangles -->
			<rect x={x0} y={y0} width={3 * a} height={h_rect} fill="none" stroke="black" stroke-width={5} />
			<line x1={x0 + a} y1={y0} x2={x0 + a} y2={y0 + h_rect} stroke="black" stroke-width={5} />
			<line x1={x0 + 2 * a} y1={y0} x2={x0 + 2 * a} y2={y0 + h_rect} stroke="black" stroke-width={5} />
			<!-- Triangle supérieur (au-dessus du rectangle central) -->
			<polygon points={`${x0 + a},${y0} ${x0 + 2 * a},${y0} ${x0 + 1.5 * a},${y0 - h_tri}`} fill="none" stroke="black" stroke-width={5} />
			<!-- Triangle inférieur -->
			<polygon
				points={`${x0 + a},${y0 + h_rect} ${x0 + 2 * a},${y0 + h_rect} ${x0 + 1.5 * a},${y0 + h_rect + h_tri}`}
				fill="none"
				stroke="black"
				stroke-width={5}
			/>
			<TexteSVG point={{ x: 2600, y: 960 }} font-size={75} text-anchor="middle">patron du prisme droit</TexteSVG>
		{/snippet}
	</Schéma>

	<Definition lignes={3}>
		Une <i>pyramide</i> est un solide dont la base est un polygone et dont les faces latérales sont des triangles se rejoignant en un point appelé
		<i>apex</i>.
	</Definition>

	<Schéma lignes={7} aspectRatioSVG={3.5}>
		{#snippet svg()}
			<!-- Perspective cavalière : pyramide à base carrée -->
			<Pyramide nature={4} {projecteur} apex={{ x: 700, y: 180, z: 0 }} centre={{ x: 700, y: 760, z: 0 }} rayon={320} />
			<TexteSVG point={{ x: 700, y: 960 }} font-size={75} text-anchor="middle">pyramide à base carrée</TexteSVG>

			<!-- Séparateur -->
			<SegmentVertical x={1500} y1={50} y2={950} stroke="#ccc" stroke-width={3} stroke-dasharray="10 8" />

			<!-- Patron : pyramide à base carrée -->
			{@const b = 260}
			{@const l = 290}
			{@const cx = 2600}
			{@const cy = 500}
			{@const hb = b / 2}
			<!-- Base carrée -->
			<rect x={cx - hb} y={cy - hb} width={b} height={b} fill="none" stroke="black" stroke-width={5} />
			<!-- Face supérieure -->
			<polygon points={`${cx - hb},${cy - hb} ${cx + hb},${cy - hb} ${cx},${cy - hb - l}`} fill="none" stroke="black" stroke-width={5} />
			<!-- Face inférieure -->
			<polygon points={`${cx - hb},${cy + hb} ${cx + hb},${cy + hb} ${cx},${cy + hb + l}`} fill="none" stroke="black" stroke-width={5} />
			<!-- Face gauche -->
			<polygon points={`${cx - hb},${cy - hb} ${cx - hb},${cy + hb} ${cx - hb - l},${cy}`} fill="none" stroke="black" stroke-width={5} />
			<!-- Face droite -->
			<polygon points={`${cx + hb},${cy - hb} ${cx + hb},${cy + hb} ${cx + hb + l},${cy}`} fill="none" stroke="black" stroke-width={5} />
			<TexteSVG point={{ x: 2600, y: 960 }} font-size={75} text-anchor="middle">patron de la pyramide</TexteSVG>
		{/snippet}
	</Schéma>
</Contenu>
