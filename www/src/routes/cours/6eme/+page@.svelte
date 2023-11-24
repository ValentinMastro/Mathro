<script lang="ts">
	import MenuChapitre from "$lib/MenuChapitre.svelte";
</script>

<svelte:head>
	<title>Cours : 6ème</title>
	<meta name="description" content="Cours de quatrième" />
</svelte:head>

<div id="menu_eval">
    <a id="evaluation" href="/evaluations/6eme" >
        Évaluations
    </a>
    <a id="entrainement" href="/entrainement/6eme">
        Entraînement
    </a>
</div>

<div id="menu">
    <MenuChapitre   index={0} 
                    titre="Notation positionnelle des nombres" 
                    url="/cours/6eme/chapitre00"
                    cats={["Nombres et calculs"]}
                    img="/images/tableau_de_numeration.png" >
        <ol>
            <li>Chiffres et nombres</li>
            <li>Comparaison</li>
            <li>Encadrement</li>
        </ol>
    </MenuChapitre>
    <MenuChapitre   index={1} 
                    titre="Notation géométrique" 
                    url="/cours/6eme/chapitre01"
                    cats={["Espace et géométrie"]}
                    img="/images/droiteAB.svg" >
        <ol>
            <li>Droite, demi-droite, segment</li>
            <li>Polygones</li>
            <li>Points et appartenance</li>
        </ol>
    </MenuChapitre>
    <MenuChapitre   index={2} 
                    titre="Repérage et comparaison" 
                    url="/cours/6eme/chapitre02"
                    cats={["Espace et géométrie"]} >
        <ol>
            <li>Repérage sur une droite</li>
            <li>Comparaison et encadrement</li>
            <li>Repérage dans un plan</li>
        </ol>
    </MenuChapitre>
    <MenuChapitre   index={3}  
                    titre="Addition et soustraction" 
                    url="/cours/6eme/chapitre03"
                    cats={["Espace et géométrie", "Grandeurs et mesures"]} >
        <ol>
            <li>Addition</li>
            <li>Soustraction</li>
        </ol>
    </MenuChapitre>
    <MenuChapitre   index={4} 
                    titre="Angles" 
                    url="/cours/6eme/chapitre04"
                    cats={["Espace et géométrie", "Grandeurs et mesures"]} >
        <ol>
            <li>Concept</li>
            <li>Les types d'angles</li>
            <li>Les angles dans un triangle</li>
        </ol>
    </MenuChapitre>
    <MenuChapitre   index={5} 
                    titre="Fractions" 
                    url="/cours/6eme/chapitre05"
                    cats={["Nombres et calculs"]} >
        <ol>
            <li>Lien entre quotient et fraction</li>
            <li>Calculer la fraction d'un nombre</li>
            <li>Calculs</li>
        </ol>
    </MenuChapitre>
    <MenuChapitre   index={6}
                    titre="Cercle, centre, milieu, médiatrice" 
                    url="/cours/6eme/chapitre06"
                    cats={["Espace et géométrie"]} >
        <ol>
            <li>Cercle</li>
            <li>Médiatrice</li>
        </ol>
    </MenuChapitre>
    <MenuChapitre   index={7} 
                    titre="Multiplication" 
                    url="/cours/6eme/chapitre07"
                    cats={["Nombres et calculs"]} >
        <ol>
            <li>Multiplier et diviser par 1,10,100,etc.</li>
            <li>Conversion d'unités</li>
            <li>Multiplication décimale</li>
        </ol>
    </MenuChapitre>
    <MenuChapitre   index={8} 
                    titre="Droites parallèles et perpendiculaires" 
                    url="/cours/6eme/chapitre08"
                    cats={["Espace et géométrie"]} >
        <ol>
            <li>Constructions et définitions</li>
            <li>Relations entre trois droites</li>
        </ol>
    </MenuChapitre>
    <MenuChapitre   index={9} 
                    titre="Divisions" 
                    url="/cours/6eme/chapitre09"
                    cats={["Nombres et calculs"]} >
        <ol>
            <li>Division euclidienne</li>
            <li>Divisibilité</li>
            <li>Division décimale</li>
        </ol>
    </MenuChapitre>
    <MenuChapitre   index={10} 
                    titre="Triangles" 
                    url="/cours/6eme/chapitre10"
                    cats={["Espace et géométrie"]} >
        
    </MenuChapitre>
    <MenuChapitre   index={11} 
                    titre="Horaires et durées" 
                    url="/cours/6eme/chapitre11"
                    cats={["Grandeurs et mesures"]} >
        <ol>
            <li>Horaires</li>
            <li>Dates</li>
            <li>Conversion</li>
        </ol>
    </MenuChapitre>
    <MenuChapitre   index={12} 
                    titre="Proportionnalité" 
                    url="/cours/6eme/chapitre12"
                    cats={["Nombres et calculs", "Organisation et gestion de données"]} >
        <ol>
            <li>Grandeurs proportionnelles</li>
            <li>Quatrième proportionnelle</li>
            <li>Pourcentages</li>
        </ol>
    </MenuChapitre>
    <MenuChapitre   index={13}
                    titre="Enchaînement d'opérations"
                    url="/cours/6eme/chapitre13"
                    cats={["Nombres et calculs"]} >
    </MenuChapitre>
    <MenuChapitre   index={14}
                    titre="Quadrilatères"
                    url="cours/6eme/chapitre14"
                    cats={["Espace et géométrie"]} >
    </MenuChapitre>
    <MenuChapitre   index={15}
                    titre="Vitesse et grandeurs composées"
                    url="cours/6eme/chapitre15"
                    cats={["Grandeurs et mesures", "Nombres et calculs"]}
                    >
    </MenuChapitre>
    <MenuChapitre   index={16}
                    titre="Périmètres"
                    url="cours/6eme/chapitre16"
                    cats={["Espace et géométrie", "Grandeurs et mesures"]} >
    </MenuChapitre>
    <MenuChapitre   index={17}
                    titre="Tableaux et diagrammes"
                    url="cours/6eme/chapitre17"
                    cats={["Organisation et gestion de données"]} >
    </MenuChapitre>
    <MenuChapitre   index={18}
                    titre="Aires"
                    url="cours/6eme/chapitre18"
                    cats={["Espace et géométrie", "Grandeurs et mesures"]} >
    </MenuChapitre>
    <MenuChapitre   index={19}
                    titre="Échelles"
                    url="cours/6eme/chapitre19"
                    cats={["Grandeurs et mesures", "Nombres et calculs"]} >
    </MenuChapitre>
    <MenuChapitre   index={20}
                    titre="Solides et volumes"
                    url="cours/6eme/chapitre20"
                    cats={["Grandeurs et mesures", "Espace et géométrie"]} >
    </MenuChapitre>
    <MenuChapitre   index={21}
                    titre="Programmation"
                    url="cours/6eme/chapitre21"
                    cats={["Algorithmique et programmation"]} >
    </MenuChapitre>
</div>

<style>
    div#menu_eval {
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        margin-bottom: 15px;
    }
    div#menu_eval > a {
        text-decoration: none;
        background-color: white;
        color: black;
        font: normal 1.5em "Marianne";
        text-align: center;
        width: 15vw;

        --h: 35px;
        height: var(--h);
        line-height: var(--h);
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
</style>