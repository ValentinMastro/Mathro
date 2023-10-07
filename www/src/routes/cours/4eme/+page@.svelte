<script lang="ts">
	import MenuChapitre from "$lib/MenuChapitre.svelte";
</script>

<svelte:head>
	<title>Cours : 4ème</title>
	<meta name="description" content="Cours de quatrième" />
</svelte:head>

<a href="/evaluations/4eme/01">
    <div id="menu_eval">
        <div id="evaluation">
            Évaluations
        </div>
    </div>
</a>

<div id="menu">
    <MenuChapitre   index={0} 
                    titre="Opérations" 
                    url="/cours/4eme/chapitre00"
                    cats={["Nombres et calculs"]}
                    img="/images/Euclide.jpg" >
        <ol>
            <li>Natures des nombres</li>
            <li>Les 5 opérations de bases</li>
            <li>La priorité des opérations</li>
        </ol>
    </MenuChapitre>
    <MenuChapitre   index={1} 
                    titre="Théorème de Pythagore" 
                    url="/cours/4eme/chapitre01"
                    cats={["Espace et géométrie", "Grandeurs et mesures"]}
                    img="/images/Pythagoras.jpg" >
        <ol>
            <li>Carré et racine carrée</li>
            <li>Triangle rectangle et hypoténuse</li>
            <li>Énoncé et application du théorème</li>
        </ol>
    </MenuChapitre>
    <MenuChapitre   index={2} 
                    titre="Fractions et proportionnalité" 
                    url="/cours/4eme/chapitre02"
                    cats={["Nombres et calculs"]}
                    img="/images/gateau.png" >
        <ol>
            <li>Calculs fractionnaires</li>
            <li>Pourcentages</li>
            <li>Échelle</li>
        </ol>
    </MenuChapitre>
    <MenuChapitre   index={3}  
                    titre="Solides de l'espace" 
                    url="/cours/4eme/chapitre03"
                    cats={["Espace et géométrie", "Grandeurs et mesures"]}
                    img="/images/rubik.jpg" >
        <ol>
            <li>Volume et contenance</li>
            <li>Solides de l'espace</li>
        </ol>
    </MenuChapitre>
    <MenuChapitre   index={4} 
                    titre="Calcul littéral" 
                    url="/cours/4eme/chapitre04"
                    cats={["Nombres et calculs"]}
                    img="/images/inconnue.jpg" >
        <ol>
            <li>Expression littérale</li>
            <li>Développer, factoriser et réduire</li>
        </ol>
    </MenuChapitre>
    <MenuChapitre   index={5} 
                    titre="Théorème de Thalès" 
                    url="/cours/4eme/chapitre05"
                    cats={["Espace et géométrie", "Grandeurs et calculs"]}
                    img="/images/thales.jpg" >
        <ol>
            <li>Angles et parallélisme</li>
            <li>Énoncé</li>
        </ol>
    </MenuChapitre>
    <MenuChapitre   index={6} 
                    titre="Puissances" 
                    url="/cours/4eme/chapitre06"
                    cats={["Nombres et calculs"]}
                    img="/images/echecs.jpg" >
        <ol>
            <li>Les puissances de 10</li>
            <li>Puissances à base quelconque</li>
        </ol>
    </MenuChapitre>
    <MenuChapitre   index={7} 
                    titre="Statistiques" 
                    url="/cours/4eme/chapitre07"
                    cats={["Organisation et gestion de données"]}
                    img="/images/diagramme.png" >
        <ol>
            <li>Indicateurs de position</li>
            <li>Diagrammes et graphiques</li>
            <li>Fréquences</li>
        </ol>
    </MenuChapitre>
    <MenuChapitre   index={8} 
                    titre="Cosinus" 
                    url="/cours/4eme/chapitre08"
                    cats={["Espace et géométrie", "Grandeurs et mesures"]}
                    img="/images/cosinus.png" >
        <ol>
            <li>Les côtés dans un triangle rectangle</li>
            <li>Cosinus d'un angle</li>
        </ol>
    </MenuChapitre>
    <MenuChapitre   index={9} 
                    titre="Équation" 
                    url="/cours/4eme/chapitre09"
                    cats={["Nombres et calculs"]}
                    img="/images/equation.png" >
        <ol>
            <li>Concept</li>
            <li>Résolutions d'équations du premier degré</li>
        </ol>
    </MenuChapitre>
    <MenuChapitre   index={10} 
                    titre="Probabilités" 
                    url="/cours/4eme/chapitre10"
                    cats={["Organisation et gestion de données"]}
                    img="/images/des.jpg" >
        
    </MenuChapitre>
    <MenuChapitre   index={11} 
                    titre="Transformations du plan" 
                    url="/cours/4eme/chapitre11"
                    cats={["Espace et géométrie"]}
                    img="/images/symetrie_axiale.jpg" >
        <ol>
            <li>Symétrie axiale</li>
            <li>Symétrie centrale</li>
            <li>Translation</li>
        </ol>
    </MenuChapitre>
    <MenuChapitre   index={12} 
                    titre="Décompositions en facteurs premiers" 
                    url="/cours/4eme/chapitre12"
                    cats={["Nombres et calculs"]}
                    img="/images/tesla-map.jpg" >
        <ol>
            <li>Les nombres premiers</li>
            <li>Théorème fondamental de l'arithmétique</li>
        </ol>
    </MenuChapitre>
    <MenuChapitre   index={13} 
                    titre="Repérage sur un pavé droit" 
                    url="/cours/4eme/chapitre13"
                    cats={["Espace et géométrie"]}
                    img="/images/repere_3d.jpg" >
        <ol>
            <li>Sur une droite (1 dimension)</li>
            <li>Sur un plan (2 dimensions)</li>
            <li>Dans l'espace, sur un pavé droit (3 dimensions)</li>
        </ol>
    </MenuChapitre>
    <MenuChapitre   index={14}
                    titre="Réciproques"
                    url="cours/4eme/chapitre14"
                    cats={["Espace et géométrie", "Grandeurs et mesures"]}
                    img="/images/double_fleche.png" >
        <ol>
            <li>Réciproque du théorème de Thalès</li>
            <li>Réciproque du théorème de Pythagore</li>
        </ol>
    </MenuChapitre>
</div>

<style>
    div#menu_eval {
        display: flex;
        justify-content: center;
        width: 100%;
        margin-bottom: 15px;
    }
    div#evaluation {
        background-color: white;
        color: black;
        width: 28vw;
        font-size: 3ex;
        text-align: center;
    }
    div#menu {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        row-gap: 50px;
    }
    ol {
        padding: 10px;
    }
    ol li {
        list-style-type: none;
        counter-increment: step-counter;
    }
    ol li:before {
        content: counter(step-counter, upper-roman) " - ";
    }

    @media (max-width: 1050px) {
        div#evaluation {
            width: 90vw;
        }
    }
</style>