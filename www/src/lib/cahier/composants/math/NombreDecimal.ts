export const POSITIONS = {
	milliars: 9,
	'centaines de millions': 8,
	'dizaines de millions': 7,
	millions: 6,
	'centaines de milliers': 5,
	'dizaines de milliers': 4,
	milliers: 3,
	centaines: 2,
	dizaines: 1,
	unités: 0,
	dixièmes: -1,
	centièmes: -2,
	millièmes: -3,
	'dix-millièmes': -4,
	'cent-millièmes': -5,
	millionièmes: -6
};

export class NombreDecimal {
	constructor(
		public chiffres: bigint,
		public nombre_de_chiffres_après_la_virgule: bigint,
		public signe: 'POSITIF' | 'NÉGATIF'
	) {}

	// STATIC
	public static depuisEntier(nombre_entier: bigint): NombreDecimal {
		if (nombre_entier < 0) {
			return new NombreDecimal(-nombre_entier, 0n, 'NÉGATIF');
		}
		return new NombreDecimal(nombre_entier, 0n, 'POSITIF');
	}

	public static depuisPartiesEntieresEtDecimales(partie_entiere: bigint, partie_decimale: bigint, signe: 'POSITIF' | 'NÉGATIF'): NombreDecimal {
		let nombre = new NombreDecimal(
			partie_entiere * 10n ** BigInt(partie_decimale.toString().length) + partie_decimale,
			BigInt(partie_decimale.toString().length),
			signe
		);
		return nombre;
	}

	// MÉTHODES
	public chiffre_des(position: keyof typeof POSITIONS | number): number {
		if (typeof position === 'string') {
			position = POSITIONS[position];
		}
		if (
			position < -this.nombre_de_chiffres_après_la_virgule ||
			position >= BigInt(this.liste_des_chiffres().length) - this.nombre_de_chiffres_après_la_virgule
		) {
			return 0;
		}

		var index = this.liste_des_chiffres().length - Number(this.nombre_de_chiffres_après_la_virgule) - 1 - position;

		return this.liste_des_chiffres().at(index) ?? 0;
	}

	public chiffre_significatif_des(position: keyof typeof POSITIONS | number): number | undefined {
		if (typeof position === 'string') {
			position = POSITIONS[position];
		}
		if (
			position < -this.nombre_de_chiffres_après_la_virgule ||
			position >= BigInt(this.liste_des_chiffres().length) - this.nombre_de_chiffres_après_la_virgule
		) {
			return undefined;
		}

		return this.chiffre_des(position);
	}

	public inférieur_à(other: number | bigint | NombreDecimal): boolean {
		if (typeof other === 'number') {
			other = BigInt(other);
		}
		if (typeof other === 'bigint') {
			other = NombreDecimal.depuisEntier(other);
		}
		return this.moins(other).signe === 'NÉGATIF';
	}

	public liste_des_chiffres(): number[] {
		return this.chiffres
			.toString()
			.split('')
			.map((s) => Number.parseInt(s, 10));
	}

	public moins(other: NombreDecimal): NombreDecimal {
		return this.plus(other.opposé());
	}

	public nombres_des(position: keyof typeof POSITIONS | number | bigint): bigint {
		if (typeof position === 'string') {
			position = POSITIONS[position];
		}
		if (typeof position === 'number') {
			position = BigInt(position);
		}
		if (position < -this.nombre_de_chiffres_après_la_virgule) {
			let nombre_de_zeros_à_ajouter = -position - this.nombre_de_chiffres_après_la_virgule;
			return this.chiffres * 10n ** nombre_de_zeros_à_ajouter;
		}
		if (position >= BigInt(this.liste_des_chiffres().length) - this.nombre_de_chiffres_après_la_virgule) {
			return 0n;
		}

		let index_dernier_chiffre: number = this.liste_des_chiffres().length - Number(this.nombre_de_chiffres_après_la_virgule) - Number(position);

		return BigInt(Number.parseInt(this.liste_des_chiffres().slice(0, index_dernier_chiffre).join('')));
	}

	public opposé(): NombreDecimal {
		if (this.signe == 'POSITIF') {
			return new NombreDecimal(this.chiffres, this.nombre_de_chiffres_après_la_virgule, 'NÉGATIF');
		} else {
			return new NombreDecimal(this.chiffres, this.nombre_de_chiffres_après_la_virgule, 'POSITIF');
		}
	}

	public plus(other: NombreDecimal): NombreDecimal {
		let nombre_de_chiffres_après_la_virgule =
			this.nombre_de_chiffres_après_la_virgule > other.nombre_de_chiffres_après_la_virgule
				? this.nombre_de_chiffres_après_la_virgule
				: other.nombre_de_chiffres_après_la_virgule;

		let a =
			(this.signe == 'POSITIF' ? 1n : -1n) * this.chiffres * 10n ** (nombre_de_chiffres_après_la_virgule - this.nombre_de_chiffres_après_la_virgule);
		let b =
			(other.signe == 'POSITIF' ? 1n : -1n) *
			other.chiffres *
			10n ** (nombre_de_chiffres_après_la_virgule - other.nombre_de_chiffres_après_la_virgule);

		if (a + b >= 0n) {
			return new NombreDecimal(a + b, nombre_de_chiffres_après_la_virgule, 'POSITIF');
		} else {
			return new NombreDecimal(a + b, nombre_de_chiffres_après_la_virgule, 'NÉGATIF');
		}
	}

	public supérieur_à(other: number | bigint | NombreDecimal): boolean {
		return !this.inférieur_à(other);
	}

	public toString(): string {
		let caractères: (number | string)[] = this.liste_des_chiffres();

		// Ajout de la virgule si nécessaire
		if (this.nombre_de_chiffres_après_la_virgule > 0n) {
			caractères.splice(Number(-this.nombre_de_chiffres_après_la_virgule), 0, ',');
		}

		// Ajout d'un 0 si nécessaire
		if (this.nombre_de_chiffres_après_la_virgule == BigInt(this.liste_des_chiffres().length)) {
			caractères.unshift('0');
		}
		// Ajout du signe "-" si nécessaire
		if (this.signe == 'NÉGATIF') {
			caractères.unshift('-');
		}

		return caractères.join('');
	}

	public valeur_absolue(): NombreDecimal {
		return new NombreDecimal(this.chiffres, this.nombre_de_chiffres_après_la_virgule, 'POSITIF');
	}
}
