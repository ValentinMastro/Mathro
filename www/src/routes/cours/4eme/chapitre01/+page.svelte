<script lang="ts">
    import Katex from "svelte-katex";

    import Chapitre from "$lib/chapitrage/Chapitre.svelte";
    import Partie from "$lib/chapitrage/Partie.svelte";
    import SousPartie from "$lib/chapitrage/SousPartie.svelte";
    import Definition from "$lib/chapitrage/sections/Definition.svelte";
    import Exemple from "$lib/chapitrage/sections/Exemple.svelte";
    import Remarque from "$lib/chapitrage/sections/Remarque.svelte";
    import Animation from "$lib/chapitrage/sections/Animation.svelte";
    import Propriete from "$lib/chapitrage/sections/Propriete.svelte";
    import Theoreme from "$lib/chapitrage/sections/Theoreme.svelte";
</script>

<Chapitre numero={1} titre="Théorème de Pythagore">
    <Partie numero={1} titre="Carré et racine carrée">
        <SousPartie numero={1} titre="Le carré d'un nombre">
            <Definition>
                Le carré d'un nombre est égal à ce nombre multiplié par lui-même.
                On le note avec un « 2 » en exposant (en petit, en haut à droite).
            </Definition>
            <Animation fonctionAnimation={(context) => {
                context.font = "48px serif"
                context.textBaseline = "middle"

                var n = 2
                var taille = 0
                var ecart = 0

                async function update() {
                    n += 1; if (n > 12) { n = 3 };
                    taille = 22 - n
                    ecart = taille/5
                    await new Promise(r => setTimeout(r, 2000));

                    context.clearRect(0,0,1000,300)

                    context.textAlign = "end"
                    context.fillText(`${n} =`, 95, 80)
                    for (var i = 0; i < n; i++) {
                        context.fillRect(100+(taille+ecart)*i, 77-taille/2, taille, taille)
                    }

                    context.fillRect(450,0,1,180)

                    context.fillText(`${n}² = `, 585, 80)
                    for (var i = 0; i < n*n; i++) {
                        context.fillRect(580+(taille+ecart)*(i%n), 77-taille/2+(taille+ecart)*(Math.floor(i/n)-(n-1)/2), taille, taille)
                    }
                    context.textAlign = "left"
                    context.fillText(`= ${n*n}`, 580+(taille+ecart)*n, 80)

                    requestAnimationFrame(update)
                }
                update()
            }} />
            <Definition>
                La racine carrée est l'opération réciproque du calcul du carré d'un nombre.
                Elle se note avec le symbole « radical » : <Katex>\sqrt{'{~~}'}</Katex>.
            </Definition>
                <tr>Si le carré de 12 est 144, <Katex>{'\\sqrt{144}=12'}</Katex></tr>
                <tr>Si <Katex>{'8^2=64'}</Katex> alors <Katex>{'\\sqrt{64}=8'}</Katex></tr>
        </SousPartie>
    </Partie>
    <Partie numero={2} titre="Triangle rectangle et hypoténuse">
        <Definition>
            Un triangle rectangle est une figure à 3 côtés possédant un angle droit (<Katex>=90°</Katex>).
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
                <Katex>

                </Katex>
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