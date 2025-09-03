export class Projecteur {
	dx: number = 0;
	dy: number = 0;

	constructor(
		private k: number = 0.57,
		private angle: number = Math.PI / 4
	) {
		this.k = k;
		this.angle = angle;
		this.dx = k * Math.cos(angle);
		this.dy = -k * Math.sin(angle);
	}

	P({ x, y, z }: { x: number; y: number; z: number }) {
		return {
			x: x + this.dx * z,
			y: y + this.dy * z
		};
	}
}
