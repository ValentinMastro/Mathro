<svelte:head>
	<title>Accueil</title>
	<meta name="description" content="Cours et exercices de mathématiques" />
</svelte:head>

<div id="accueil">
	<div id="sigma">Σ</div>
	<div id="menu" data-sveltekit-reload>
		<div id="4eme" class="niveau">
			<a href="/cahier_de_cours/4eme">4ème</a>
		</div>
		<div id="6eme" class="niveau">
			<a href="/cours/6eme">6ème</a>
		</div>
		<div id="scratch" class="niveau">
			<a href="/scratch">
				Scratch 
				<img 	id="scratch_cat"
						src="/for_scratch/ScratchCat3.0.svg" 
						alt="Scratch Cat"
						>
			</a>
		</div>
	</div>
</div>
<div id="outils">
	<a href="/outils">Outils</a>
</div>

<style>
	#outils {
		position: fixed;
		bottom: 0;
		left: 0;
	}
	div#accueil {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		height: 100vh;
	}
	div#menu {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	div#sigma {
		font-size: 30vw;
	}
	div.niveau {
		font-size: 5vw;
		margin-left: 1em;
	}
	a {
		text-decoration: none;
	}
	img#scratch_cat {
		vertical-align: -3px;
	}
	@media (min-aspect-ratio: 1) {
		img#scratch_cat {
			width: 4vw;
		}
	}
	@media (max-aspect-ratio: 1) {
		div#accueil {
			flex-direction: column;
		}
		div#sigma {
			font-size: 30vh;
		}
		div.niveau {
			margin: 0;
			font-size: 5vh;
		}
		img#scratch_cat {
			height: 5vh;
		}
	}
</style>