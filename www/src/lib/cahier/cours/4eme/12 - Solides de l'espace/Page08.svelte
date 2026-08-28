<script lang="ts">
	import { Contenu, DansLaMarge, Partie, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Formule, Schéma } from '$lib/cahier/composants/de_cours/*';
	import { Slider } from '$lib/cahier/composants/de_marge/*';
	import { Cylindre, Projecteur, TexteSVG } from '$lib/cahier/composants/svg/*';

	let slider = $state(0);
	const projecteur = new Projecteur(0.46);

	// Animation : rectangle tournant autour de son axe pour former un cylindre
	const CX = 1000,
		CY_BOT = 840,
		CY_TOP = 130;
	const R = 280;
	const RY = R / 2.5; // même ratio que le composant Cylindre statique

	function proj(deg: number, cy: number) {
		const a = (deg * Math.PI) / 180;
		return { x: CX + R * Math.cos(a), y: cy - RY * Math.sin(a) };
	}

	function arc(cy: number, from_deg: number, to_deg: number): string {
		const steps = Math.max(2, Math.abs(Math.round(to_deg - from_deg)));
		return Array.from({ length: steps + 1 }, (_, i) => {
			const { x, y } = proj(from_deg + (i / steps) * (to_deg - from_deg), cy);
			return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
		}).join(' ');
	}

	let coin_bot = $derived(proj(slider, CY_BOT));
	let coin_top = $derived(proj(slider, CY_TOP));

	let lignes_gen = $derived.by(() => {
		const res: Array<{ bot: { x: number; y: number }; top: { x: number; y: number } }> = [];
		for (let d = 30; d < slider; d += 30) {
			res.push({ bot: proj(d, CY_BOT), top: proj(d, CY_TOP) });
		}
		return res;
	});
</script>

<DansLaMarge lignes_vides={25}>
	<Slider bind:valeur={slider} min={0} max={360} label={`θ = ${slider}°`} />
</DansLaMarge>

<Contenu>
	<Partie numero={3} titre="Solides de révolution" />
	<Definition lignes={2}>Un solide de révolution est un solide obtenu en faisant tourner un polygone autour d'un axe.</Definition>
	<SousPartie numero={1} titre="Cylindre de révolution" />
	<Definition lignes={2}>Un cylindre de révolution est un solide obtenu en faisant tourner un rectangle autour d'un de ses côtés.</Definition>
	<Formule lignes={2}>
		Si le cylindre a une hauteur <math><mi>h</mi></math>
		et un rayon de base
		<math><mi>r</mi></math>
		, alors
		<math>
			<msub>
				<mi>V</mi>
				<mtext>cylindre</mtext>
			</msub>
			<mo>=</mo>
			<mi>π</mi>
			<msup>
				<mi>r</mi>
				<mn>2</mn>
			</msup>
			<mo>×</mo>
			<mi>h</mi>
		</math>
		.
	</Formule>
	<Schéma lignes={8}>
		{#snippet svg()}
			<Cylindre rayon={170} centre1={{ x: 500, y: 700, z: 0 }} centre2={{ x: 500, y: 100, z: 0 }} {projecteur} />
			<TexteSVG point={{ x: 500, y: 900 }} font-size={70} text-anchor="middle">Cylindre de révolution</TexteSVG>
			<TexteSVG point={{ x: 500, y: 970 }} font-size={70} text-anchor="middle">en perspective cavalière</TexteSVG>
		{/snippet}
	</Schéma>
	<Schéma lignes={10} aspectRatioSVG={2} centré>
		{#snippet svg()}
			<!-- Axe de rotation (ligne pointillée verticale avec flèche) -->
			<line x1={CX} y1={CY_TOP - 70} x2={CX} y2={CY_BOT + 60} stroke="black" stroke-width="4" stroke-dasharray="22,13" />
			<polygon points="{CX},{CY_TOP - 85} {CX - 12},{CY_TOP - 62} {CX + 12},{CY_TOP - 62}" fill="black" />
			<TexteSVG point={{ x: CX + 55, y: CY_TOP - 72 }} font-size={65} text-anchor="start" dominant-baseline="middle">(Δ)</TexteSVG>

			{#if slider < 360}
				<!-- Bord droit initial du rectangle (référence à θ=0) -->
				<line x1={CX + R} y1={CY_TOP} x2={CX + R} y2={CY_BOT} stroke="#bbb" stroke-width="3" stroke-dasharray="16,10" />

				<!-- Arcs balayés par les bords horizontal du rectangle -->
				{#if slider > 0}
					<path d={arc(CY_BOT, 0, slider)} fill="none" stroke="#1a6fa8" stroke-width="5" />
					<path d={arc(CY_TOP, 0, slider)} fill="none" stroke="#1a6fa8" stroke-width="5" />
				{/if}

				<!-- Lignes génératrices intermédiaires (toutes les 30°) -->
				{#each lignes_gen as lg}
					<line x1={lg.bot.x} y1={lg.bot.y} x2={lg.top.x} y2={lg.top.y} stroke="#6ab0de" stroke-width="3" opacity="0.65" />
				{/each}

				<!-- Rectangle courant -->
				<polygon
					points="{CX},{CY_BOT} {coin_bot.x},{coin_bot.y} {coin_top.x},{coin_top.y} {CX},{CY_TOP}"
					fill="rgba(200,50,50,0.12)"
					stroke="red"
					stroke-width="5"
					stroke-linejoin="round"
				/>

				<!-- Annotation r (à θ=0 seulement pour ne pas polluer l'animation) -->
				{#if slider === 0}
					<line x1={CX} y1={CY_BOT + 55} x2={CX + R} y2={CY_BOT + 55} stroke="#555" stroke-width="3" />
					<line x1={CX} y1={CY_BOT + 40} x2={CX} y2={CY_BOT + 70} stroke="#555" stroke-width="3" />
					<line x1={CX + R} y1={CY_BOT + 40} x2={CX + R} y2={CY_BOT + 70} stroke="#555" stroke-width="3" />
					<TexteSVG point={{ x: CX + R / 2, y: CY_BOT + 110 }} font-size={70} text-anchor="middle">r</TexteSVG>
					<line x1={CX - 55} y1={CY_TOP} x2={CX - 55} y2={CY_BOT} stroke="#555" stroke-width="3" />
					<line x1={CX - 70} y1={CY_TOP} x2={CX - 40} y2={CY_TOP} stroke="#555" stroke-width="3" />
					<line x1={CX - 70} y1={CY_BOT} x2={CX - 40} y2={CY_BOT} stroke="#555" stroke-width="3" />
					<TexteSVG point={{ x: CX - 115, y: (CY_TOP + CY_BOT) / 2 }} font-size={70} text-anchor="middle">h</TexteSVG>
				{/if}
			{:else}
				<!-- Cylindre complet : arcs de base avec parties cachées en pointillés -->
				<!-- Base inférieure -->
				<path d={arc(CY_BOT, 0, 180)} fill="none" stroke="black" stroke-width="5" stroke-dasharray="22,13" />
				<path d={arc(CY_BOT, 180, 360)} fill="none" stroke="black" stroke-width="5" />
				<!-- Base supérieure -->
				<path d={arc(CY_TOP, 0, 360)} fill="none" stroke="black" stroke-width="5" />
				<!-- Lignes tangentes gauche et droite -->
				<line x1={proj(180, CY_BOT).x} y1={proj(180, CY_BOT).y} x2={proj(180, CY_TOP).x} y2={proj(180, CY_TOP).y} stroke="black" stroke-width="5" />
				<line x1={proj(0, CY_BOT).x} y1={proj(0, CY_BOT).y} x2={proj(0, CY_TOP).x} y2={proj(0, CY_TOP).y} stroke="black" stroke-width="5" />
			{/if}

			<!-- Label de l'angle en bas -->
			<TexteSVG point={{ x: CX, y: CY_BOT + (slider === 0 ? 180 : 60) }} font-size={68} text-anchor="middle">
				{slider < 360 ? `Rectangle en rotation (θ = ${slider}°)` : 'Cylindre de révolution formé !'}
			</TexteSVG>
		{/snippet}
	</Schéma>
</Contenu>
