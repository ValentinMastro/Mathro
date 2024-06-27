<script lang="ts">
	import type { Donnees, Eleve } from "./types";
    import { couleur, texte } from "./types";
    import { draggable } from "./drag_and_drop";

    export let eleve: Eleve;
    export let donnees: Donnees;

    let erreur_option = false;

    function detecter_erreur_option(donnees: Donnees): boolean {
        console.log("ook", donnees)
        if (!donnees) return false;
        let classe = donnees.classes.find(c => c.eleves.includes(eleve));
        if (!classe) return false;

        if (eleve.options.latin && !classe.options.latin) return true;
        if (eleve.options.grec && !classe.options.grec) return true;
        if (eleve.LV2 === "ALL" && !classe.options.allemand_bilangue) return true;
        if (eleve.LV2 === "ALL2" && !classe.options.allemand_lv2) return true;
        if (eleve.LV2 === "ESP" && !classe.options.espagnol_lv2) return true;
        if (eleve.LV2 === "HISP" && !classe.options.hispanica) return true;

        return false;
    }

    $: erreur_option = detecter_erreur_option(donnees);

</script>

<div class="carte" style="background-color: {eleve.genre === 'F' ? 'pink' : 'lightblue'}"
    use:draggable={eleve.id}
>
    <div class="niveau">
        {#if eleve.niveau === 'A'}
            <div class="lettre A">A</div>
        {/if}
        {#if eleve.niveau === 'B'}
            <div class="lettre B">B</div>
        {/if}
        {#if eleve.niveau === 'C'}
            <div class="lettre C">C</div>
        {/if}
        {#if eleve.niveau === 'D'}
            <div class="lettre D">D</div>
        {/if}
    </div>
    <div style="width: 2%;"></div>
    <div class="langue">
        <div class="lv2" style="background-color: {couleur(eleve.LV2)}">{texte(eleve.LV2)}</div>
    </div>
    <div class="nom">
        <span style="font-weight: bold; {erreur_option ? "color: red" : ""}">{eleve.nom}</span> {eleve.prenom}
    </div>
    <div class="info_attitude">
        {#if eleve.moteur}
            <div class="lettre M">M</div>
        {/if}
        {#if eleve.zozo}
            <div class="lettre Z">Z</div>
        {/if}
    </div>
</div>

<style>
    .carte {
        width: 97%;
        height: 2vh;
        display: flex;
        flex-direction: row;
        font-size: small;
        color: white;
        border: 1px solid black;
    }
    .nom {
        height: 100%;
        margin-top: auto;
        margin-bottom: auto;
        margin-left: auto;
        margin-right: auto;
        color: black;
    }
    .info_attitude {
        display: flex;
        justify-content: flex-end;
    }
    .langue {
        height: 100%;
        width: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .lv2 {
        height: 100%;
        width: fit-content;
    }
    .A {
        background-color: darkgreen;
    }
    .B {
        background-color: green;
    }
    .C {
        background-color: rgb(214, 120, 6);
    }
    .D {
        background-color: darkred;
    }
    .M {
        background-color: darkblue;
    }
    .Z {
        background-color: darkred;
    }
    .lettre {
        aspect-ratio: 4/5;
        height: 100%;
        font-weight: bold;
        display: flex;
        justify-content: center;
    }
</style>