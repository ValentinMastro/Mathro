export type Coordonnées2D = { x: number; y: number };
export type ExtrémitésSegment = [Coordonnées2D, Coordonnées2D];

export class Point2D implements Coordonnées2D {
	constructor(
		public x: number,
		public y: number
	) {}

	/** Carré de la norme du vecteur (x, y). */
	norme2(): number {
		return this.x * this.x + this.y * this.y;
	}

	/** Carré de la distance entre deux points. */
	static distance2(p1: Coordonnées2D, p2: Coordonnées2D): number {
		const dx = p2.x - p1.x;
		const dy = p2.y - p1.y;
		return dx * dx + dy * dy;
	}

	/** Distance euclidienne entre deux points. */
	static distance(p1: Coordonnées2D, p2: Coordonnées2D): number {
		return Math.sqrt(this.distance2(p1, p2));
	}

	/** Renvoie le vecteur unitaire de même direction que `v`, ou (0, 0) si `v` est quasi nul. */
	static normaliser(v: Coordonnées2D): Coordonnées2D {
		const n = Math.hypot(v.x, v.y);
		return n > 1e-12 ? { x: v.x / n, y: v.y / n } : { x: 0, y: 0 };
	}

	/** Projeté orthogonal du point `sommet` sur la droite (p1, p2). */
	static projeté_orthogonal(sommet: Coordonnées2D, p1: Coordonnées2D, p2: Coordonnées2D): Coordonnées2D {
		const dx = p2.x - p1.x,
			dy = p2.y - p1.y;
		const t = ((sommet.x - p1.x) * dx + (sommet.y - p1.y) * dy) / (dx * dx + dy * dy);
		return { x: p1.x + t * dx, y: p1.y + t * dy };
	}

	/** Orthocentre du triangle ABC (intersection des trois hauteurs). Renvoie `null` si les points sont alignés. */
	static orthocentre(A: Coordonnées2D, B: Coordonnées2D, C: Coordonnées2D): Coordonnées2D | null {
		const dA = { x: B.y - C.y, y: C.x - B.x };
		const dB = { x: A.y - C.y, y: C.x - A.x };
		const denom = -dA.x * dB.y + dB.x * dA.y;
		if (Math.abs(denom) < 1e-9) return null;
		const t = (-(B.x - A.x) * dB.y + dB.x * (B.y - A.y)) / denom;
		return { x: A.x + t * dA.x, y: A.y + t * dA.y };
	}

	/** Vecteur directeur (non normalisé) de la bissectrice de l'angle en `s` formé par les demi-droites [s, p1) et [s, p2). */
	static direction_bissectrice(s: Coordonnées2D, p1: Coordonnées2D, p2: Coordonnées2D): Coordonnées2D {
		const v1 = Point2D.normaliser({ x: p1.x - s.x, y: p1.y - s.y });
		const v2 = Point2D.normaliser({ x: p2.x - s.x, y: p2.y - s.y });
		return { x: v1.x + v2.x, y: v1.y + v2.y };
	}

	/** Centre du cercle inscrit dans le triangle ABC (intersection des trois bissectrices). */
	static centre_cercle_inscrit(A: Coordonnées2D, B: Coordonnées2D, C: Coordonnées2D): Coordonnées2D {
		const a = Point2D.distance(B, C);
		const b = Point2D.distance(A, C);
		const c = Point2D.distance(A, B);
		const s = a + b + c;
		return { x: (a * A.x + b * B.x + c * C.x) / s, y: (a * A.y + b * B.y + c * C.y) / s };
	}

	/** Centre du cercle circonscrit au triangle (p1, p2, p3) (intersection des trois médiatrices). Renvoie `null` si les points sont alignés. */
	static centre_cercle_circonscrit(p1: Coordonnées2D, p2: Coordonnées2D, p3: Coordonnées2D): Coordonnées2D | null {
		const { x: ax, y: ay } = p1;
		const { x: bx, y: by } = p2;
		const { x: cx, y: cy } = p3;

		const D = 2 * (ax * (by - cy) + bx * (cy - ay) + cx * (ay - by));
		if (Math.abs(D) < 1e-9) return null;

		const a2 = ax * ax + ay * ay;
		const b2 = bx * bx + by * by;
		const c2 = cx * cx + cy * cy;

		const ox = (a2 * (by - cy) + b2 * (cy - ay) + c2 * (ay - by)) / D;
		const oy = (a2 * (cx - bx) + b2 * (ax - cx) + c2 * (bx - ax)) / D;

		return new Point2D(ox, oy);
	}
}
