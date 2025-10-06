<script lang="ts">
	import { type ExerciceProps, afficher_énoncé, afficher_réponse, récupération_des_données } from './utils';
	let { niveau, id_exercice }: ExerciceProps = $props();

	let questions_répondues = $state(0);
	let bonnes_réponses = $state(0);

	let énoncé = $state({ type: '', contenu: '' });
	let format_réponses = $state('');
	let index_bonne_réponse = $state(-1);
	let réponses: string[] = $state([]);

	async function vérifier_réponse(index: number) {
		if (index === index_bonne_réponse) {
			bonnes_réponses++;
		}
		questions_répondues++;
		await charger_nouvelle_question();
	}

	async function charger_nouvelle_question() {
		let nouvelle_question = await récupération_des_données(niveau, id_exercice);
		énoncé = nouvelle_question.énoncé;
		format_réponses = nouvelle_question.format_réponses;
		index_bonne_réponse = nouvelle_question.index_bonne_réponse;
		réponses = nouvelle_question.réponses;
	}

	$effect.root(() => {
		charger_nouvelle_question();
	});
</script>

<div class="affichage_exercice">
	<div class="enonce"><center>{@html afficher_énoncé(énoncé)}</center></div>
	<div class="reponses">
		{#each réponses as réponse, index}
			<button class="réponse" class:bonne={index === index_bonne_réponse} onclick={() => vérifier_réponse(index)}>
				{@html afficher_réponse(réponse, format_réponses)}
			</button>
		{/each}
	</div>
	<div class="statistiques">
		{bonnes_réponses}/{questions_répondues}
	</div>
</div>

<style>
	div.affichage_exercice {
		z-index: 10;
		position: fixed;
		top: 20%;
		left: 20%;
		width: 60%;
		height: 60%;
		background-color: rgba(0.2, 0.2, 0.2, 0.9);
		font-size: calc(var(--font-size) * 2);
	}
	div.enonce {
		color: white;
		width: 100%;
		height: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	div.reponses {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		height: 20%;
	}
	button {
		width: 15%;
		height: 100%;
		font-size: calc(var(--font-size) * 2);
	}
	div.statistiques {
		position: absolute;
		color: white;
		right: 2%;
		bottom: 2%;
		z-index: 11;
	}

	@media (aspect-ratio < 1) {
		div.enonce {
			height: 40%;
		}
		div.reponses {
			flex-direction: row;
			height: 60%;
		}
		button {
			width: 100%;
			height: 18%;
		}
		div.statistiques {
			bottom: 60%;
		}
	}
</style>
