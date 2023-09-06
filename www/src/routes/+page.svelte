<svelte:head>
	<title>Accueil</title>
	<meta name="description" content="Cours et exercices de mathématiques" />
</svelte:head>

<div id="accueil">
	<div id="sigma">Σ</div>
	<div id="menu" data-sveltekit-reload>
		<div id="4eme" class="niveau"><a href="/cours/4eme">4ème</a></div>
		<div id="6eme" class="niveau"><a href="/cours/6eme">6ème</a></div>
	</div>
</div>

<style>
	div#accueil {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		height: 100vh;
	}
	div#sigma {
		font-size: 30vw;
	}
	div#sigma:hover + div#menu {
		display: block;
	}
	div.niveau {
		font-size: 5vw;
		margin-left: 1em;
	}
	a {
		text-decoration: none;
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
	}
</style>