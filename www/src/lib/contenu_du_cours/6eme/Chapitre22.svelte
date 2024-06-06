<script lang="ts">
    import { Chapitre, Partie, SousPartie } from "$lib/chapitrage/all_chapitrages";
    import { Definition, Propriete, Schema, Paragraphe, Formule, Exemples, Remarque } from "$lib/chapitrage/sections/all_sections";
    import { math, display } from 'mathlifier'; 
</script>

<Chapitre numero={22} titre="Propriétés de la symétrie axiale">
    <Propriete>
        La symétrie axiale est une <i>isométrie</i> du plan.<br>
        C'est-à-dire : 
        <ul>
            <li>
                Conservation des longueurs <br>
                <p style="color: blue">
                    Si {@html math("[AB]")} et {@html math("[A'B']")} sont symétriques par rapport à {@html math("(d)")}, alors {@html math("AB = A'B'")}.
                </p>
            </li>
            <li>
                Conservation de la nature <br>
                <p style="color: blue">
                    Si {@html math("ABCD")} et {@html math("A'B'C'D'")} sont symétriques par rapport à {@html math("(d)")} et que 
                    {@html math("ABCD")} est un carré, alors {@html math("A'B'C'D'")} est un carré.
                </p>
            </li>
            <li>
                Conservation des mesures des angles <br>
                <p style="color: blue">
                    Si {@html math("\\widehat{ABC}")} et {@html math("\\widehat{A'B'C'}")} sont symétriques par rapport à {@html math("(d)")}, alors 
                    {@html math("\\widehat{ABC} = \\widehat{A'B'C'}")}.
                </p>
            </li>
            <li>
                Conservation des aires <br>
                <p style="color: blue">
                    Si {@html math("(𝓕)")} et {@html math("(𝓕')")} sont symétriques par rapport à {@html math("(d)")}, alors 
                    {@html math("𝒜(𝓕) = 𝒜(𝓕')")}.
                </p>
            </li>
        </ul>
    </Propriete>
    <Paragraphe nom="Exemple de rédaction" couleur="blue">
        <div style="color: black; border: 1px solid black; display: flex; column-gap: 50px;">
            <p>
                <u>Exercice</u><br>
                <b>Q1] Quelle est la longueur de {@html math("A'B'")} ?</b><br>
                <b>Q2] Quelle est la mesure de l'angle {@html math("\\widehat{B'A'C'}")} ?</b>
            </p>
            <svg viewBox="-20 0 240 200" style="width: 15em">
                <defs>
                    <g id="figure">
                        <path d="M 10 120 L 10 80 L 10 40 L 30 80 L 50 80 L 50 120 L 30 150 Z" stroke="black" fill="none" />
                        <path d="M 10 120 L 50 120" stroke="black" />
                        <path d="M 10 80 L 30 80" stroke="black" />
                        <circle cx="10" cy="80" r="2.5" fill="red" stroke="none" />
                        <circle cx="10" cy="120" r="2.5" fill="red" stroke="none" />
                        <circle cx="30" cy="150" r="2.5" fill="red" stroke="none" />
                    </g>
                </defs>
                <use href="#figure" />
                <text x="10" y="80" dx="-1em" font-size="12" fill="black">A</text>
                <use href="#figure" transform="scale(-1, 1) translate(-200, 0)" />
                <path d="M 100 0 L 100 200" stroke="black" />
            </svg>
        </div>
        <span style="color: black;">Q1]</span><br> 
        <u>On sait que : </u> {@html math("[AB]")} et {@html math("[A'B']")} sont symétriques par rapport à {@html math("(d)")}.<br>
        <u>Or : </u> La symétrie axiale conserve les longueurs.<br>
        <u>Donc : </u> {@html math("AB = A'B' = 3 cm")}<br><br>

        <span style="color: black;">Q2]</span><br>
        <u>On sait que : </u> {@html math("\\widehat{BAC}")} et {@html math("\\widehat{B'A'C'}")} sont symétriques par rapport à {@html math("(d)")}.<br>
        <u>Or : </u> La symétrie axiale conserve les mesures des angles.<br>
        <u>Donc : </u> {@html math("\\widehat{BAC} = \\widehat{B'A'C'} = 120°")}
    </Paragraphe>
</Chapitre>