<script lang="ts">
    import { Chapitre, Partie, SousPartie } from "$lib/chapitrage/all_chapitrages";
    import { Definition, Propriete, Schema, Exemples, Formule } from "$lib/chapitrage/sections/all_sections";
    import PerimetreExemple from "./PerimetreExemple.svelte";

    import Katex from "svelte-katex";
</script>

<Chapitre numero={13} titre="Les quadrilatères et leur périmètre">
    <Partie numero={1} titre="Périmètre : le cas général">
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
                <svg viewBox="0 0 200 200" style="height: 20vw;" >
                    <rect x="50" y="50" width="100" height="100" fill="none" stroke="black" />
                </svg>
            </Schema>
            <Formule>
                <Katex>{`P_{\\text{carré}} = 4 \\times \\text{côté}`}</Katex>
            </Formule>
            <Exemples singulier>
                <Katex>
                    {`
                        \\begin{aligned}
                            P_{\\text{carré}} &= 4 \\times \\text{côté} \\\\
                            &= 4 \\times 4~\\text{cm} \\\\
                            &= 16~\\text{cm}
                        \\end{aligned}
                    `}
                </Katex>
            </Exemples>
        </SousPartie>
        <SousPartie numero={2} titre="Le losange">
            <Definition>
                Quadrilatère ayant 4 côtés égaux.
            </Definition>
            <Schema>
                <svg viewBox="0 0 200 200" style="height: 20vw;" >
                    <polygon points="100,50 150,100 100,150 50,100" fill="none" stroke="black" />
                </svg>
            </Schema>
            <Formule>
                <Katex>{`P_{\\text{losange}} = 4 \\times \\text{côté}`}</Katex>
            </Formule>
            <Exemples singulier>
                <Katex>
                    {`
                        \\begin{aligned}
                            P_{\\text{losange}} &= 4 \\times \\text{côté} \\\\
                            &= 4 \\times 4~\\text{cm} \\\\
                            &= 16~\\text{cm}
                        \\end{aligned}
                    `}
                </Katex>
            </Exemples>
        </SousPartie>
        <SousPartie numero={3} titre="Le rectangle">
            <Definition>
                Quadrilatère ayant 4 angles droits.
            </Definition>
            <Schema>
                <svg viewBox="0 0 200 200" style="height: 20vw;" >
                    <rect x="50" y="50" width="100" height="50" fill="none" stroke="black" />
                </svg>
            </Schema>
            <Formule>
                <Katex>{`P_{\\text{rectangle}} = 2 \\times \\text{longueur} + 2 \\times \\text{largeur}`}</Katex>
            </Formule>
            <Exemples singulier>
                <Katex>
                    {`
                        \\begin{aligned}
                            P_{\\text{rectangle}} &= 2 \\times (\\text{longueur} + \\text{largeur}) \\\\
                            &= 2 \\times 4~\\text{cm} + 2 \\times 2~\\text{cm} \\\\ 
                            &= 8~\\text{cm} + 4~\\text{cm} \\\\
                            &= 12~\\text{cm}
                        \\end{aligned}
                    `}
                </Katex>
            </Exemples>
        </SousPartie>
        <SousPartie numero={4} titre="Le trapèze">
            <Definition>
                Quadrilatère ayant 2 côtés parallèles.
            </Definition>
            <Schema>
                <svg viewBox="0 0 200 200" style="height: 20vw;" >
                    <polygon points="50,50 150,50 100,150 50,150" fill="none" stroke="black" />
                </svg>
            </Schema>
            <Formule>
                Somme des 4 longueurs
            </Formule>
            <Exemples singulier>
                <Katex>
                    {`
                        \\begin{aligned}
                            P_{\\text{trapèze}} &= 3~\\text{cm} + 4~\\text{cm} + 4~\\text{cm} + 8{,}7~\\text{cm} \\\\
                            &= 19{,}7~\\text{cm}
                        \\end{aligned}
                    `}
                </Katex>
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
                <Katex>
                    {`P_{\\text{parallélogramme}} = 2 \\times (\\ell_1 + \\ell_2)`}
                </Katex>
            </Formule>
        </SousPartie>
    </Partie>
</Chapitre>

