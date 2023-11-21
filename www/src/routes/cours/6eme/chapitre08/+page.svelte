<script lang="ts">
	import Chapitre from "$lib/chapitrage/Chapitre.svelte";
    import Partie from "$lib/chapitrage/Partie.svelte";
    import Definition from "$lib/chapitrage/sections/Definition.svelte";
	import Schema from "$lib/chapitrage/sections/Schema.svelte";

</script>


<Chapitre numero={8} titre="Droites parallèles et perpendiculaires">
    <Partie numero={1} titre="Couples de droites">
        <ul class="definition">
            <li>
                <Definition>
                    Deux droites sont <i>parallèles</i> si elles ne se croisent pas.
                </Definition>
                <Schema>
                    <svg viewBox="0 0 600 200">
                        <line x1="0" y1="50" x2="200" y2="150" stroke="black" />
                        <line x1="0" y1="0" x2="200" y2="100" stroke="black" />
                        <text x={180} y={85} font-family="Katex_Main" font-size="12px">(d)</text>
                        <text x={180} y={135} font-family="Katex_Main" font-size="12px">(d')</text>
                    </svg>
                </Schema>
            </li>
            <li>
                <Definition>
                    Deux droites sont sécantes, si elles se croisent.<br>
                    Autrement dit : si elles ont un point d'intersection.
                </Definition>
                <Schema>
                    <svg viewBox="0 0 600 200">
                        <line x1="0" y1="50" x2="200" y2="150" stroke="black" />
                        <line x1="130" y1="0" x2="40" y2="200" stroke="black" />
                        <text x={130} y={10} font-family="Katex_Main" font-size="12px">(d)</text>
                        <text x={180} y={135} font-family="Katex_Main" font-size="12px">(d')</text>
                    </svg>
                </Schema>
            </li>
            <li>
                <Definition>
                    Deux droites sont <i>perpendiculaires</i> si elles se croisent en formant un angle droit.
                </Definition>
                <Schema>
                    <svg viewBox="0 0 600 200">
                        <line x1="0" y1="50" x2="200" y2="150" stroke="black" />
                        <line x1="130" y1="0" x2="40" y2="200" stroke="black" />
                        <text x={130} y={10} font-family="Katex_Main" font-size="12px">(d)</text>
                        <text x={180} y={135} font-family="Katex_Main" font-size="12px">(d')</text>
                    </svg>
                </Schema>
            </li>
        </ul>
    </Partie>
</Chapitre>

<style>
    .definition {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        list-style-type: none;
        padding: 0;
    }
    .definition li {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 100%;
    }
    .definition li > * {
        width: 50%;
    }
    .definition li > :first-child {
        text-align: right;
    }
    .definition li > :last-child {
        text-align: left;
    }
</style>