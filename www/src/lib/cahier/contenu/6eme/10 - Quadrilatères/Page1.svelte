<script lang="ts">
	import { Chapitre, Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definitions, Exemples, Item, Nomenclature, Schema } from '$lib/cahier/composants/de_cours/*';
	import { Polygone } from '$lib/cahier/composants/svg/*';

	type Pt = { x: number; y: number };

	let points = $state({
		A: { x: 100, y: 100 },
		B: { x: 500, y: 200 },
		C: { x: 400, y: 500 },
		D: { x: 200, y: 300 },
		E: { x: 700, y: 100 },
		F: { x: 1200, y: 200 },
		G: { x: 1000, y: 300 },
		H: { x: 1100, y: 600 },
		I: { x: 900, y: 800 },
		J: { x: 1600, y: 100 },
		K: { x: 1400, y: 300 },
		L: { x: 1400, y: 700 },
		M: { x: 1600, y: 900 },
		N: { x: 1800, y: 700 },
		O: { x: 1800, y: 300 }
	});

	let quadrilatere = $derived([points.A, points.B, points.C, points.D]);
	let pentagone = $derived([points.E, points.F, points.G, points.H, points.I]);
	let hexagone = $derived([points.J, points.K, points.L, points.M, points.N, points.O]);

	// --- Drag commun ---
	type Sommet = keyof typeof points; // 'A' | 'B' | ... | 'O'
	const SEUIL = 40;
	const SEUIL2 = SEUIL * SEUIL;
	let enDrag: Sommet | null = $state(null);
	let pointerId: number | null = null;

	const dist2 = (p: Pt, q: Pt) => {
		const dx = p.x - q.x,
			dy = p.y - q.y;
		return dx * dx + dy * dy;
	};

	function getSVG(e: Event): SVGSVGElement | null {
		const elt = e.target as Element | null;
		return elt?.closest('svg') as SVGSVGElement | null;
	}

	function toSVGPoint(e: PointerEvent, svg: SVGSVGElement): Pt | null {
		const pt = svg.createSVGPoint();
		pt.x = e.clientX;
		pt.y = e.clientY;
		const ctm = svg.getScreenCTM();
		if (!ctm) return null;
		const p = pt.matrixTransform(ctm.inverse());
		return { x: p.x, y: p.y };
	}

	function pickSommet(p: Pt): Sommet | null {
		let best: Sommet | null = null;
		let bestD = Infinity;
		for (const key of Object.keys(points) as Sommet[]) {
			const d = dist2(p, points[key]);
			if (d < bestD) {
				bestD = d;
				best = key;
			}
		}
		return bestD <= SEUIL2 ? best : null;
	}

	function setSommet(s: Sommet, p: Pt) {
		points[s].x = p.x;
		points[s].y = p.y;
	}

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
		e.preventDefault?.();
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
</script>

<Chapitre titre="Quadrilatères" />

<Contenu apres_un_titre>
	<Partie numero={1} titre="Polygones" />
	<Definitions lignes={4}>
		<Item>Un <i>polygone</i> est une figure fermée qui possède plusieurs côtés.</Item>
		<Item>Un <i>quadrilatère</i> est un polygone à quatre côtés.</Item>
		<Item>Un <i>pentagone</i> est un polygone à cinq côtés.</Item>
		<Item>Un <i>hexagone</i> est un polygone à six côtés.</Item>
	</Definitions>
	<Exemples />

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
			<Polygone points={quadrilatere} afficher_points />
			<Polygone points={pentagone} afficher_points noms={['E', 'F', 'G', 'H', 'I']} />
			<Polygone points={hexagone} afficher_points noms={['J', 'K', 'L', 'M', 'N', 'O']} />
		{/snippet}
	</Schema>
</Contenu>
