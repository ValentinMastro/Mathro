<script lang="ts">
	import type { Donnees } from "./types";

    export let donnees: Donnees;
    export let mode_recherche: boolean;
    export let recherche: string;

    function passer_en_mode_recherche() {
        mode_recherche = !mode_recherche;
        console.log(mode_recherche)
    }
</script>

<div class="barre">
    <input type="text" placeholder="Rechercher un élève"
        on:focus={passer_en_mode_recherche}
        on:focusout={passer_en_mode_recherche}
        bind:value={recherche}
    />
</div>

<style>
    .barre {
        position: fixed;
        left: 2%;
        right: 2%;
        bottom: 0;

        width: 96%;
        height: 2.5%;
    }
    input {
        width: 100%;
        height: 100%;
        background-color: orange;
    }
</style>