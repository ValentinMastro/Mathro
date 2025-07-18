import type { Snippet } from 'svelte';

export { default as Paragraphe } from './Paragraphe.svelte';
// Composants dérivés de Paragraphe
export { default as Definition } from './Definition.svelte';
export { default as Definitions } from './Definitions.svelte';
export { default as Demonstration } from './Demonstration.svelte';
export { default as Convention } from './Convention.svelte';
export { default as Exemple } from './Exemple.svelte';
export { default as Exemples } from './Exemples.svelte';
export { default as Formule } from './Formule.svelte';
export { default as Formules } from './Formules.svelte';
export { default as Illustration } from './Illustration.svelte';
export { default as Item } from './Item.svelte';
export { default as Methode } from './Methode.svelte';
export { default as Nomenclature } from './Nomenclature.svelte';
export { default as Notation } from './Notation.svelte';
export { default as PourMieuxComprendre } from './PourMieuxComprendre.svelte';
export { default as Propriete } from './Propriete.svelte';
export { default as Protocole } from './Protocole.svelte';
export { default as Remarque } from './Remarque.svelte';
export { default as Theoreme } from './Theoreme.svelte';
export { default as TheoremeDefinition } from './TheoremeDefinition.svelte';
export { default as Vocabulaire } from './Vocabulaire.svelte';

export { default as Ligne } from './Ligne.svelte';
export { default as Texte } from './Texte.svelte';
export { default as Tableau } from './Tableau.svelte';
export { default as LigneTableau } from './LigneTableau.svelte';
export { default as CelluleTableau } from './CelluleTableau.svelte';

export { default as Schema } from './Schema.svelte';

export type couleur = 'bleu' | 'rouge' | 'vert' | 'noir';

export interface ParagrapheProps {
	addStyle?: string;
	nom_du_paragraphe?: string;
	couleur?: couleur;
	lignes?: number;
	lignes_vides?: number;
	children?: Snippet;
}
