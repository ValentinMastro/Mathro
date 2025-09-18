<script lang="ts">
	import { Chapitre, Contenu, DansLaMarge, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { TheoremeDefinition, Exemples, Item, Schema } from '$lib/cahier/composants/de_cours/*';
	import { Nombre } from '$lib/cahier/composants/de_marge/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';
	import { Fleche } from '$lib/cahier/composants/svg/*';
	import { math } from 'mathlifier';

	let dividende = $state(1997);
	let diviseur = $state(28);
	let quotient = $derived(Math.floor(dividende / diviseur));
	let reste = $derived(dividende % diviseur);
	let étape = $state(5);

	// Fonction utilitaire pour obtenir les chiffres d'un nombre
	function getDigits(number: number): number[] {
		return String(number).split('').map(Number);
	}

	// Calcul des étapes de la division
	let étapes = $derived.by(() => {
		let tempDividende = dividende;
		let digitsDividende = getDigits(dividende);
		let digitsDiviseur = getDigits(diviseur);
		let position = 0;
		let étapes = [];
		let currentDividend = parseInt(digitsDividende.slice(0, digitsDiviseur.length).join(''));

		// Étape 1: Première division partielle
		let partialQuotient = Math.floor(currentDividend / diviseur);
		étapes.push({
			partialDividend: currentDividend,
			partialQuotient: partialQuotient,
			reste: currentDividend - partialQuotient * diviseur,
			position: digitsDiviseur.length - 1,
			color: 'red'
		});

		// Étapes suivantes
		position++;
		while (position < digitsDividende.length && étapes[étapes.length - 1].reste !== 0) {
			let newPartialDividend: number = étapes[étapes.length - 1].reste * 10 + digitsDividende[position];
			let newPartialQuotient = Math.floor(newPartialDividend / diviseur);
			étapes.push({
				partialDividend: newPartialDividend,
				partialQuotient: newPartialQuotient,
				reste: newPartialDividend - newPartialQuotient * diviseur,
				position: position,
				color: position === 1 ? 'forestgreen' : position === 2 ? 'blue' : 'purple'
			});
			position++;
		}
		return étapes;
	});
</script>

<Chapitre titre="Nombres premiers" />
<DansLaMarge apres_un_titre>
	<LigneVide lignes={10} />
	<Nombre bind:valeur={dividende} label="dividende" min={1000} max={9999} />
	<Nombre bind:valeur={diviseur} label="diviseur" min={10} max={99} />
</DansLaMarge>

<Contenu apres_un_titre>
	<Partie numero={1} titre="Division euclidienne" />
	<TheoremeDefinition lignes={5}>
		À deux nombres entiers, le <i>dividende</i> et le <i>diviseur</i>, on associe deux autres nombres entiers, le <i>quotient</i> et le <i>reste</i>,
		<u>de manière unique</u>, tels que :
		<Item>{@html math('\\text{dividende} ~= \\text{diviseur} ~\\times \\text{quotient} ~+ \\text{reste}')}</Item>
		<Item>{@html math('0 \\leqslant \\text{reste} ~< \\text{diviseur}')}</Item>
	</TheoremeDefinition>
	<Exemples lignes={5}>
		<Item bullet="">{@html math(`${dividende} = ${diviseur} \\times ${quotient} + ${reste}`)}</Item>
		<Item>le dividende est {dividende}</Item>
		<Item>le diviseur est {diviseur}</Item>
		<Item>le quotient est {quotient}</Item>
		<Item>le reste est {reste}</Item>
	</Exemples>

	<Schema lignes={15} aspectRatioSVG={25 / 15}>
		{#snippet svg()}
			{@const c = 1000 / 15}
			<!-- Barres de division -->
			<g id="barre">
				<line
					x1={(8 + getDigits(diviseur).length) * c}
					x2={(8 + getDigits(diviseur).length) * c}
					y1={0 * c}
					y2={12 * c}
					stroke="black"
					stroke-width={4}
				/>
				<line
					x1={(8 + getDigits(diviseur).length) * c}
					y1={1 * c}
					x2={(13 + getDigits(diviseur).length) * c}
					y2={1 * c}
					stroke="black"
					stroke-width={4}
				/>
			</g>

			<!-- Diviseur -->
			{#each getDigits(diviseur) as digit, i}
				<text x={(9 + i) * c} y={1 * c}>{digit}</text>
			{/each}

			<!-- Dividende -->
			{#each getDigits(dividende) as digit, i}
				<text x={(1 + i) * c} y={1 * c}>{digit}</text>
			{/each}

			<!-- Étapes de la division -->
			{#each étapes as step, i}
				{#if étape >= i + 1}
					<!-- Quotient partiel -->
					<text x={(9 + getDigits(diviseur).length + i) * c} y={2 * c}>{step.partialQuotient}</text>

					<!-- Soustraction -->
					<rect
						x={(1 + step.position - getDigits(diviseur).length + 1) * c}
						y={(2 + i) * c}
						width={getDigits(diviseur).length * c}
						height={1 * c}
						opacity={0.2}
						fill={step.color}
					/>
					<text x={(1 + step.position - getDigits(diviseur).length + 1) * c} y={(2 + i) * c} fill={step.color}> - </text>
					{#each getDigits(step.partialQuotient * diviseur) as digit, j}
						<text x={(1 + step.position - getDigits(diviseur).length + 1 + j) * c} y={(2 + i) * c} fill={step.color}>
							{digit}
						</text>
					{/each}
					<line
						x1={(1 + step.position - getDigits(diviseur).length + 1) * c}
						x2={(1 + step.position + 1) * c}
						y1={(2 + i) * c}
						y2={(2 + i) * c}
						stroke={step.color}
						stroke-width={5}
					/>

					<!-- Reste -->
					{#if step.reste !== 0}
						<text x={(2 + step.position - getDigits(diviseur).length + 1) * c} y={(3 + i) * c}>
							{getDigits(step.reste).join('')}
						</text>
					{/if}

					<!-- Flèche pour abaisser le chiffre suivant -->
					{#if i < étapes.length - 1}
						<Fleche
							points={[
								{ x: (1.5 + step.position + 1) * c, y: 1 * c },
								{ x: (1.5 + step.position + 1) * c, y: (3 + i) * c }
							]}
							taille={18}
						/>
					{/if}
				{/if}
			{/each}
		{/snippet}
	</Schema>
</Contenu>

<style>
	text {
		font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace;
		font-size: 65px;
		text-align: middle;
		dominant-baseline: middle;
		transform: translate(-53px, -25px);
	}
</style>
