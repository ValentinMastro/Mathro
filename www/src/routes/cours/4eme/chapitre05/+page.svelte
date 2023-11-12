<script>
	import Chapitre from "$lib/chapitrage/Chapitre.svelte";
	import Partie from "$lib/chapitrage/Partie.svelte";
	import Paragraphe from "$lib/chapitrage/sections/Paragraphe.svelte";
	import Schema from "$lib/chapitrage/sections/Schema.svelte";

    import Katex from "svelte-katex";
</script>

<Chapitre numero={5} titre="Théorème de Thalès" >
    <Partie titre="Énoncé" numero={1}>
        <Paragraphe couleur="red" nom="Théorème de Thalès">
            Si :
            <ul>
                <li>les point A, B et D sont alignés</li>
                <li>les points A, C et E sont alignés</li>
                <li><Katex>(BC) // (DE)</Katex>  </li>
            </ul>
            alors :
            <Katex displayMode>
                {`\\frac{AD}{AB} = \\frac{AE}{AC} = \\frac{DE}{BC}`}
            </Katex>
        </Paragraphe>
        <Schema>
            <svg viewBox="0 0 500 500" style="width: 20em;">
                <path d="M 50 250 L 450 50 L 450 450 Z" stroke="black" fill="none" stroke-width={2} />
                <line x1="300" x2="300" y1="126" y2="374" stroke="black" stroke-width={2} />
                <text x="40" y="250" text-anchor="end" font-size="25px">A</text>
                <text x="460" y="50" text-anchor="start" font-size="25px">D</text>
                <text x="460" y="450" text-anchor="start" font-size="25px">E</text>
                <text x="300" y="110" text-anchor="middle" font-size="25px">B</text>
                <text x="300" y="400" text-anchor="middle" font-size="25px">C</text>
                
                <text x="250" y="480" text-anchor="middle" font-size="25px">Configuration n°1</text>
            </svg>
            <svg viewBox="0 0 500 500" style="width: 20em;">
                <line x1="50" x2="450" y1="150" y2="450" stroke="black" stroke-width={2} />
                <line x1="50" x2="450" y1="350" y2="50" stroke="black" stroke-width={2} />
                <line x1="50" x2="50" y1="150" y2="350" stroke="black" stroke-width={2} />
                <line x1="450" x2="450" y1="50" y2="450" stroke="black" stroke-width={2} />

                <text x="40" y="150" text-anchor="end" font-size="25px">C</text>
                <text x="460" y="50" text-anchor="start" font-size="25px">D</text>
                <text x="460" y="450" text-anchor="start" font-size="25px">E</text>
                <text x="40" y="350" text-anchor="end" font-size="25px">B</text>
                <text x="185" y="230" text-anchor="middle" font-size="25px">A</text>
                
                <text x="250" y="480" text-anchor="middle" font-size="25px">Configuration n°2 dite "du papillion"</text>
            </svg>
        </Schema>
    </Partie>
    <Partie numero={2} titre="Rédaction">
        <Paragraphe couleur="blue" nom="Exemple d'énoncé">
            <svg viewBox="0 0 800 500" style="width: 35em;">
                <defs>
                    <marker
                    id="arrow"
                    viewBox="0 0 10 10"
                    refX="5"
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" />
                  </marker>
                </defs>

                <path d="M 50 250 L 420 50 L 450 450 Z" stroke="black" fill="none" stroke-width={2} />
                <line x1="280" x2="300" y1="126" y2="374" stroke="black" stroke-width={2} />
                <text x="40" y="250" text-anchor="end" font-size="25px">U</text>
                <text x="430" y="50" text-anchor="start" font-size="25px">X</text>
                <text x="460" y="450" text-anchor="start" font-size="25px">Y</text>
                <text x="280" y="110" text-anchor="middle" font-size="25px">V</text>
                <text x="300" y="405" text-anchor="middle" font-size="25px">W</text>

                <line x1="50" x2="260" y1="230" y2="120" stroke="red" stroke-width={2} marker-start="url(#arrow)" marker-end="url(#arrow)" />
                <line x1="50" x2="280" y1="270" y2="390" stroke="red" stroke-width={2} marker-start="url(#arrow)" marker-end="url(#arrow)" />
                <text x="130" y="170" text-anchor="middle" fill="red" font-size="25px">4 cm</text>
                <text x="140" y="370" text-anchor="middle" fill="red" font-size="25px">4,5 cm</text>

                <line x1="70" x2="410" y1="250" y2="70" stroke="green" stroke-width={2} marker-start="url(#arrow)" marker-end="url(#arrow)" />
                <line x1="70" x2="430" y1="250" y2="420" stroke="green" stroke-width={2} marker-start="url(#arrow)" marker-end="url(#arrow)" />
                
                <text x="250" y="480" text-anchor="middle" font-size="25px">Les droites (WV) et (XY) sont parallèles.</text>
                <text x="500" y="250" text-anchor="start" font-size="25px">Question :</text>
                <line x1="500" x2="620" y1="255" y2="255" stroke="black" stroke-width={2} />
                <text x="500" y="290" text-anchor="start" font-size="25px">Calculer la longueur UX.</text>
            </svg>
        </Paragraphe>
    </Partie>
</Chapitre>