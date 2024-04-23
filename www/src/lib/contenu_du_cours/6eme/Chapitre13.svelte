<script lang="ts">
    import { Chapitre, Partie, SousPartie } from "$lib/chapitrage/all_chapitrages";
    import { Definition, Schema, Exemples, Formule } from "$lib/chapitrage/sections/all_sections";
    import PerimetreExemple from "$lib/module/PerimetreExemple.svelte";
    import { math, display } from 'mathlifier';
</script>

<Chapitre numero={13} titre="Les quadrilatères et leur périmètre">
    <Partie numero={1} titre="Concept du périmètre">
        <Definition>
            Le périmètre d'une figure est la longueur de son contour.
        </Definition>
        <Exemples singulier>
            <PerimetreExemple />
        </Exemples>
    </Partie>
    <Partie numero={2} titre="Les quadrilatères">
        <SousPartie numero={1} titre="Le carré">
            <Definition>
                Quadrilatère ayant 4 côtés égaux et 4 angles droits.
            </Definition>
            <Schema>
                <svg viewBox="30 30 180 150" style="height: 20vw;" >
                    <rect x="50" y="50" width="100" height="100" fill="none" stroke="black" />
                    <text x="170" y="100" text-anchor="middle" dominant-baseline="middle" font-size="10px" fill="red">4 cm</text>
                    <!-- Codage des 4 côtés -->
                    <line x1="100" y1="55" x2="100" y2="45" stroke="red" />
                    <line x1="100" y1="155" x2="100" y2="145" stroke="red" />
                    <line x1="55" y1="100" x2="45" y2="100" stroke="red" />
                    <line x1="155" y1="100" x2="145" y2="100" stroke="red" />
                    <!-- Codage des 4 angles droits -->
                    <rect x="50" y="50" width="8" height="8" fill="red" />
                    <rect x="50" y="142" width="8" height="8" fill="red" />
                    <rect x="142" y="142" width="8" height="8" fill="red" />
                    <rect x="142" y="50" width="8" height="8" fill="red" />
                </svg>
            </Schema>
            <Formule>
                {@html math(`P_{\\text{carré}} = 4 \\times \\text{côté}`)}
            </Formule>
            <Exemples singulier>
                {@html display(`
                    \\begin{aligned}
                        P_{\\text{carré}} &= 4 \\times \\text{côté} \\\\
                        &= 4 \\times 4~\\text{cm} \\\\
                        &= 16~\\text{cm}
                    \\end{aligned}
                `)}
            </Exemples>
        </SousPartie>
        <SousPartie numero={2} titre="Le losange">
            <Definition>
                Quadrilatère ayant 4 côtés égaux.
            </Definition>
            <Schema>
                <svg viewBox="10 30 160 90" style="height: 20vw;" >
                    <!-- On va tracer un losange 
                        - dont deux côtés sont horizontaux et parallèles
                        - dont les côtés mesurent 4 cm
                        - dont les angles mesurent 45° et 135°

                        Le but est d'animer le tracer pour que l'élève comprenne comment on trace un losange.
                    -->
                    <defs>
                        <marker id="codage" orient="auto" markerUnits="strokeWidth">
                            <text x="0" y="0" text-anchor="middle" dominant-baseline="middle" font-size="10px" fill="red">|</text>
                        </marker>
                        <style>
                            .codage {
                                text-anchor: middle;
                                dominant-baseline: middle;
                                font-size: 10px;
                                fill: red;
                            }
                            .codage_vert {
                                text-anchor: middle;
                                dominant-baseline: middle;
                                font-size: 10px;
                                fill: green;
                            }
                        </style>
                        <path   id="losange"
                                d="
                                M 20 50
                                L 100 50
                                L {100 + 80/Math.sqrt(2)} {50 + 80/Math.sqrt(2)}
                                L {20 + 80/Math.sqrt(2)} {50 + 80/Math.sqrt(2)}
                                Z" />
                        <mask id="masque_losange" >
                            <use href="#losange" fill="white" />
                        </mask>
                    </defs>
                    <use href="#losange" fill="none" stroke="black" />
                    <!-- Codage des 4 longueurs -->
                    <text x="60" y="40" class="codage">4 cm</text>
                    <text x="60" y="50" class="codage">|</text>
                    <text x={100 + 40/Math.sqrt(2)} y={50 + 40/Math.sqrt(2)} class="codage">|</text>
                    <text x={60 + 80/Math.sqrt(2)} y={50 + 80/Math.sqrt(2)} class="codage">|</text>
                    <text x={20 + 40/Math.sqrt(2)} y={50 + 40/Math.sqrt(2)} class="codage">|</text>
                    <!-- Angle de 45° -->
                    <circle cx="20" cy="50" r="18" fill="green" mask="url(#masque_losange)" />
                    <text x="45" y="60" class="codage_vert">45°</text>
                </svg>
            </Schema>
            <Formule>
                {@html math("P_{\\text{losange}} = 4 \\times \\text{côté}")}
            </Formule>
            <Exemples singulier>
                {@html math(`
                    \\begin{aligned}
                        P_{\\text{losange}} &= 4 \\times \\text{côté} \\\\
                        &= 4 \\times 4~\\text{cm} \\\\
                        &= 16~\\text{cm}
                    \\end{aligned}
                `)}
            </Exemples>
        </SousPartie>
        <SousPartie numero={3} titre="Le rectangle">
            <Definition>
                Quadrilatère ayant 4 angles droits.
            </Definition>
            <Schema>
                <svg viewBox="15 30 150 90" style="height: 20vw;" >
                    <defs>
                        <style>
                            .codage {
                                text-anchor: middle;
                                dominant-baseline: middle;
                                font-size: 10px;
                                fill: red;
                            }
                        </style>
                    </defs>
                    <rect x="50" y="50" width="100" height="50" fill="none" stroke="black" />
                    <text x="100" y="40" class="codage">4 cm</text>
                    <text x="30" y="75" class="codage">2 cm</text>
                    <!-- Codage des 4 côtés -->
                    <text x="100" y="50" class="codage">||</text>
                    <text x="100" y="100" class="codage">||</text>
                    <text x="50" y="75" class="codage">--</text>
                    <text x="150" y="75" class="codage">--</text>
                    <!-- Codage des 4 angles droits -->
                    <rect x="50" y="50" width="8" height="8" fill="red" />
                    <rect x="50" y="92" width="8" height="8" fill="red" />
                    <rect x="142" y="92" width="8" height="8" fill="red" />
                    <rect x="142" y="50" width="8" height="8" fill="red" />
                </svg>
            </Schema>
            <Formule>
                {@html math(`P_{\\text{rectangle}} = 2 \\times \\text{longueur} + 2 \\times \\text{largeur}`)}
            </Formule>
            <Exemples singulier>
                {@html display(`
                    \\begin{aligned}
                        P_{\\text{rectangle}} &= 2 \\times (\\text{longueur} + \\text{largeur}) \\\\
                        &= 2 \\times 4~\\text{cm} + 2 \\times 2~\\text{cm} \\\\ 
                        &= 8~\\text{cm} + 4~\\text{cm} \\\\
                        &= 12~\\text{cm}
                    \\end{aligned}
                `)}
            </Exemples>
        </SousPartie>
        <SousPartie numero={4} titre="Le trapèze">
            <Definition>
                Quadrilatère ayant 2 côtés parallèles.
            </Definition>
            <Schema>
                <svg viewBox="0 0 200 200" style="height: 20vw;" >
                    <defs>
                        <style>
                            .codage {
                                text-anchor: middle;
                                dominant-baseline: middle;
                                font-size: 10px;
                                fill: red;
                            }
                        </style>
                        <path id="trapeze"
                            d="
                            M 70 50
                            L 130 50
                            L 170 150
                            L 30 150
                            Z" />
                        <mask id="masque_trapeze" >
                            <use href="#trapeze" fill="white" />
                        </mask>
                    </defs>
                    <use href="#trapeze" fill="none" stroke="black" />
                </svg>
            </Schema>
            <Formule>
                Somme des 4 longueurs
            </Formule>
            <Exemples singulier>
                {@html display(`
                    \\begin{aligned}
                        P_{\\text{trapèze}} &= 3~\\text{cm} + 4~\\text{cm} + 4~\\text{cm} + 8{,}7~\\text{cm} \\\\
                        &= 19{,}7~\\text{cm}
                    \\end{aligned}
                `)} 
            </Exemples>
        </SousPartie>
        <SousPartie numero={5} titre="Le parallélogramme">
            <Definition>
                Quadrilatère ayant chacun de ses côtés parallèle à son opposé.
            </Definition>
            <Schema>
                <svg viewBox="0 0 200 200" style="height: 20vw;" >
                    <polygon points="50,50 150,50 100,150 0,150" fill="none" stroke="black" />
                </svg>
            </Schema>
            <Formule>
                {@html math(`P_{\\text{parallélogramme}} = 2 \\times (\\ell_1 + \\ell_2)`)}
            </Formule>
        </SousPartie>
        <SousPartie numero={6} titre="Le cerf-volant">
            <Definition>
                Quadrilatère ayant 2 paires de côtés adjacents de même longueur.
            </Definition>
            <Schema>
                <svg viewBox="0 0 200 200" style="height: 20vw;" >
                    <polygon points="0,100 60,50 200,100 60,150" fill="none" stroke="black" />
                </svg>
            </Schema>
        </SousPartie>
    </Partie>
</Chapitre>