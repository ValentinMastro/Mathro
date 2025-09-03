<script lang="ts">
	import { Contenu, DansLaMarge, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Propriete, Schema } from '$lib/cahier/composants/de_cours/*';
	import { Slider } from '$lib/cahier/composants/de_marge/*';
	import { Médiatrice, Polygone } from '$lib/cahier/composants/svg/*';

	// --- Données ---
	type Pt = { x: number; y: number };

	let A = $state<Pt>({ x: 300, y: 200 });
	let B = $state<Pt>({ x: 1200, y: 400 });
	let C = $state<Pt>({ x: 900, y: 900 });

	// Calcul du centre du cercle circonscrit
	let O = $derived.by(() => {
		const { x: ax, y: ay } = A;
		const { x: bx, y: by } = B;
		const { x: cx, y: cy } = C;

		const D = 2 * (ax * (by - cy) + bx * (cy - ay) + cx * (ay - by));
		if (Math.abs(D) < 1e-9) return null; // points alignés (pas de cercle unique)

		const a2 = ax * ax + ay * ay;
		const b2 = bx * bx + by * by;
		const c2 = cx * cx + cy * cy;

		const ox = (a2 * (by - cy) + b2 * (cy - ay) + c2 * (ay - by)) / D;
		const oy = (a2 * (cx - bx) + b2 * (ax - cx) + c2 * (bx - ax)) / D;

		return { x: ox, y: oy };
	});

	// Rayon du cercle circonscrit
	let r = $derived(O ? Math.hypot(A.x - O.x, A.y - O.y) : null);

	// Accès uniforme aux sommets
	const sommets = { A, B, C };
	type Sommet = keyof typeof sommets; // 'A' | 'B' | 'C'

	let type = { forme: 'disque', taille: 15 };

	// --- Paramètres drag ---
	const SEUIL = 40; // tolérance de sélection (en unités SVG)
	const SEUIL2 = SEUIL * SEUIL; // on compare aux distances au carré
	let enDrag: Sommet | null = $state(null);
	let pointerId: number | null = null;

	// --- Utilitaires géométrie & SVG ---
	const dist2 = (p: Pt, q: Pt) => {
		const dx = p.x - q.x,
			dy = p.y - q.y;
		return dx * dx + dy * dy;
	};

	// Récupère le <svg> concerné à partir de l'événement
	function getSVG(e: Event): SVGSVGElement | null {
		const elt = e.target as Element | null;
		return elt?.closest('svg') as SVGSVGElement | null;
	}

	// Convertit coordonnées écran -> repère SVG
	function toSVGPoint(e: PointerEvent, svg: SVGSVGElement): Pt | null {
		const pt = svg.createSVGPoint();
		pt.x = e.clientX;
		pt.y = e.clientY;
		const ctm = svg.getScreenCTM();
		if (!ctm) return null;
		const p = pt.matrixTransform(ctm.inverse());
		return { x: p.x, y: p.y };
	}

	// Choisit le sommet le plus proche si assez près, sinon null
	function pickSommet(p: Pt): Sommet | null {
		let meilleur: Sommet = 'A';
		let dmin = dist2(p, sommets.A);
		const dB = dist2(p, sommets.B);
		if (dB < dmin) {
			dmin = dB;
			meilleur = 'B';
		}
		const dC = dist2(p, sommets.C);
		if (dC < dmin) {
			dmin = dC;
			meilleur = 'C';
		}
		return dmin <= SEUIL2 ? meilleur : null;
	}

	// Affecte les coords au sommet sélectionné
	function setSommet(s: Sommet, p: Pt) {
		const S = sommets[s];
		S.x = p.x;
		S.y = p.y;
	}

	// --- Handlers pointer ---
	function onPointerDown(e: PointerEvent) {
		const svg = getSVG(e);
		if (!svg) return;
		const p = toSVGPoint(e, svg);
		if (!p) return;

		const s = pickSommet(p);
		if (!s) return;

		enDrag = s;
		pointerId = e.pointerId;
		(e.currentTarget as HTMLElement).setPointerCapture?.(pointerId);
		setSommet(s, p);
		e.preventDefault?.(); // évite la sélection de texte
	}

	function onPointerMove(e: PointerEvent) {
		if (!enDrag) return;
		const svg = getSVG(e);
		if (!svg) return;
		const p = toSVGPoint(e, svg);
		if (!p) return;
		setSommet(enDrag, p);
	}

	function endDrag(e: PointerEvent) {
		if (pointerId != null) {
			try {
				(e.currentTarget as HTMLElement).releasePointerCapture(pointerId);
			} catch {}
		}
		enDrag = null;
		pointerId = null;
	}

	let étape = $state(4);
</script>

<DansLaMarge lignes_vides={10}>
	<Slider bind:valeur={étape} min={0} max={4} />
</DansLaMarge>

<Contenu>
	<SousPartie numero={2} titre="Médiatrices dans un triangle" />
	<Propriete lignes={2}>
		Les 3 médiatrices d'un triangle sont concourantes en un point :<br />
		<i title="le centre du cercle qui entoure le triangle">le centre du cercle circonscrit</i>.
	</Propriete>

	<Schema
		lignes={10}
		aspectRatioSVG={2}
		onpointerdown={onPointerDown}
		onpointermove={onPointerMove}
		onpointerup={endDrag}
		onpointercancel={endDrag}
		onpointerleave={endDrag}
		style="touch-action: none"
	>
		{#snippet svg()}
			<Polygone points={[A, B, C]} afficher_points {type} distance_nom={70} />
			{#if étape >= 1}
				<Médiatrice extrémités_segment={[A, B]} stroke="red" />
			{/if}
			{#if étape >= 2}
				<Médiatrice extrémités_segment={[B, C]} stroke="blue" />
			{/if}
			{#if étape >= 3}
				<Médiatrice extrémités_segment={[C, A]} stroke="forestgreen" />
			{/if}
			{#if étape >= 4 && O}
				<circle cx={O.x} cy={O.y} {r} fill="none" stroke="black" stroke-width={5} stroke-dasharray="12,12" />
			{/if}
		{/snippet}
	</Schema>
</Contenu>
