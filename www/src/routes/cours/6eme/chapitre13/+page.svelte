<script lang="ts">
    import { Chapitre, Partie, SousPartie } from "$lib/chapitrage/all_chapitrages";
    import { Definition, Propriete, Schema, Exemples } from "$lib/chapitrage/sections/all_sections";
    import PerimetreExemple from "./PerimetreExemple.svelte";
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
</Chapitre>

