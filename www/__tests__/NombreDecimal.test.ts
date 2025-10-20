import { expect, describe, it } from 'vitest';
import { NombreDecimal } from '../src/lib/cahier/composants/math/NombreDecimal';

describe('NombreDecimal', () => {
	// Tests pour la méthode statique `depuisEntier`
	describe('depuisEntier', () => {
		it('crée un NombreDecimal positif depuis un entier positif', () => {
			const nombre = NombreDecimal.depuisEntier(123n);
			expect(nombre.chiffres).toBe(123n);
			expect(nombre.nombre_de_chiffres_après_la_virgule).toBe(0n);
			expect(nombre.signe).toBe('POSITIF');
			expect(nombre.toString()).toBe('123');
		});

		it('crée un NombreDecimal négatif depuis un entier négatif', () => {
			const nombre = NombreDecimal.depuisEntier(-456n);
			expect(nombre.chiffres).toBe(456n);
			expect(nombre.nombre_de_chiffres_après_la_virgule).toBe(0n);
			expect(nombre.signe).toBe('NÉGATIF');
		});
	});

	// Tests pour la méthode statique `depuisPartiesEntieresEtDecimales`
	describe('depuisPartiesEntieresEtDecimales', () => {
		it('crée un NombreDecimal depuis des parties entière et décimale', () => {
			const nombre = NombreDecimal.depuisPartiesEntieresEtDecimales(123n, 45n, 'POSITIF');
			expect(nombre.chiffres).toBe(12345n);
			expect(nombre.nombre_de_chiffres_après_la_virgule).toBe(2n);
			expect(nombre.signe).toBe('POSITIF');
		});

		it('crée un NombreDecimal négatif depuis des parties entière et décimale', () => {
			const nombre = NombreDecimal.depuisPartiesEntieresEtDecimales(123n, 45n, 'NÉGATIF');
			expect(nombre.chiffres).toBe(12345n);
			expect(nombre.nombre_de_chiffres_après_la_virgule).toBe(2n);
			expect(nombre.signe).toBe('NÉGATIF');
		});
	});

	// Tests pour la méthode `opposé`
	describe('opposé', () => {
		it('retourne l’opposé d’un NombreDecimal positif', () => {
			const nombre = new NombreDecimal(123n, 0n, 'POSITIF');
			const opposé = nombre.opposé();
			expect(opposé.chiffres).toBe(123n);
			expect(opposé.signe).toBe('NÉGATIF');
		});

		it('retourne l’opposé d’un NombreDecimal négatif', () => {
			const nombre = new NombreDecimal(123n, 0n, 'NÉGATIF');
			const opposé = nombre.opposé();
			expect(opposé.chiffres).toBe(123n);
			expect(opposé.signe).toBe('POSITIF');
		});
	});

	// Tests pour la méthode `plus`
	describe('plus', () => {
		it('additionne deux nombres positifs', () => {
			const a = new NombreDecimal(123n, 0n, 'POSITIF');
			const b = new NombreDecimal(456n, 0n, 'POSITIF');
			const resultat = a.plus(b);
			expect(resultat.chiffres).toBe(579n);
			expect(resultat.signe).toBe('POSITIF');
		});

		it('additionne un nombre positif et un nombre négatif', () => {
			const a = new NombreDecimal(500n, 0n, 'POSITIF');
			const b = new NombreDecimal(200n, 0n, 'NÉGATIF');
			const resultat = a.plus(b);
			expect(resultat.chiffres).toBe(300n);
			expect(resultat.signe).toBe('POSITIF');
		});

		it('additionne deux nombres avec des décimales', () => {
			const a = NombreDecimal.depuisPartiesEntieresEtDecimales(1n, 23n, 'POSITIF');
			const b = NombreDecimal.depuisPartiesEntieresEtDecimales(4n, 56n, 'POSITIF');
			const resultat = a.plus(b);
			expect(resultat.chiffres).toBe(579n);
			expect(resultat.nombre_de_chiffres_après_la_virgule).toBe(2n);
			expect(resultat.signe).toBe('POSITIF');
		});
	});

	// Tests pour la méthode `moins`
	describe('moins', () => {
		it('soustrait deux nombres positifs', () => {
			const a = new NombreDecimal(500n, 0n, 'POSITIF');
			const b = new NombreDecimal(200n, 0n, 'POSITIF');
			const resultat = a.moins(b);
			expect(resultat.chiffres).toBe(300n);
			expect(resultat.signe).toBe('POSITIF');
		});

		it('soustrait un nombre négatif', () => {
			const a = new NombreDecimal(500n, 0n, 'POSITIF');
			const b = new NombreDecimal(200n, 0n, 'NÉGATIF');
			const resultat = a.moins(b);
			expect(resultat.chiffres).toBe(700n);
			expect(resultat.signe).toBe('POSITIF');
		});
	});

	// Tests pour la méthode `toString`
	describe('toString', () => {
		it('convertit un NombreDecimal en chaîne de caractères', () => {
			const nombre = NombreDecimal.depuisPartiesEntieresEtDecimales(123n, 45n, 'POSITIF');
			expect(nombre.toString()).toBe('123,45');
		});

		it('convertit un NombreDecimal négatif en chaîne de caractères', () => {
			const nombre = NombreDecimal.depuisPartiesEntieresEtDecimales(123n, 45n, 'NÉGATIF');
			expect(nombre.toString()).toBe('-123,45');
		});

		it('gère les nombres sans partie entière', () => {
			const nombre = NombreDecimal.depuisPartiesEntieresEtDecimales(0n, 45n, 'POSITIF');
			expect(nombre.toString()).toBe('0,45');
		});

		it('gère les nombres négatifs sans partie entière', () => {
			const nombre = NombreDecimal.depuisPartiesEntieresEtDecimales(0n, 45n, 'NÉGATIF');
			expect(nombre.toString()).toBe('-0,45');
		});
	});

	// Tests pour la méthode `valeur_absolue`
	describe('valeur_absolue', () => {
		it('retourne la valeur absolue d’un NombreDecimal positif', () => {
			const nombre = new NombreDecimal(123n, 0n, 'POSITIF');
			const abs = nombre.valeur_absolue();
			expect(abs.chiffres).toBe(123n);
			expect(abs.signe).toBe('POSITIF');
		});

		it('retourne la valeur absolue d’un NombreDecimal négatif', () => {
			const nombre = new NombreDecimal(123n, 0n, 'NÉGATIF');
			const abs = nombre.valeur_absolue();
			expect(abs.chiffres).toBe(123n);
			expect(abs.signe).toBe('POSITIF');
		});
	});

	// Tests pour la méthode `chiffre_des`
	describe('chiffre_des', () => {
		it('retourne le chiffre à une position donnée', () => {
			const nombre = NombreDecimal.depuisPartiesEntieresEtDecimales(123n, 45n, 'POSITIF');
			expect(nombre.chiffre_des('millions')).toBe(0);
			expect(nombre.chiffre_des('centaines')).toBe(1);
			expect(nombre.chiffre_des('dizaines')).toBe(2);
			expect(nombre.chiffre_des('unités')).toBe(3);
			expect(nombre.chiffre_des('dixièmes')).toBe(4);
			expect(nombre.chiffre_des('centièmes')).toBe(5);
			expect(nombre.chiffre_des('millièmes')).toBe(0);
		});
		it('retourne le chiffre à une position donnée', () => {
			const nombre = NombreDecimal.depuisPartiesEntieresEtDecimales(13n, 482n, 'POSITIF');
			expect(nombre.chiffre_des('millions')).toBe(0);
			expect(nombre.chiffre_des('centaines')).toBe(0);
			expect(nombre.chiffre_des('dizaines')).toBe(1);
			expect(nombre.chiffre_des('unités')).toBe(3);
			expect(nombre.chiffre_des('dixièmes')).toBe(4);
			expect(nombre.chiffre_des('centièmes')).toBe(8);
			expect(nombre.chiffre_des('millièmes')).toBe(2);
			expect(nombre.chiffre_des('dix-millièmes')).toBe(0);
		});
		it('retourne le chiffre à une position donnée', () => {
			const nombre = NombreDecimal.depuisPartiesEntieresEtDecimales(0n, 7894n, 'NÉGATIF');
			expect(nombre.chiffre_des('millions')).toBe(0);
			expect(nombre.chiffre_des('centaines')).toBe(0);
			expect(nombre.chiffre_des('dizaines')).toBe(0);
			expect(nombre.chiffre_des('unités')).toBe(0);
			expect(nombre.chiffre_des('dixièmes')).toBe(7);
			expect(nombre.chiffre_des('centièmes')).toBe(8);
			expect(nombre.chiffre_des('millièmes')).toBe(9);
			expect(nombre.chiffre_des('dix-millièmes')).toBe(4);
			expect(nombre.chiffre_des('cent-millièmes')).toBe(0);
		});
	});

	// Tests pour la méthode `chiffre_significatif_des`
	describe('chiffre_significatif_des', () => {
		it('retourne le chiffre significatif à une position donnée', () => {
			const nombre = NombreDecimal.depuisPartiesEntieresEtDecimales(123n, 45n, 'POSITIF');
			expect(nombre.chiffre_significatif_des('millions')).toBe(undefined);
			expect(nombre.chiffre_significatif_des('centaines')).toBe(1);
			expect(nombre.chiffre_significatif_des('dizaines')).toBe(2);
			expect(nombre.chiffre_significatif_des('unités')).toBe(3);
			expect(nombre.chiffre_significatif_des('dixièmes')).toBe(4);
			expect(nombre.chiffre_significatif_des('centièmes')).toBe(5);
			expect(nombre.chiffre_significatif_des('millièmes')).toBe(undefined);
		});
		it('retourne le chiffre significatif à une position donnée', () => {
			const nombre = NombreDecimal.depuisPartiesEntieresEtDecimales(13n, 482n, 'POSITIF');
			expect(nombre.chiffre_significatif_des('millions')).toBe(undefined);
			expect(nombre.chiffre_significatif_des('centaines')).toBe(undefined);
			expect(nombre.chiffre_significatif_des('dizaines')).toBe(1);
			expect(nombre.chiffre_significatif_des('unités')).toBe(3);
			expect(nombre.chiffre_significatif_des('dixièmes')).toBe(4);
			expect(nombre.chiffre_significatif_des('centièmes')).toBe(8);
			expect(nombre.chiffre_significatif_des('millièmes')).toBe(2);
			expect(nombre.chiffre_significatif_des('dix-millièmes')).toBe(undefined);
		});
		it('retourne le chiffre significatif à une position donnée', () => {
			const nombre = NombreDecimal.depuisPartiesEntieresEtDecimales(0n, 7894n, 'NÉGATIF');
			expect(nombre.chiffre_significatif_des('millions')).toBe(undefined);
			expect(nombre.chiffre_significatif_des('centaines')).toBe(undefined);
			expect(nombre.chiffre_significatif_des('dizaines')).toBe(undefined);
			expect(nombre.chiffre_significatif_des('unités')).toBe(undefined);
			expect(nombre.chiffre_significatif_des('dixièmes')).toBe(7);
			expect(nombre.chiffre_significatif_des('centièmes')).toBe(8);
			expect(nombre.chiffre_significatif_des('millièmes')).toBe(9);
			expect(nombre.chiffre_significatif_des('dix-millièmes')).toBe(4);
			expect(nombre.chiffre_significatif_des('cent-millièmes')).toBe(undefined);
		});
	});

	// Tests pour la méthode `nombres_des`
	describe('nombres_des', () => {
		it('retourne le nombre jusqu’à une position donnée', () => {
			const nombre = NombreDecimal.depuisPartiesEntieresEtDecimales(123n, 45n, 'POSITIF');
			expect(nombre.nombres_des('millions')).toBe(0n);
			expect(nombre.nombres_des('milliers')).toBe(0n);
			expect(nombre.nombres_des('centaines')).toBe(1n);
			expect(nombre.nombres_des('dizaines')).toBe(12n);
			expect(nombre.nombres_des('unités')).toBe(123n);
			expect(nombre.nombres_des('dixièmes')).toBe(1234n);
			expect(nombre.nombres_des('centièmes')).toBe(12345n);
			expect(nombre.nombres_des('millièmes')).toBe(123450n);
		});
		it('retourne le nombre jusqu’à une position donnée', () => {
			const nombre = NombreDecimal.depuisPartiesEntieresEtDecimales(13n, 482n, 'POSITIF');
			expect(nombre.nombres_des('millions')).toBe(0n);
			expect(nombre.nombres_des('milliers')).toBe(0n);
			expect(nombre.nombres_des('centaines')).toBe(0n);
			expect(nombre.nombres_des('dizaines')).toBe(1n);
			expect(nombre.nombres_des('unités')).toBe(13n);
			expect(nombre.nombres_des('dixièmes')).toBe(134n);
			expect(nombre.nombres_des('centièmes')).toBe(1348n);
			expect(nombre.nombres_des('millièmes')).toBe(13482n);
			expect(nombre.nombres_des('dix-millièmes')).toBe(134820n);
			expect(nombre.nombres_des('cent-millièmes')).toBe(1348200n);
		});
		it('retourne le nombre jusqu’à une position donnée', () => {
			const nombre = NombreDecimal.depuisPartiesEntieresEtDecimales(0n, 7894n, 'NÉGATIF');
			expect(nombre.nombres_des('millions')).toBe(0n);
			expect(nombre.nombres_des('milliers')).toBe(0n);
			expect(nombre.nombres_des('centaines')).toBe(0n);
			expect(nombre.nombres_des('dizaines')).toBe(0n);
			expect(nombre.nombres_des('unités')).toBe(0n);
			expect(nombre.nombres_des('dixièmes')).toBe(7n);
			expect(nombre.nombres_des('centièmes')).toBe(78n);
			expect(nombre.nombres_des('millièmes')).toBe(789n);
			expect(nombre.nombres_des('dix-millièmes')).toBe(7894n);
			expect(nombre.nombres_des('cent-millièmes')).toBe(78940n);
		});
	});
});
