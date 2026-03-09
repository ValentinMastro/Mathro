<script lang="ts">
	import { math } from 'mathlifier';
	import Écran from '$activité/Écran.svelte';

	// --- Écran 2 : valeurs cosinus ---
	const ANGLES = Array.from({ length: 19 }, (_, i) => i * 10);
	const COS_VALS: number[] = ANGLES.map((a) => Math.cos((a * Math.PI) / 180));

	// --- Écran 3 : notes et audio ---
	const NOTES: Record<string, { fréquence: number; coefficient: number; touche: string; label: string }> = {
		la440: { fréquence: 440, coefficient: 1, touche: 'a', label: 'la — 440 Hz' },
		sib: { fréquence: 466.16, coefficient: 1.0594630943593, touche: 'z', label: 'si♭ — 466,16 Hz' },
		la880: { fréquence: 880, coefficient: 2, touche: 'e', label: 'la — 880 Hz' }
	};

	let afficher_solution = $state(false);
	let touches_actives: Set<string> = $state(new Set());
	let ctx_audio: AudioContext | null = $state(null);
	const oscillateurs: Map<string, OscillatorNode> = new Map();

	function obtenir_contexte(): AudioContext {
		if (!ctx_audio) ctx_audio = new AudioContext();
		return ctx_audio;
	}

	function jouer(clé: string): void {
		if (oscillateurs.has(clé)) return;
		const ctx = obtenir_contexte();
		const note = NOTES[clé];
		if (!note) return;
		const osc = ctx.createOscillator();
		osc.type = 'sine';
		osc.frequency.value = note.fréquence;
		osc.connect(ctx.destination);
		osc.start();
		oscillateurs.set(clé, osc);
		touches_actives = new Set([...touches_actives, clé]);
	}

	function arrêter(clé: string): void {
		const osc = oscillateurs.get(clé);
		if (osc) {
			osc.stop();
			osc.disconnect();
			oscillateurs.delete(clé);
		}
		const nouveau = new Set(touches_actives);
		nouveau.delete(clé);
		touches_actives = nouveau;
	}

	function on_keydown(e: KeyboardEvent): void {
		if (e.key === 's') {
			afficher_solution = !afficher_solution;
			return;
		}
		for (const [clé, note] of Object.entries(NOTES)) {
			if (e.key === note.touche) jouer(clé);
		}
	}

	function on_keyup(e: KeyboardEvent): void {
		for (const [clé, note] of Object.entries(NOTES)) {
			if (e.key === note.touche) arrêter(clé);
		}
	}

	// --- Écran 3 : courbes SVG ---
	function chemin_cosinus(coefficient: number, largeur = 1080, pas = 1): string {
		let d = '';
		for (let x = 0; x <= largeur; x += pas) {
			const y = -Math.cos((coefficient * x * Math.PI) / 180) * 80;
			d += (x === 0 ? 'M' : 'L') + `${x},${y}`;
		}
		return d;
	}

	// --- Écran 4 : cercle des quintes ---
	function calculer_quintes(départ = 440): { nom: string; fréquence: number }[] {
		const noms = ['la', 'mi', 'si', 'fa♯', 'do♯', 'sol♯', 'mi♭', 'si♭', 'fa', 'do', 'sol', 'ré'];
		const résultat: { nom: string; fréquence: number }[] = [{ nom: noms[0] ?? '', fréquence: départ }];
		let f = départ;
		for (let i = 1; i < 12; i++) {
			f = (f * 3) / 2;
			if (f > 880) f /= 2;
			résultat.push({ nom: noms[i] ?? '', fréquence: f });
		}
		return résultat;
	}

	const quintes = calculer_quintes(440);
</script>

<svelte:window onkeydown={on_keydown} onkeyup={on_keyup} />

<div class="conteneur-écrans">
	<!-- Écran 1 — Titre -->
	<Écran couleur_fond="#1a1a2e">
		<p class="sous-titre">Activité</p>
		<h1 class="titre-principal">Pourquoi deux notes de musique<br />« sonnent bien » ensemble ?</h1>
	</Écran>

	<!-- Écran 2 — Cosinus et ondes -->
	<Écran
		couleur_fond="#f8f9fa"
		avec_solution
		solution_visible={afficher_solution}
		on_toggle_solution={() => (afficher_solution = !afficher_solution)}
	>
		<h2 class="titre-écran">Dessiner une onde</h2>
		<p class="consigne">
			Placer les points {@html math('(x ; \\cos(x))')} pour {@html math('x = 0°, 10°, 20°, \\ldots, 180°')}
		</p>
		<svg class="graphe-cos" viewBox="-20 -120 220 240">
			<!-- grille -->
			{#each [0, 30, 60, 90, 120, 150, 180] as x}
				<line x1={x} y1="-110" x2={x} y2="110" stroke="#ddd" stroke-width="0.5" />
			{/each}
			{#each [-100, -50, 0, 50, 100] as y}
				<line x1="0" y1={y} x2="180" y2={y} stroke="#ddd" stroke-width="0.5" />
			{/each}
			<!-- axes -->
			<line x1="0" y1="-110" x2="0" y2="110" stroke="#333" stroke-width="1" />
			<line x1="-10" y1="0" x2="190" y2="0" stroke="#333" stroke-width="1" />
			<!-- labels axes -->
			{#each [0, 30, 60, 90, 120, 150, 180] as x}
				<text {x} y="120" font-size="8" fill="#666" text-anchor="middle">{x}°</text>
			{/each}
			<text x="-15" y="-97" font-size="8" fill="#666">1</text>
			<text x="-18" y="103" font-size="8" fill="#666">−1</text>
			<!-- points cibles (cercles vides) -->
			{#if afficher_solution}
				{#each ANGLES as angle, i}
					{@const cos_val = COS_VALS[i] ?? 0}
					<circle cx={angle} cy={-cos_val * 100} r="3" fill="none" stroke="#e74c3c" stroke-width="1" stroke-dasharray="2,2" />
				{/each}
			{/if}
		</svg>
	</Écran>

	<!-- Écran 3 — Trois graphes + audio -->
	<Écran couleur_fond="#ffffff">
		<h2 class="titre-écran sombre">Trois notes, trois courbes</h2>
		<p class="consigne sombre">Appuie sur les touches <kbd>a</kbd>, <kbd>z</kbd>, <kbd>e</kbd> pour jouer les notes</p>
		<div class="graphes-trio">
			{#each Object.entries(NOTES) as [clé, note]}
				<div class="graphe-note">
					<svg viewBox="-10 -100 1100 200" preserveAspectRatio="none" class="courbe-note">
						<line x1="0" y1="0" x2="1080" y2="0" stroke="#ccc" stroke-width="0.5" />
						<path d={chemin_cosinus(note.coefficient)} fill="none" stroke={touches_actives.has(clé) ? '#27ae60' : '#3498db'} stroke-width="2" />
					</svg>
					<button
						class="label-note"
						class:actif={touches_actives.has(clé)}
						onmousedown={() => jouer(clé)}
						onmouseup={() => arrêter(clé)}
						onmouseleave={() => arrêter(clé)}
						ontouchstart={(e) => {
							e.preventDefault();
							jouer(clé);
						}}
						ontouchend={() => arrêter(clé)}
					>
						<kbd>{note.touche}</kbd>
						{note.label}
					</button>
				</div>
			{/each}
		</div>
	</Écran>

	<!-- Écran 4 — Cercle des quintes -->
	<Écran
		couleur_fond="#f0f0f5"
		avec_solution
		solution_visible={afficher_solution}
		on_toggle_solution={() => (afficher_solution = !afficher_solution)}
	>
		<h2 class="titre-écran sombre">Le cercle des quintes</h2>
		<p class="consigne sombre">
			Algorithme : multiplier par {@html math('\\frac{3}{2}')}, si {@html math('> 880')} Hz → diviser par 2
		</p>
		<svg class="cercle-quintes" viewBox="-180 -180 360 360">
			{#each quintes as q, i}
				{@const angle = (i * 30 - 90) * (Math.PI / 180)}
				{@const x = Math.cos(angle) * 140}
				{@const y = Math.sin(angle) * 140}
				{@const angle_suiv = ((i + 1) * 30 - 90) * (Math.PI / 180)}
				{@const x2 = Math.cos(angle_suiv) * 140}
				{@const y2 = Math.sin(angle_suiv) * 140}
				<!-- flèche vers la quinte suivante -->
				{#if i < 11}
					<line x1={x * 0.85} y1={y * 0.85} x2={x2 * 0.85} y2={y2 * 0.85} stroke="#aaa" stroke-width="1" marker-end="url(#flèche)" />
				{/if}
				<!-- position -->
				<circle
					cx={x}
					cy={y}
					r="28"
					fill={i === 0 ? '#3498db' : 'white'}
					stroke={i === 0 ? '#2980b9' : '#999'}
					stroke-width="1.5"
					stroke-dasharray={i === 0 ? 'none' : '4,3'}
				/>
				<text {x} y={y - 6} text-anchor="middle" font-size="11" font-weight="bold" fill={i === 0 ? 'white' : '#333'}>{q.nom}</text>
				<text {x} y={y + 10} text-anchor="middle" font-size="8" fill={i === 0 ? 'rgba(255,255,255,0.9)' : '#999'}>
					{i === 0 ? '440 Hz' : afficher_solution ? Math.round(q.fréquence) + ' Hz' : '? Hz'}
				</text>
			{/each}
			<defs>
				<marker id="flèche" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
					<path d="M 0 0 L 10 5 L 0 10 z" fill="#aaa" />
				</marker>
			</defs>
		</svg>
	</Écran>

	<!-- Écran 5 — Conclusion -->
	<Écran couleur_fond="#1a1a2e">
		<h2 class="titre-conclusion">Le comma pythagoricien</h2>
		<div class="formule">{@html math('3^{12} \\approx 2^{19}')}</div>
		<div class="valeurs">
			<p>{@html math('3^{12} = 531\\,441')}</p>
			<p>{@html math('2^{19} = 524\\,288')}</p>
		</div>
		<p class="explication">
			En enchaînant 12 quintes (facteur {@html math('\\frac{3}{2}')}), on ne retombe pas exactement sur la note de départ.<br />
			L'écart s'appelle le <strong>comma pythagoricien</strong>.
		</p>
	</Écran>
</div>

<style>
	.conteneur-écrans {
		scroll-snap-type: y mandatory;
		overflow-y: scroll;
		height: 100vh;
		width: 100vw;
	}

	/* --- Écran 1 --- */
	.titre-principal {
		font-size: clamp(1.5rem, 4vw, 3.5rem);
		text-align: center;
		color: #eee;
		line-height: 1.4;
		font-weight: 300;
		margin: 0;
	}
	.sous-titre {
		font-size: 1.4rem;
		color: #888;
		align-self: flex-start;
		margin: 0;
		position: absolute;
		top: 2rem;
		left: 2rem;
	}

	/* --- Écran 2 --- */
	.titre-écran {
		margin: 0 0 0.5rem;
		font-size: clamp(1.2rem, 2.5vw, 2rem);
		color: #333;
	}
	.titre-écran.sombre {
		color: #333;
	}
	.consigne {
		color: #555;
		margin: 0 0 1rem;
		font-size: 0.95rem;
	}
	.consigne.sombre {
		color: #555;
	}
	.graphe-cos {
		width: min(95vw, 1400px);
		height: auto;
	}

	/* --- Écran 3 --- */
	.graphes-trio {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: center;
		width: 100%;
		max-width: 1400px;
	}
	.graphe-note {
		width: 100%;
		text-align: center;
	}
	.graphe-note svg.courbe-note {
		width: 100%;
		height: 14vh;
		border: 1px solid #eee;
		border-radius: 8px;
		background: #fafafa;
	}
	.label-note {
		display: inline-block;
		margin-top: 0.5rem;
		padding: 0.4rem 1rem;
		font-size: 0.9rem;
		border-radius: 6px;
		border: 1px solid #ccc;
		background: white;
		color: #333;
		cursor: pointer;
		transition: background-color 0.15s;
		user-select: none;
		-webkit-user-select: none;
	}
	.label-note.actif {
		background-color: #27ae60;
		color: white;
		border-color: #27ae60;
	}
	.label-note kbd {
		display: inline-block;
		min-width: 1.6em;
		padding: 0.15em 0.45em;
		font-weight: bold;
		font-family: monospace;
		font-size: 0.85em;
		line-height: 1;
		text-align: center;
		background: #f0f0f0;
		border: 1px solid #bbb;
		border-bottom: 3px solid #999;
		border-radius: 4px;
		box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
		margin-right: 0.4em;
		vertical-align: middle;
	}
	.label-note.actif kbd {
		background: #1e8449;
		border-color: #16a34a;
		border-bottom-color: #145a2e;
		color: white;
		box-shadow: none;
	}

	/* --- Écran 4 --- */
	.cercle-quintes {
		width: min(80vw, 500px);
		height: auto;
	}

	/* --- Écran 5 --- */
	.titre-conclusion {
		color: #eee;
		font-size: clamp(1.3rem, 3vw, 2.5rem);
		margin: 0 0 1.5rem;
	}
	.formule {
		font-size: clamp(2rem, 5vw, 4rem);
		color: #f39c12;
		margin-bottom: 1.5rem;
	}
	.valeurs {
		font-size: 1.2rem;
		color: #ccc;
	}
	.valeurs p {
		margin: 0.3rem 0;
	}
	.explication {
		margin-top: 1.5rem;
		color: #aaa;
		text-align: center;
		max-width: 600px;
		line-height: 1.6;
	}

	/* --- Print --- */
	@media print {
		.conteneur-écrans {
			scroll-snap-type: none;
			overflow: visible;
			height: auto;
			width: 210mm;
		}
	}
</style>
