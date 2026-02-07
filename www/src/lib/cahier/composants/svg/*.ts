export type Coordonnées2D = { x: number; y: number };
export type ExtrémitésSegment = [Coordonnées2D, Coordonnées2D];

/** Valeur arbitrairement grande pour prolonger une droite au-delà du viewport SVG */
export const SVG_INFINI = 1e6;

export { default as ArcDeCercle } from './ArcDeCercle.svelte';
export { default as Angle } from './Angle.svelte';
export { default as AngleDroit } from './AngleDroit.svelte';
export { default as Axe } from './Axe.svelte';
export { default as AxeGradué } from './AxeGradué.svelte';
export { default as Carré } from './Carré.svelte';
export { default as Cercle } from './Cercle.svelte';
export { default as Codage } from './Codage.svelte';
export { default as DemiDroite } from './DemiDroite.svelte';
export { default as Disque } from './Disque.svelte';
export { default as DivisionEuclidienne } from './DivisionEuclidienne.svelte';
export { default as Droite } from './Droite.svelte';
export { default as DroiteVerticale } from './DroiteVerticale.svelte';
export { default as Fleche } from './Fleche.svelte';
export { default as Grille } from './Grille.svelte';
export { default as Médiatrice } from './Médiatrice.svelte';
export { default as Point } from './Point.svelte';
export { default as Polygone } from './Polygone.svelte';
export { default as Polylignes } from './Polylignes.svelte';
export { default as Rectangle } from './Rectangle.svelte';
export { default as SecteurAngulaire } from './SecteurAngulaire.svelte';
export { default as SecteurDeCouronne } from './SecteurDeCouronne.svelte';
export { default as Segment } from './Segment.svelte';
export { default as SegmentHorizontal } from './SegmentHorizontal.svelte';
export { default as SegmentVertical } from './SegmentVertical.svelte';
export { default as TexteSVG } from './TexteSVG.svelte';

export { Projecteur } from './perspective_cavalière/projecteur';
export { default as Cône } from './perspective_cavalière/Cône.svelte';
export { default as Cube } from './perspective_cavalière/Cube.svelte';
export { default as Cylindre } from './perspective_cavalière/Cylindre.svelte';
export { default as PavéDroit } from './perspective_cavalière/PavéDroit.svelte';
export { default as Pyramide } from './perspective_cavalière/Pyramide.svelte';
export { default as Sphere } from './perspective_cavalière/Sphere.svelte';
