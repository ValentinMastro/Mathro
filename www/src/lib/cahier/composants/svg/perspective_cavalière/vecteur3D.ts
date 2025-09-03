export class V3 {
	constructor(
		public x: number,
		public y: number,
		public z: number
	) {}

	ajouter(other: V3): V3 {
		return new V3(this.x + other.x, this.y + other.y, this.z + other.z);
	}

	soustraire(other: V3): V3 {
		return new V3(this.x - other.x, this.y - other.y, this.z - other.z);
	}

	multiplier(factor: number): V3 {
		return new V3(this.x * factor, this.y * factor, this.z * factor);
	}

	produit_scalaire(other: V3): number {
		return this.x * other.x + this.y * other.y + this.z * other.z;
	}

	cross(other: V3): V3 {
		return new V3(this.y * other.z - this.z * other.y, this.z * other.x - this.x * other.z, this.x * other.y - this.y * other.x);
	}

	norme(): number {
		return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
	}

	normaliser(): V3 {
		const norme = this.norme();
		return new V3(this.x / norme, this.y / norme, this.z / norme);
	}
}
