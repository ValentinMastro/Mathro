<script lang="ts">
	import type { Classe } from '../types';
	export let classe: Classe;
</script>

<div class="resume">
	<div class="eleves">
		<div>
			{classe.eleves.length} élève{classe.eleves.length > 1 ? 's' : ''}
		</div>
		<div class="genre">
			<div>
				{classe.eleves.filter((eleve) => eleve.genre === 'F').length} ♀
			</div>
			<div>
				{classe.eleves.filter((eleve) => eleve.genre === 'G').length} ♂
			</div>
		</div>
	</div>
	<div class="niveau">
		<div>
			<div class="A">
				{classe.eleves.filter((eleve) => eleve.niveau === 'A').length} A
			</div>
			<div class="B">
				{classe.eleves.filter((eleve) => eleve.niveau === 'B').length} B
			</div>
		</div>
		<div>
			<div class="C">
				{classe.eleves.filter((eleve) => eleve.niveau === 'C').length} C
			</div>
			<div class="D">
				{classe.eleves.filter((eleve) => eleve.niveau === 'D').length} D
			</div>
		</div>
	</div>
	<div class="separateur"></div>
	<div class="attitude">
		<div class="M">
			{classe.eleves.filter((eleve) => eleve.moteur).length} M
		</div>
		<div class="Z">
			{classe.eleves.filter((eleve) => eleve.zozo).length} Z
		</div>
	</div>
</div>

<style>
	.resume {
		margin-top: auto;
		background-color: green;
		width: 100%;
		height: 5%;

		display: flex;
	}
	.eleves {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 40%;
		background-color: black;
	}
	.genre {
		display: flex;
		justify-content: space-evenly;
		width: 100%;
	}
	.niveau {
		display: flex;
		width: 40%;
		justify-content: space-evenly;
	}
	.A {
		background-color: darkgreen;
	}
	.B {
		background-color: green;
	}
	.C {
		background-color: rgb(214, 120, 6);
	}
	.D {
		background-color: darkred;
	}
	.M {
		background-color: darkblue;
	}
	.Z {
		background-color: darkred;
	}
	.niveau div {
		width: 50%;
		display: flex;
		flex-direction: column;
	}
	.niveau div div {
		height: 50%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.attitude {
		display: flex;
		flex-direction: column;
		width: 19%;
		height: 100%;
		justify-content: space-evenly;
	}
	.attitude div {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 50.1%;
	}
	.separateur {
		background-color: black;
		width: 1%;
		height: 100%;
	}
</style>
