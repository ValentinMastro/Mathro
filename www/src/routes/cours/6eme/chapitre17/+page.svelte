<script lang="ts">
    import { Chapitre, Partie, SousPartie } from "$lib/chapitrage/all_chapitrages";
    import { Definition, Exemples, Remarque, Paragraphe } from "$lib/chapitrage/sections/all_sections";
    import { math } from 'mathlifier';
</script>

<Chapitre numero={17} titre="Volumes">
    <Partie numero={1} titre="Unités de volume et de contenance">
        <Definition>
            La contenance d'un récipient est la mesure de l'espace qu'il peut contenir. Son unité est le litre ({@html math("\\ell")}). <br>
            Le volume d'un solide est la mesure de l'espace qu'il occupe. Son unité est le mètre cube (m<sup>3</sup>). <br>
            Un mètre cube correspond au volume d'un cube de 1 mètre d'arête. <br>

            <svg viewBox="0 0 400 300" style="width: 40%;">
                <defs>
                    <pattern id="grid" width="25" height="25" patternUnits="userSpaceOnUse">
                        <path d="M 25 0 L 0 0 0 25" fill="none" stroke="gray" stroke-width="0.5" />
                    </pattern>
                </defs>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#grid)" />
                <rect x="50" y="100" width="150" height="150" stroke="black" fill="none" />
                <line x1="50" y1="100" x2="100" y2="50" stroke="black" />
                <line x1="200" y1="100" x2="250" y2="50" stroke="black" />
                <line x1="50" y1="250" x2="100" y2="200" stroke="black" stroke-dasharray="5,5" />
                <line x1="200" y1="250" x2="250" y2="200" stroke="black" />
                <line x1="100" y1="50" x2="250" y2="50" stroke="black" />
                <line x1="100" y1="200" x2="250" y2="200" stroke="black" stroke-dasharray="5,5" />
                <line x1="100" y1="50" x2="100" y2="200" stroke="black" stroke-dasharray="5,5" />
                <line x1="250" y1="50" x2="250" y2="200" stroke="black" />
                <text x="15" y="180" font-size="15" fill="black">1 m</text>
            </svg>
        </Definition>

        <Remarque>
            1 m<sup>3</sup> = 1000 {@html math("\\ell")} <br>
            1 dm<sup>3</sup> = 1 {@html math("\\ell")} <br>
        </Remarque>
    </Partie>
</Chapitre>