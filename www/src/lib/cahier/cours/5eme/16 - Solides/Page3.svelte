<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Remarque, Schéma } from '$lib/cahier/composants/de_cours/*';
	import { TexteSVG } from '$lib/cahier/composants/svg/*';
</script>

<Contenu>
	<Partie numero={3} titre="Patrons de solides" />
	<Definition lignes={2}>
		Un <i>patron</i> d'un solide est une figure plane que l'on peut découper et plier <br />
		pour reconstituer le solide.
	</Definition>

	<Schéma lignes={7} aspectRatioSVG={2.5}>
		{#snippet svg()}
			<!-- Patron d'un pavé droit (L=300, W=180, H=120) -->
			{@const L = 300}
			{@const W = 180}
			{@const H = 120}
			{@const x0 = 150}
			{@const y0 = 300}
			<!-- face avant -->
			<rect x={x0} y={y0} width={L} height={W} fill="none" stroke="black" stroke-width={5} />
			<!-- face dessus -->
			<rect x={x0} y={y0 - H} width={L} height={H} fill="none" stroke="black" stroke-width={5} />
			<!-- face dessous -->
			<rect x={x0} y={y0 + W} width={L} height={H} fill="none" stroke="black" stroke-width={5} />
			<!-- face gauche -->
			<rect x={x0 - H} y={y0} width={H} height={W} fill="none" stroke="black" stroke-width={5} />
			<!-- face droite -->
			<rect x={x0 + L} y={y0} width={H} height={W} fill="none" stroke="black" stroke-width={5} />
			<!-- face derrière -->
			<rect x={x0} y={y0 + W + H} width={L} height={W} fill="none" stroke="black" stroke-width={5} />
			<TexteSVG point={{ x: x0 + L / 2, y: 950 }} font-size={70}>patron d'un pavé droit</TexteSVG>

			<!-- Patron d'un cylindre (r=120, h=200) -->
			{@const r = 120}
			{@const cyl_h = 220}
			{@const cx1 = 1050}
			{@const cx2 = 1350}
			{@const cy = 500}
			<!-- rectangle (2πr × h) -->
			{@const rect_w = Math.round(2 * Math.PI * r)}
			<rect x={cx1} y={cy - cyl_h / 2} width={rect_w} height={cyl_h} fill="none" stroke="black" stroke-width={5} />
			<!-- cercle du haut -->
			<ellipse cx={cx2} cy={cy - cyl_h / 2 - r} rx={r} ry={r / 2} fill="none" stroke="black" stroke-width={5} />
			<!-- cercle du bas -->
			<ellipse cx={cx2} cy={cy + cyl_h / 2 + r} rx={r} ry={r / 2} fill="none" stroke="black" stroke-width={5} />
			<TexteSVG point={{ x: cx1 + rect_w / 2, y: 950 }} font-size={70}>patron d'un cylindre</TexteSVG>
		{/snippet}
	</Schéma>

	<Remarque lignes={2}>Un même solide peut avoir plusieurs patrons différents.</Remarque>
</Contenu>
