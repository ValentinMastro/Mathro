<script lang="ts">
    import PanneauElevesAPlacer from "./PanneauElevesAPlacer.svelte";
    import PanneauRelationsEleves from "./PanneauRelationsEleves.svelte";
    import Configuration from "./Configuration.svelte";
	import GrilleClasses from "./GrilleClasses.svelte";

    import type { Donnees } from "./types";

    let niveau: 6 | 5 | 4 | 3 = 6;
    let nombre_de_classes: 5 | 6 = 5;
    let donnees: Donnees = {
        classes: [],
        eleves: [],
    };
</script>

<PanneauElevesAPlacer bind:niveau bind:nombre_de_classes bind:donnees/>
<PanneauRelationsEleves />
<Configuration bind:niveau bind:nombre_de_classes/>
<GrilleClasses bind:niveau bind:nombre_de_classes bind:donnees/>
