<script lang="ts">
    import { Chapitre, Partie, SousPartie } from "$lib/chapitrage/all_chapitrages";
    import { Definition, Propriete, Theoreme, Exemples } from "$lib/chapitrage/sections/all_sections";
    import { math, display } from "mathlifier";
</script>

<Chapitre numero={1} titre="Théorème de Pythagore">
    <Partie numero={1} titre="Carré et racine carrée">
        <SousPartie numero={1} titre="Le carré d'un nombre">
            <Definition>
                Le carré d'un nombre est égal à ce nombre multiplié par lui-même.
                On le note avec un « 2 » en exposant (en petit, en haut à droite).
            </Definition>
            <Exemples>
                <ul>
                    <li>Le carré de 12 est 144 car {@html math('12^2=12 \\times 12 = 144')}</li>
                    <li>Le carré de 8 est 64 car {@html math('8^2= 8 \\times 8 = 64')}</li>
                </ul>
            </Exemples>
        </SousPartie>
        <SousPartie numero={2} titre="La racine carrée d'un nombre">
            <Definition>
                La racine carrée est l'opération réciproque du calcul du carré d'un nombre.
                Elle se note avec le symbole « radical » : {@html math('\\sqrt{~~}')}.
            </Definition>
            <Exemples>
                <ul>
                    <li>Si le carré de 12 est 144, {@html math('\\sqrt{144}=12')}</li>
                    <li>Si {@html math('8^2=64')} alors {@html math('\\sqrt{64}=8')}</li>
                </ul>
            </Exemples>
        </SousPartie>
    </Partie>
    <Partie numero={2} titre="Triangle rectangle et hypoténuse">
        <Definition>
            Un triangle rectangle est une figure à 3 côtés possédant un angle droit ({@html math('=90°')}).
        </Definition>
        <Definition>
            L'hypoténuse d'un triangle rectangle est le côté opposé à l'angle droit.
        </Definition>
        <Propriete>
            L'hypoténuse est le côté le plus grand d'un triangle rectangle.
        </Propriete>
    </Partie>
    <Partie numero={3} titre="Énoncé et application du théorème de Pythagore">
        <Theoreme titre="Théorème de Pythagore">
            Si un triangle est rectangle, alors le carré de la longueur de l'hypoténuse
            est égal à la somme des carrés des longueurs des deux autres côtés. <br>
        </Theoreme>
        <div class="Redaction">
            <u>Exemple de rédaction :</u>
            <div id='énoncé'>
                Soit DEF un triangle rectangle en E, tel que DE = 6 cm et EF = 8 cm.<br />
                Calculer la longueur DF.
            </div>
            <div id="réponse">
                <div>
                    On sait que : le triangle DEF est rectangle en E,
                donc l'hypoténuse est [DF]
                </div>
                <div>
                    D'après le théorème de Pythagore
                </div>
                <div>
                    DE²+EF² = DF²
                </div>
            </div>
        </div>
    </Partie>
</Chapitre>

<style>
    div.Redaction {
        color: blue;
        border-width: 2px;
        border-color: red;
    }
    div#énoncé {
        background-color: yellow;
        text-align: center;
    }
    div#réponse {
        background-color: white;
    }
</style>