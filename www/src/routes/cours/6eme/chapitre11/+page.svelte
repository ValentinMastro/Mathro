<script lang="ts">
	import Chapitre from "$lib/chapitrage/Chapitre.svelte";
	import Partie from "$lib/chapitrage/Partie.svelte";
    import Definition from "$lib/chapitrage/sections/Definition.svelte";
	import Schema from "$lib/chapitrage/sections/Schema.svelte";
</script>

<Chapitre numero={11} titre="Dates, horaires et durées">
    <Partie numero={1}  titre="Jours et années">
        <Definition>
            Un jour est la durée que met la Terre pour faire un tour sur elle-même.<br>
            En astronomie, une année est la durée que met la Terre pour faire un tour autour du Soleil.
        </Definition>
        <Schema>
            <svg viewBox="0 0 1000 300" style="width: 80%;">
                <defs>
                    <g id="terre">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="black" stroke-width="2"/>
                        <circle cx="50" cy="50" r="2" fill="black"/>
                    </g>
                    <g id="soleil">
                        <circle cx="0" cy="0" r="40" fill="yellow"/>
                    </g>
                </defs>

                <rect x="0" y="0" width="1000" height="300" fill="black" />

                <use href="#terre" />
                <use href="#soleil" x="500" y="150" />
            </svg>
        </Schema>
    </Partie>
</Chapitre>