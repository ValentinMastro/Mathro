export type Coordonnées2D = { x: number; y: number };
export type ExtrémitésSegment = [Coordonnées2D, Coordonnées2D];

export class Point2D implements Coordonnées2D {
	constructor(
		public x: number,
		public y: number
	) {}

	norme2(): number {
		return this.x * this.x + this.y * this.y;
	}

	static distance2(p1: Coordonnées2D, p2: Coordonnées2D): number {
		const dx = p2.x - p1.x;
		const dy = p2.y - p1.y;
		return dx * dx + dy * dy;
	}

	static distance(p1: Coordonnées2D, p2: Coordonnées2D): number {
		return Math.sqrt(this.distance2(p1, p2));
	}

	static centre_cercle_circonscrit(p1: Coordonnées2D, p2: Coordonnées2D, p3: Coordonnées2D): Coordonnées2D | null {
		const { x: ax, y: ay } = p1;
		const { x: bx, y: by } = p2;
		const { x: cx, y: cy } = p3;

		const D = 2 * (ax * (by - cy) + bx * (cy - ay) + cx * (ay - by));
		if (Math.abs(D) < 1e-9) return null; // points alignés (pas de cercle unique)

		const a2 = ax * ax + ay * ay;
		const b2 = bx * bx + by * by;
		const c2 = cx * cx + cy * cy;

		const ox = (a2 * (by - cy) + b2 * (cy - ay) + c2 * (ay - by)) / D;
		const oy = (a2 * (cx - bx) + b2 * (ax - cx) + c2 * (bx - ax)) / D;

		return new Point2D(ox, oy);
	}
}
