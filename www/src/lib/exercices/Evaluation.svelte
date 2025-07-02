<script lang="ts">
	import { onMount } from 'svelte';
	import init, { rust_evaluation } from '@vmastro/exercices';

	import Question from './pour_evaluation/Question.svelte';
	import Explication from './pour_evaluation/Explication.svelte';

	export let niveau: number;
	export let numero_evaluation: number;
	let afficher_reponses: boolean = false;
	let afficher_mauvaises_reponses: boolean = false;
	let afficher_explications: boolean = false;
	let graine_selectionnee: number = 0;

	const TABLEAU: any[][][] = Array(256)
		.fill(0)
		.map(() =>
			Array(20)
				.fill(0)
				.map(() => [])
		);
	const KATEX_ENONCE: boolean[] = Array(20).fill(true);
	const KATEX_REPONSES: boolean[] = Array(20).fill(true);

	interface EvaluationInterface {
		evaluations: {
			questions: {
				type: 'QCM';
				enonce: string;
				reponse: {
					bonne: string;
					mauvaises: string[];
				};
				format_enonce: 'Texte' | 'Latex';
				format_reponses: 'Texte' | 'Latex' | 'Nombre' | { QuantitéAvecUnité: string };
				format_explication: 'Texte' | 'HTML' | 'LatexInline' | 'LatexDisplay';
				explication: string;
			}[];
		}[];
	}

	async function generer_evaluation(niveau: number, id_evaluation: number): Promise<EvaluationInterface> {
		await init();
		let donnees_evaluation: EvaluationInterface = JSON.parse(rust_evaluation(niveau, id_evaluation));
		return donnees_evaluation;
	}

	function changer_graine() {
		graine_selectionnee = (graine_selectionnee + 1) % 256;
	}

	let DONNEES_EVALUATIONS: EvaluationInterface = { evaluations: [] };

	onMount(async () => {
		DONNEES_EVALUATIONS = await generer_evaluation(niveau, numero_evaluation);
	});
</script>

<div class="options">
	<div class="selecteurs">
		<div>
			<input id="surbrillance_reponses" type="checkbox" bind:checked={afficher_reponses} />
			<label for="surbrillance_reponses">Afficher les réponses</label>
		</div>
		<div>
			<input id="cacher_mauvaises_reponses" type="checkbox" bind:checked={afficher_mauvaises_reponses} />
			<label for="cacher_mauvaises_reponses">Cacher les mauvaises réponses</label>
		</div>
		<div>
			<input id="explications" type="checkbox" bind:checked={afficher_explications} />
			<label for="explications">Afficher les explications</label>
		</div>
	</div>
	<div class="boutons">
		<input bind:value={graine_selectionnee} type="number" min={0} max={255} />
	</div>
</div>

<!--
    La variable TABLEAU contient les données faisant référence
    à toutes les évaluations (entre la n°0 et la n°255).
-->
<div class="tout">
	{#each DONNEES_EVALUATIONS.evaluations as evaluation, graine_index}
		<!-- Seule une seule évaluation (identifiée par sa graine) est affichée -->
		{#if graine_index == graine_selectionnee}
			<table>
				<tbody>
					<tr>
						<th style="width: 130px;">
							Évaluation n°{numero_evaluation}<br />
							{niveau}ème #{graine_index}
						</th>
						<th>Question</th>
						{#if afficher_mauvaises_reponses}
							<th>Réponse</th>
						{:else}
							<th>A</th>
							<th>B</th>
							<th>C</th>
							<th>D</th>
							<th>E</th>
						{/if}
					</tr>
					<!-- evaluation contient toutes les questions (en général 20) -->
					{#each evaluation.questions as question, numero_question}
						<Question
							enonce={question.enonce}
							reponses={question.reponse}
							type_enonce={{ type: question.format_enonce }}
							type_reponses={{ type: question.format_reponses }}
							{numero_question}
							bind:afficher_reponses
							bind:afficher_mauvaises_reponses
						/>
						{#if afficher_explications}
							<Explication explication={question.explication} format_explication={question.format_explication} />
						{/if}
					{/each}
				</tbody>
			</table>
			<div class="finpage"></div>
		{/if}
	{/each}
</div>

<style>
	.tout {
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	table {
		width: 100%;
		background-color: white;
		color: black;
		user-select: none;
	}
	tr {
		height: 48px;
	}
	table,
	tr {
		border-style: solid;
		border-collapse: collapse;
	}
	div.options {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 10px;
	}
	div.selecteurs {
		display: flex;
		flex-direction: column;
	}
	div.boutons {
		display: flex;
		column-gap: 10px;
	}
	@media print {
		.tout {
			display: block;
		}
		.finpage {
			break-before: page;
			clear: both;
		}
		div.options {
			display: none;
		}
		tr {
			height: fit-content;
		}
	}
</style>
