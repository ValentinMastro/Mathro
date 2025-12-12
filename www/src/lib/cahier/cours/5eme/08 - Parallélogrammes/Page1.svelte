<script lang="ts">
	import { Chapitre, Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Item, Paragraphe, Propriete, Proprietes, Schema, Texte } from '$lib/cahier/composants/de_cours/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';
	import { Codage, Polygone, TexteSVG } from '$lib/cahier/composants/svg/*';
	import { math } from 'mathlifier';

	let A = { x: 200, y: 200 };
	let B = { x: 1400, y: 200 };
	let C = { x: B.x + 800, y: 800 };
	let D = { x: A.x + 800, y: 800 };

	let points = [A, B, C, D];
</script>

<Chapitre titre="Parallélogrammes" />

<Contenu apres_un_titre>
	<Partie numero={1} titre="Définition et constructions" />
	<Definition lignes={2}>Un parallélogramme est un quadrilatère qui a ses côtés opposés parallèles.</Definition>
	<Schema lignes={5} aspectRatioSVG={3}>
		{#snippet svg()}
			<Polygone {points} afficher_noms taille_nom={110} distance_nom={100} stroke-width={10} />
			<TexteSVG point={{ x: 2500, y: 300 }} font-size={110}>(AB) // (DC)</TexteSVG>
			<TexteSVG point={{ x: 2500, y: 500 }} font-size={110}>(AD) // (BC)</TexteSVG>
		{/snippet}
	</Schema>
	<Propriete>Les côtés opposés d'un parallélogramme sont de même longueur.</Propriete>
	<Schema lignes={5} aspectRatioSVG={3}>
		{#snippet svg()}
			<Polygone {points} afficher_noms taille_nom={110} distance_nom={100} stroke-width={10} />
			<Codage points={[A, B]} type="2 traits" stroke="red" stroke-width={10} />
			<Codage points={[C, D]} type="2 traits" stroke="red" stroke-width={10} />
			<Codage points={[A, D]} type="3 traits" stroke="green" stroke-width={10} />
			<Codage points={[B, C]} type="3 traits" stroke="green" stroke-width={10} />
		{/snippet}
	</Schema>
	<Proprietes lignes={5}>
		<Item>Les angles opposés d'un parallélogramme sont de même mesure.</Item>
		<Item>Deux angles intérieurs consécutifs sont supplémentaires.</Item>
		<Item>Les diagonales d'un parallélogramme se coupent en leur milieu.</Item>
		<Item lignes={2}>La somme des mesures des angles d'un parallélogramme est de 360°.</Item>
	</Proprietes>
</Contenu>
