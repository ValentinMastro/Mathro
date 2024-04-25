<script lang='ts'>
    import { Chapitre, Partie, SousPartie } from "$lib/chapitrage/all_chapitrages";
    import { Definition, Propriete, Schema, Paragraphe } from "$lib/chapitrage/sections/all_sections";
    import { math, display } from 'mathlifier'; 

    var t = -1

    function lancer_animation() {
        t = 1
        animation();
    }

    function animation() {
        if (t > -1) {
            t = t - 0.01;
            setTimeout(() => {animation()}, 10);
        }
    }
</script>

<Chapitre numero={19} titre="Symétrie axiale">
    <Partie numero={1} titre="Définition">
        <Definition>
            (ℱ) et (ℱ') sont symétriques par rapport à une droite (d) si 
            « en repliant sur la droite (d) », (ℱ) et (ℱ') se superposent.
        </Definition>
        <Schema>
            <svg viewBox="0 0 300 300" style="width: 15em"
                on:click={lancer_animation}
                role="none"
            >
                <defs>
                    <g id="figure">
                        <circle cx="90" cy="220" r="50" stroke="black" fill="none" />
                        <line x1="140" y1="220" x2="140" y2="70" stroke="black" />
                        <line x1="140" y1="70" x2="90" y2="70" stroke="black" />
                        <line x1="90" y1="70" x2="140" y2="120" stroke="black" />
                    </g>
                </defs>
                <use href="#figure" x="0" y="0" />
                <use href="#figure" x="0" y="0" transform-origin="center" transform="scale({t}, 1)" />
                <line x1="150" y1="0" x2="150" y2="300" stroke="black" />
            </svg>
        </Schema>
    </Partie>
    <Partie numero={2} titre="Construction du symétrique d'un point">
        <SousPartie titre="Avec l'équerre" numero={1}>
            <Propriete>
                Si A' est le symétrique de A par rapport à (d), alors (d) est la médiatrice de [AA'].
            </Propriete>
            <Paragraphe nom="Protocole de construction" couleur="black" >
                On a un point A et une droite (d). <br>
                {@html math("\\Rightarrow")} Tracer une droite perpendiculaire à (d) passant par A. <br>
                Appelons O le point d'intersection.<br>
                {@html math("\\Rightarrow")} Placer le point {@html math("A'")} sur la droite tracée tel que {@html math("AO = OA'")}.
            </Paragraphe>
        </SousPartie>
    </Partie>
</Chapitre>