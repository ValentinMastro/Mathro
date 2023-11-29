<script lang="ts">
	export let index: number;
	export let url: string;
	export let titre: string;
    export let cats: string[];
    export let img: string = "https://placehold.co/165x265";

	let categories = [
            { nom: "Nombres et calculs", visible: false, couleur: "rgb(52, 128, 234)" },
            { nom: "Organisation et gestion de données", visible: false, couleur: "red" },
            { nom: "Grandeurs et mesures", visible: false, couleur: "orange" },
            { nom: "Espace et géométrie", visible: false, couleur: "green" },
            { nom: "Algorithmique et programmation", visible: false, couleur: "purple" }    
        ]
    
    cats.forEach(element => {
        for (var i = 0; i < categories.length; i++) {
            if (categories[i].nom == element) {
                categories[i].visible = true
            }
        }
    });
</script>

<a href={url} data-sveltekit-reload data-sveltekit-preload-data="off">
	<div id="carte">
        <img src={img} alt="Image d'illustration du chapitre {index}" />
        <div id="description">
            <div id="chapitre">
                <div id="numero">
                    <span id="index">Chapitre {index.toLocaleString('fr', { minimumIntegerDigits: 2 })}</span>
                </div>
                <div id="titre">
                    <span>{titre}</span>
                </div>
            </div>
            <div id="sommaire">
                <i><slot /></i>
            </div>
            <div id="categories">
                {#each categories as categorie}
                    {#if (categorie.visible)}
                        <div class="categorie" 
                            style="background-color: {categorie.couleur};">{categorie.nom}</div>
                    {/if}
                {/each}
            </div>
        </div>
	</div>
</a>

<style>
    img {
        aspect-ratio: 33/53;
    }
    a {
        text-decoration: none;
    }
	div#carte {
		background-color: white;
		width: 28vw;
		height: 265px;
		color: rgb(55, 55, 55);

		display: flex;
		flex-direction: row;
	}
    div#description {
        width: calc(28vw - 165px);
        display: flex;
        flex-direction: column;
    }
	div#numero,
	div#titre {
		text-align: center;
		vertical-align: middle;
	}
	div#numero {
		font-size: 3ex;
		font-weight: bold;
	}
    div#sommaire {
        height: 100%;
        padding: 8px;
    }
    div#categories {
        height: 35px;
        display: flex;
        flex-direction: row;
        align-items: center;
        column-gap: 4px;
        padding-left: 4px;

        background-color: rgb(245, 245, 245);
    }
    div.categorie {
        border-radius: 10px;
        color: white;

        font-size: 10px;
        text-decoration: none;
        display: inline-block;
        font-weight: 700;
        height: 18px;
        line-height: 18px;
        padding: 0 9px;
        text-transform: lowercase;
    }

    @media (max-width: 1630px) {
        div#carte {
            width: 45vw;
        }
        div#description {
            width: calc(45vw - 165px);
        }
    }

    @media (max-width: 1050px) {
        div#carte {
            width: 90vw;
        }
        div#description {
            width: calc(90vw - 165px);
        }
    }
</style>
