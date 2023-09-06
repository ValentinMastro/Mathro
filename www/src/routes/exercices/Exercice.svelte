<script lang="ts">
    import { EstEntierNaturel, EstEntierRelatif } from '$lib/exercices/4eme/ch00'

    let ex = new EstEntierRelatif()
    let data = ex.afficher_vraifaux()

    // L'utilisateur a-t-il choisi une réponse ?
    let reponse_choisie: boolean = false;
    let vrai_ou_faux: String = "";

    function choisir_reponse(e: Event) {
        if (!e.target) return;
        let id: String = (e.target as HTMLElement).id;
        console.log(vrai_ou_faux, id);

        switch (vrai_ou_faux) {
            case "":
                reponse_choisie = true;
                vrai_ou_faux = id;
                break;
            case "vrai":
                if (id == "vrai") {
                    reponse_choisie = false;
                    vrai_ou_faux = "";
                } else if (id == "faux") {
                    vrai_ou_faux = "faux"
                }
                break;
            case "faux":
                if (id == "faux") {
                    reponse_choisie = false;
                    vrai_ou_faux = "";
                } else if (id == "vrai") {
                    vrai_ou_faux == "vrai"
                }
                break;
        }
    }
</script>

{#if data["type"] == "VraiFaux"}
    <h2 class="enonce">{data["enonce"]}</h2>
    <div class="schema"></div>
    <div id="vraifaux">
        <button id="vrai" class="reponse {reponse_choisie && (vrai_ou_faux == "vrai") ? "choix" : ""}" on:click={choisir_reponse}><span>VRAI</span></button>
        <button id="faux" class="reponse {reponse_choisie && (vrai_ou_faux == "faux") ? "choix" : ""}" on:click={choisir_reponse}><span>FAUX</span></button>
    </div>
{:else if data["type"] == "QCM"}
    <h2 class="enonce">{data["enonce"]}</h2>
{/if}

<style>
    h2.enonce {
        font-size: 4vh;
        user-select: none;
    }
    div.schema {
        height: 50vh;
    }
    div#vraifaux {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    button.reponse {
        width: 45%;
        font-size: 5vh;
        text-align: center;
        user-select: none;
    }
    button.choix {
        background-color: orange;
    }
    span {
        width: 100%;
        text-align: center;
    }
</style>