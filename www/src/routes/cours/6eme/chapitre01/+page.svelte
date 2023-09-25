<script>
	import Chapitre from "$lib/chapitrage/Chapitre.svelte";
    import Partie from "$lib/chapitrage/Partie.svelte";
	import Definition from "$lib/chapitrage/sections/Definition.svelte";
	import Exemples from "$lib/chapitrage/sections/Exemples.svelte";
    import Notation from "$lib/chapitrage/sections/Notation.svelte";

    import Katex from "svelte-katex";
</script>

<Chapitre numero={1} titre="Notation géométrique">
    <Partie numero={1} titre="Droite, demi-droite, segment">
        <Definition>
            Une <i>droite</i> est un ensemble de points alignés. <br>
            Elle se prolonge à l'infini des deux côtés.
        </Definition>
        <Notation>
            Le nom d'une droite s'écrit entre parenthèses.
        </Notation>
        <Exemples>
            <img    alt="la droite (AB)" 
                    src="/tikz/6ch1_droite.svg" />
        </Exemples>
        <Definition>
            Une demi-droite est un morceau de droite délimité 
            par un point : l'origine.
        </Definition>
        <Notation>
            Une demi-droite d'origine A et de direction <Katex>x</Katex>
            se note <Katex>[Ax)</Katex>. <br>
            Une demi-droite d'origine B passant par O se note 
            <Katex>[BO)</Katex>.
        </Notation>
        <Exemples>
            <img    style="width: 60ex;"
                    alt="demi-droites"
                    src="/tikz/6ch1_demi_droite.svg" />
        </Exemples>
        <Definition>
            Un segment est une portion de droite délimitée par 
            deux points : ses extrémités.
        </Definition>
        <Notation>
            On note les deux extrémités du segment entre crochets.
        </Notation>
        <Exemples>
            <img    alt="segment"
                    src="/tikz/6ch1_segment.svg" 
            />
        </Exemples>
    </Partie>
    <Partie numero={2} titre="Polygones">
        <Definition>
            Un polygone est une figure fermée composée de plusieurs 
            segments, appelés côtés.
        </Definition>
        <Notation>
            <ul>
                <li>3 côtés : triangle</li>
                <li>4 côtés : quadrilatère</li>
                <li>5 côtés : pentagone</li>
                <li>6 côtés : hexagone</li>
                <li>8 côtés : octogone</li>
                <li>10 côtés : décagone</li>
            </ul>
        </Notation>
        <Definition>
            Les sommets sont les extrémités communes à 2 côtés 
            d'un polygone.
        </Definition>
        <Notation>
            Les sommets sont des points, ils se notent donc en majuscule.
        </Notation>
    </Partie>
    <Partie numero={3} titre="Points et appartenance">
        <Notation>
            Un point se note avec une lettre majuscule.
        </Notation>
        <Exemples>
            <ul>
                <li>Le point A</li>
                <li>Les points C et D</li>
                <li>Le point <Katex>\Omega</Katex></li>
            </ul>
        </Exemples>
        <Notation>
            Lorsqu'un point appartient à un objet géométrique (une droite,
            un segment, etc.), on utilise le symbole <Katex>\in</Katex>.
        </Notation>
        <Exemples>
            <img    style="width: 60ex;"
                    alt="Plusieurs points et leurs appartenances"
                    src="/tikz/6ch1_points.svg" />
        </Exemples>
    </Partie>
</Chapitre>

<style>
    img {
        width: 30ex;
    }
</style>