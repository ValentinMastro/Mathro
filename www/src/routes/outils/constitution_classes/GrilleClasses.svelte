<script lang='ts'>
    import type { Donnees, Classe } from './types';
    import BoutonOption from './BoutonOption.svelte';
    import Option from './Option.svelte';
    import ResumeClasse from './ResumeClasse.svelte';

    export let niveau: 6 | 5 | 4 | 3;
    export let nombre_de_classes: 5 | 6;
    export let donnees: Donnees;

    let config = false;

    function texte_niveau() {
        switch (niveau) {
            case 6:
                return "6ème";
            case 5:
                return "5ème";
            case 4:
                return "4ème";
            case 3:
                return "3ème";
        }
    }

    function configurer() {
        config = !config;
    }
</script>

<div id="classes">
    {#each donnees.classes as classe}
        <div class="classe" style="width: {(100 - nombre_de_classes*0.1)/nombre_de_classes}%">
            <!-- Nom de la classe -->
            <div class="barre">
                <div class="nom" on:click={configurer} role="none">
                    {texte_niveau()} {String.fromCharCode(65 + classe.index)}
                </div>
                <div class="options">
                    {#if config}
                        <BoutonOption texte="Latin" bind:bool={classe.options.latin}/>
                        <BoutonOption texte="Grec" bind:bool={classe.options.grec}/>
                        <BoutonOption texte="Allemand LV2" bind:bool={classe.options.allemand_lv2}/>
                        <BoutonOption texte="Espagnol LV2" bind:bool={classe.options.espagnol_lv2}/>
                        <BoutonOption texte="Allemand bilangue" bind:bool={classe.options.allemand_bilangue}/>
                        <BoutonOption texte="Hispanica" bind:bool={classe.options.hispanica}/>
                    {:else}
                        <Option {classe} />
                    {/if}
                </div>
            </div>
            <!-- Liste des élèves -->
            {#each classe.eleves as eleve}
                <div>{eleve.nom}</div>
            {/each}
            <!-- Résumé de la classe -->
            <ResumeClasse {classe} />
        </div>
        <div class="separateur"></div>
    {/each}
</div>

<style>
    #classes {
        background-color: green;
        height: 95vh;
        position: fixed;
        left: 2%;
        right: 2%;
        width: 96%;
        top: 2.5%;

        display: flex;
        justify-content: space-evenly;    
    }
    .classe {
        background-color: blue;
        width: 10%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        user-select: none;
    }
    .separateur {
        background-color: black;
        width: 0.1%;
        height: 100%;
        z-index: 0;
    }
    .barre {
        background-color: black;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
</style>