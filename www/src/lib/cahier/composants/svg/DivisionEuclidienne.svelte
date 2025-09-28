<!--
    @component

    ## DivisionEuclidienne
    Division euclidienne de a par b

    ### Props
    - `c` (*number*) : taille d'un carreau
    - `dividende` (*number*) : dividende de la division euclidienne
    - `diviseur` (*number*) : diviseur de la division euclidienne
    - `étape` (*number*) : étape actuelle de la division euclidienne
-->

<script lang="ts">
	import { Fleche, Polylignes, SegmentHorizontal, SegmentVertical } from './*';
	let ceil = Math.ceil;
	let floor = Math.floor;
	let log10 = Math.log10;
	let max = Math.max;
	const COULEURS = ['red', 'blue', 'green', 'purple', 'orange'];

	type Props = {
		c: number;
		dividende: number;
		diviseur: number;
		étape: number;
	};

	let { c, dividende, diviseur, étape }: Props = $props();

	let quotient = $derived(floor(dividende / diviseur));
	let reste = $derived(dividende % diviseur);

	let taille_dividende = $derived(ceil(log10(dividende)));
	let taille_diviseur = $derived(ceil(log10(diviseur)));
	let taille_quotient = $derived(ceil(log10(quotient)));

	let nombre_étapes = $derived(taille_quotient);
	let données_étapes = $derived.by(() => {
		let étapes = [];
		for (let i = 0; i < nombre_étapes; i++) {
			let chiffre_quotient = Number.parseInt(quotient.toString().split('')[i]);
			let fill = COULEURS[i % COULEURS.length];
			let numéro = i + 1;
			let nombre_soustrait = 0;
			let nombre_à_soustraire = chiffre_quotient * diviseur;
			let position_dernier_chiffre = 0;

			if (numéro === 1) {
				let chiffres_dividende = 0;
				while (nombre_soustrait <= diviseur) {
					chiffres_dividende += 1;
					if (chiffres_dividende >= taille_dividende) {
						nombre_soustrait = dividende;
						break;
					}
					nombre_soustrait = Number.parseInt(dividende.toString().split('').slice(0, chiffres_dividende).join(''));
					position_dernier_chiffre = chiffres_dividende;
				}
			} else {
				// Accès sécurisé à l'élément précédent
				let element_precedent = étapes[i - 1];
				position_dernier_chiffre = element_precedent.position_dernier_chiffre + 1;
				nombre_soustrait = element_precedent.reste * 10 + Number.parseInt(dividende.toString().split('')[position_dernier_chiffre - 1]);
			}

			let reste = nombre_soustrait - nombre_à_soustraire;
			étapes.push({
				chiffre_quotient,
				fill,
				numéro,
				nombre_soustrait,
				nombre_à_soustraire,
				reste,
				position_dernier_chiffre
			});
		}
		return étapes;
	});

	$inspect(données_étapes);
</script>

<!-- Structure -->
<SegmentVertical x={(1 + taille_dividende) * c} y1={0} y2={12 * c} />
<SegmentHorizontal y={1 * c} x1={(1 + taille_dividende) * c} x2={(1 + taille_dividende + max(taille_diviseur, taille_quotient)) * c} />
<text x={2 * c} y={1 * c}>{dividende}</text>
<text x={(2 + taille_dividende) * c} y={1 * c}>{diviseur}</text>

{#each données_étapes as { chiffre_quotient, fill, numéro, nombre_soustrait, nombre_à_soustraire, reste, position_dernier_chiffre }}
	{#if étape >= numéro}
		{#if numéro == 1}
			<!-- Sélecteur -->
			{@const A = { x: 1 * c, y: 0.4 * c }}
			{@const B = { x: A.x, y: 0.02 * c }}
			{@const C = { x: A.x + ceil(log10(nombre_soustrait)) * c, y: B.y }}
			{@const D = { x: C.x, y: A.y }}
			<Polylignes points={[A, B, C, D]} stroke={fill} />
		{/if}
		{#if numéro > 1}
			<!-- Flèche -->
			{@const UP = { x: (position_dernier_chiffre + 0.5) * c, y: 1 * c }}
			{@const DOWN = { x: UP.x, y: 2 * c }}
			<Fleche points={[UP, DOWN]} taille={10} />
			{@const chiffre_a_descendre = Number.parseInt(dividende.toString().split('')[position_dernier_chiffre - 1])}
			<text x={(position_dernier_chiffre + 1) * c} y={(2 * numéro - 1) * c}>{chiffre_a_descendre}</text>
		{/if}
		<SegmentHorizontal x1={0} x2={(1 + position_dernier_chiffre) * c} y={2 * numéro * c} stroke={fill} />
		{@const reste_avec_zeros = reste.toString().padStart(ceil(log10(nombre_soustrait)), '0')}
		<text class="anchor_end" x={(2 + position_dernier_chiffre) * c} y={(2 * numéro + 1) * c} {fill}>{reste_avec_zeros}</text>
		<text x={(1 + taille_dividende + numéro) * c} y={2 * c} {fill}>{chiffre_quotient}</text>
		<text class="anchor_end" x={(4 + numéro) * c} y={2 * numéro * c} {fill}>{-nombre_à_soustraire}</text>
	{/if}
{/each}

<style>
	text {
		font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace;
		font-size: 65px;
		letter-spacing: 0.43em;
		dominant-baseline: middle;
		transform: translate(-53px, -25px);
	}
	.anchor_end {
		text-anchor: end;
	}
</style>
