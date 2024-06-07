<script lang="ts">
    import { Chapitre, Partie, SousPartie } from "$lib/chapitrage/all_chapitrages";
    import { Definition, Propriete, Schema, Paragraphe, Formule, Exemples, Remarque } from "$lib/chapitrage/sections/all_sections";
    import { math, display } from 'mathlifier'; 
</script>

<Chapitre numero={21} titre="Programmation">
    <Partie numero={1} titre="Blocs et boucles">
        <Exemples singulier>
            On veut écrire un programme permettant de dessiner un carré.
            <div style="display: flex;">
                <ul>
                    <li>Avancer de 100 pas</li>
                    <li>Tourner de 90 degrés</li>
                    <li>Avancer de 100 pas</li>
                    <li>Tourner de 90 degrés</li>
                    <li>Avancer de 100 pas</li>
                    <li>Tourner de 90 degrés</li>
                    <li>Avancer de 100 pas</li>
                    <li>Tourner de 90 degrés</li>
                </ul>
                <svg viewBox="-25 -25 150 150" style="width: 10em">
                    <defs>
                        <style>
                            line {
                                stroke: black;
                                stroke-width: 1px;
                            }
                        </style>
                        <marker
                            id="triangle"
                            viewBox="0 0 10 10"
                            refX="1"
                            refY="5"
                            markerUnits="strokeWidth"
                            markerWidth="10"
                            markerHeight="10"
                            orient="auto">
                            <path d="M 0 0 L 10 5 L 0 10 z" />
                          </marker>
                    </defs>
                    <line x1="0" y1="0" x2="100" y2="0" marker-end="url(#triangle)"/>
                    <line x1="100" y1="0" x2="100" y2="100" marker-end="url(#triangle)"/>
                    <line x1="100" y1="100" x2="0" y2="100" marker-end="url(#triangle)"/>
                    <line x1="0" y1="100" x2="0" y2="0" marker-end="url(#triangle)"/>
                </svg>
            </div>
        </Exemples>
        <p style="color: red">
            Pour simplifier l'écriture du programme, on peut utiliser la boucle répéter :
        </p>
        <ul style="color: black">
            <li>Répéter 4 fois</li>
            <ul>
                <li>Avancer de 100 pas</li>
                <li>Tourner de 90 degrés</li>
            </ul>
        </ul>
        <Definition>
            Dans Scratch, un bloc est une instruction, un ordre, que l'on donne à la machine.
        </Definition>
        <Exemples>
            <ul>
                <li>Avancer de 100 pas</li>
                <li>Tourner à gauche de 90 degrés</li>
            </ul>
        </Exemples>
        <Definition>
            Une boucle permet de répéter une suite de blocs.
        </Definition>
        <Exemples>
            <ul>
                <li>Répéter 5 fois</li>
                <li>Répeter indéfiniment</li>
            </ul>
        </Exemples>
    </Partie>
    <Partie numero={2} titre="Variables">
        <Exemples singulier>
            <ul>
                <li>Mettre la variable pi à 3,14</li>
                <li>Dire 2*pi*rayon</li>
            </ul>
            <div style="color: red">
                Ce programme calcule le prémiètre d'un cercle en utilisant deux variables : 
                <ul>
                    <li>la variable pi, qui vaudra toujours 3,14...</li>
                    <li>la variable rayon, qui contient la valeur que l'on souhaite</li>
                </ul>
            </div>
        </Exemples>
    </Partie>
</Chapitre>