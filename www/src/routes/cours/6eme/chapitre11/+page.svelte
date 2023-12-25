<script lang="ts">
	import Chapitre from "$lib/chapitrage/Chapitre.svelte";
	import Partie from "$lib/chapitrage/Partie.svelte";
    import Definition from "$lib/chapitrage/sections/Definition.svelte";
    import Exemples from "$lib/chapitrage/sections/Exemples.svelte";
	import Paragraphe from "$lib/chapitrage/sections/Paragraphe.svelte";
	import Remarque from "$lib/chapitrage/sections/Remarque.svelte";
</script>

<Chapitre numero={11} titre="Dates, horaires et durées">
    <Partie numero={1}  titre="Jours et années">
        <svg viewBox="0 0 1000 200" style="width: 80%;">
            <defs>
                <g id="terre">
                    <circle cx="50" cy="50" r="15" fill="blue"/>
                </g>
                <g id="soleil">
                    <circle cx="0" cy="0" r="40" fill="yellow"/>
                </g>
                <ellipse id="trajectoire_terre" cx="450" cy="50" rx="350" ry="60" />
            </defs>
            
            <use href="#trajectoire_terre" stroke="black" stroke-width="2" fill="none" x="50" y="50"  stroke-dasharray="12 2"/>
            <use href="#terre" x="0" y="0">
                <animateMotion dur="10s" repeatCount="indefinite">
                    <mpath href="#trajectoire_terre" />
                </animateMotion>
            </use>
            <use href="#soleil" x="500" y="50%" />
        </svg>
        <Definition>
            Une année, au sens de l'astronomie, est la durée d'une révolution de la Terre autour du Soleil.<br>
            Au sens légal, une année dure 365 jours, sauf les années bissextiles qui durent 366 jours.
            <ul>
                <li>1000 ans : un millénaire</li>
                <li>100 ans : un siècle</li>
                <li>10 ans : une décennie</li>
                <li>5 ans : un lustre</li>
                <li>4 ans : une olympiade</li>
            </ul>
        </Definition>
        <Exemples>
            2023 fait partie :
            <ul>
                <li>du 3<sup>e</sup> millénaire (de 2001 à 3000)</li>
                <li>du 21<sup>e</sup> siècle (de 2001 à 2100)</li>
                <li>de la 203<sup>e</sup> décennie (de 2021 à 2030)</li>
            </ul>
        </Exemples>
        <Paragraphe couleur="red" nom="Méthode">
            Pour déterminer le siècle d'une année, on s'intéresse au nombre des centaines, et 
            on ajoute 1 (sauf pour la dernière année du siècle).
        </Paragraphe>
        <Exemples>
            <ul>
                <li>Sacre de Napoléon I<sup>er</sup> : 1804 &xrarr; 19<sup>e</sup> siècle</li>
                <li>Bataille de Marignan : 1515 &xrarr; 16<sup>e</sup> siècle</li>
                <li>Sacre de Charlemagne : 800 &xrarr; 8<sup>e</sup> siècle</li>
                <li>Décès de Jules César : 44 avant J.-C. &xrarr; 1<sup>er</sup> siècle avant J.-C.</li>
            </ul>
        </Exemples>
    </Partie>
    <Partie numero={2} titre="Jours et heures">
        <Definition>
            Un jour est la durée d'une rotation de la Terre sur elle-même.
            <ul>
                <li>1 jour = 24 heures</li>
                <li>1 heure = 60 minutes</li>
                <li>1 minute = 60 secondes</li>
            </ul>
        </Definition>
        <Paragraphe couleur="red" nom="Convention">
            Forme simplifiée de l'écriture d'une date en France : <code>jour/mois/année</code><br>
            Forme développée : <code>Le [Nom du jour] jour [Nom du mois] année</code>
        </Paragraphe>
        <Exemples>
            21/12/2023<br>
            Le jeudi 21 décembre 2023
        </Exemples>
        <Remarque>
            Dans le monde anglo-saxon, on peut trouver le format <code>mois/jour/année</code>.<br>
            Ce qui donnerait alors : <i>Thursday, December 21<sup>st</sup>, 2023</i>
        </Remarque>
    </Partie>
</Chapitre>