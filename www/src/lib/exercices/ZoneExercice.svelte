<script lang="ts">
	export let enonce: string;
	export let reponse: any;
	export let genererQuestion: (enonce: string, reponse: any) => void;
	export let verifierReponse: (valeur: string) => boolean;

	let enonces: string[] = [];
	let reponses_correctes: string[] = [];
	let reponses_utilisateur: string[] = [];
	let reponses_sont_correctes: boolean[] = [];
	let nombre_questions_repondues = 0;

	function gererToucheAppuyee(event: KeyboardEvent): void {
		let input = event.target as HTMLInputElement;
		let valeur = input.value;

		if (event.key === 'Enter') {
			enonces.push(enonce);
			reponses_utilisateur.push(valeur);
			reponses_correctes.push(reponse);
			reponses_sont_correctes.push(verifierReponse(valeur));

			nombre_questions_repondues++;
			input.value = '';
			genererQuestion(enonce, reponse);
		}
	}

	function reset() {
		enonces = [];
		reponses_utilisateur = [];
		reponses_sont_correctes = [];
		nombre_questions_repondues = 0;
		genererQuestion(enonce, reponse);
	}

	genererQuestion(enonce, reponse);
</script>

<div id="zone_exercice">
	<div id="racine">
		{#if nombre_questions_repondues == 20}
			<div class="note" role="button" tabindex="0" on:click={reset} on:keypress={reset}>
				<span>{reponses_sont_correctes.filter((r) => r).length} / {reponses_sont_correctes.length}</span>
			</div>
		{:else}
			<div id="enonce">
				<span>{enonce}</span>
			</div>
			<div id="input">
				<input type="number" style="width: 100%; height: 90%; font-size: 2em; text-align: center;" on:keypress={gererToucheAppuyee} />
			</div>
			<div id="resultat">
				{#each Array(20) as _, index}
					{#if index < nombre_questions_repondues}
						<div class="reponse {reponses_sont_correctes[index] ? 'bonne_reponse' : 'mauvaise_reponse'}"></div>
					{/if}
				{/each}
			</div>
		{/if}
	</div>
	{#if nombre_questions_repondues == 20}
		<div id="details">
			<table>
				<tbody>
					{#each enonces as enonce, index}
						<tr>
							<td>Q{index + 1}{')'} {enonce}</td>
							{#if !reponses_sont_correctes[index]}
								<td> <span style="color: red; text-decoration: line-through;">{reponses_utilisateur[index]}</span> </td>
								<td> <span>{reponses_correctes[index]}</span> </td>
							{:else}
								<td> <span style="color: green;">{reponses_utilisateur[index]}</span> </td>
							{/if}
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	{/if}
</div>

<style>
	#zone_exercice {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
	#racine {
		aspect-ratio: 2/1;
		width: 20vw;
		border: 1px solid black;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}
	#details {
		height: 10vw;
		overflow: scroll;
	}
	#enonce {
		height: 45%;
		color: black;
		font-size: 130%;
		font-family: Katex_Main;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	#input {
		--taille: calc(35%);
		height: var(--taille);
		font-family: Katex_Main;
		font-size: calc(var(--taille) * 2);
		width: 90%;
		margin: auto auto;
	}
	#resultat {
		height: 5%;
		display: flex;
		flex-direction: row;
		padding-bottom: 2px;
		padding-left: 2px;

		column-gap: calc(2.5%);
	}
	.reponse {
		height: 100%;
		aspect-ratio: 1;
		border-radius: 50%;
	}
	.bonne_reponse {
		background-color: green;
	}
	.mauvaise_reponse {
		background-color: red;
	}
	span {
		width: fit-content;
		height: fit-content;
	}
	.note {
		background-color: black;
		width: 100%;
		height: 100%;
		font: 4vw Katex_Main;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.note span {
		color: white;
	}
	table {
		font: 0.96vw Katex_Main;
		color: black;
		border-collapse: collapse;
	}
	table tr {
		height: fit-content;
	}
	table td {
		padding: 0 10px 0 0;
	}
	table td:nth-child(2) {
		padding-left: 3px;
		border-left: 3px double black;
	}
	table tr:nth-child(odd) {
		background-color: #bbbbbb;
	}
	@media (max-aspect-ratio: 1) {
		#racine {
			width: 60vw;
		}
	}
</style>
