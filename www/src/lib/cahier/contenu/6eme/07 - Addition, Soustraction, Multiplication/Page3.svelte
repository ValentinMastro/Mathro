<script lang="ts">
	import { Contenu, DansLaMarge, Partie } from "$lib/cahier/composants/de_chapitrage/*";
	import { Schema, Texte } from "$lib/cahier/composants/de_cours/*";
	import { Nombre } from "$lib/cahier/composants/de_marge/*";
    import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    let terme_1 = $state(987);
    let terme_2 = $state(123);
    let somme = $derived(terme_1 + terme_2);

    let terme_3 = $state(901);
    let terme_4 = $state(789);
    let difference = $derived(terme_3 - terme_4);

    let facteur_1 = $state(372);
    let facteur_2 = $state(891);
    let produit = $derived(facteur_1 * facteur_2);
    let chiffres_facteur_1 = $derived(facteur_1.toString().split("").reverse().map((s) => parseInt(s)));
    let chiffres_facteur_2 = $derived(facteur_2.toString().split("").reverse().map((s) => parseInt(s)));
</script>

<DansLaMarge>
    <LigneVide lignes={4} />
    <Nombre min={100} max={999} bind:valeur={terme_1} />
    <Nombre min={100} max={999} bind:valeur={terme_2} />
    <LigneVide lignes={3} />
    <Nombre min={100} max={999} bind:valeur={terme_3} />
    <Nombre min={100} max={999} bind:valeur={terme_4} />
</DansLaMarge>

<Contenu>
    <Partie numero={3} titre="Poser des calculs" />
    <LigneVide />
        <Schema lignes={10}>
            {#snippet svg()}
                <defs>
                    <style>
                        .chiffre {
                            font-size: 90px;
                            fill: black;
                            font-family: Computer Modern;
                        }
                        .retenue {
                            font-size: 50px;
                            fill: red;
                            font-family: Computer Modern;
                        }
                    </style>
                </defs>

                <!-- Addition -->
                <text x={150} y={370} class="chiffre">+</text>
                {#each terme_1.toString().split("") as chiffre, i}
                    <text x={450 + i*100} y={270} class="chiffre">{chiffre}</text>
                {/each}
                {#each terme_2.toString().split("") as chiffre, i}
                    <text x={450 + i*100} y={370} class="chiffre">{chiffre}</text>
                {/each}

                <line x1={200} y1={405} x2={700} y2={405} stroke="black" stroke-width={4} />

                {#each somme.toString().split("").reverse() as chiffre, i}
                    <text x={650 - i*100} y={470} class="chiffre">{chiffre}</text>
                {/each}

                {#each [0,1] as puissance}
                    {@const chiffre_1 = terme_1 / Math.pow(10, puissance) % 10}
                    {@const chiffre_2 = terme_2 / Math.pow(10, puissance) % 10}
                    {#if chiffre_1 + chiffre_2 >= 10}
                        <text x={550 - puissance*100} y={170} class="retenue">1</text>
                        <circle cx={550 - puissance*100} cy={165} r={30} fill="none" stroke="red" stroke-width={4} />
                    {/if}
                {/each}

                <!-- Soustraction -->
                <text x={150} y={870} class="chiffre">-</text>
                {#each terme_3.toString().split("") as chiffre, i}
                    <text x={450 + i*100} y={770} class="chiffre">{chiffre}</text>
                {/each}
                {#each terme_4.toString().split("") as chiffre, i}
                    <text x={450 + i*100} y={870} class="chiffre">{chiffre}</text>
                {/each}

                <line x1={200} y1={905} x2={700} y2={905} stroke="black" stroke-width={4} />

                {#each difference.toString().split("").reverse() as chiffre, i}
                    <text x={650 - i*100} y={970} class="chiffre">{chiffre}</text>
                {/each}

                {#each [0,1] as puissance}
                    {@const chiffre_3 = terme_3 / Math.pow(10, puissance) % 10}
                    {@const chiffre_4 = terme_4 / Math.pow(10, puissance) % 10}
                    {#if chiffre_3 - chiffre_4 < 0}
                        <text x={615 - puissance*100} y={770} class="retenue">1</text>
                        <text x={550 - puissance*100} y={900} class="retenue">1</text>
                    {/if}
                {/each}
            {/snippet}
        </Schema>
        <LigneVide lignes={2} />
        <Schema lignes={10}>
            {#snippet svg()}
                <defs>
                    <style>
                        .chiffre {
                            font-size: 90px;
                            fill: black;
                            font-family: Computer Modern;
                        }
                        .retenue {
                            font-size: 50px;
                            fill: red;
                            font-family: Computer Modern;
                        }
                        .zero {
                            font-size: 90px;
                            fill: red;
                            font-family: Computer Modern;
                        }
                    </style>
                </defs>

                <!-- Multiplication -->
                <text x={50} y={370} class="chiffre">×</text>
                {#each facteur_1.toString().split("") as chiffre, i}
                    <text x={450 + i*100} y={270} class="chiffre">{chiffre}</text>
                {/each}
                {#each facteur_2.toString().split("") as chiffre, i}
                    <text x={450 + i*100} y={370} class="chiffre">{chiffre}</text>
                {/each}

                <line x1={100} y1={405} x2={700} y2={405} stroke="black" stroke-width={4} />

                <text x={50} y={670} class="chiffre">+</text>
                <text x={50} y={770} class="chiffre">+</text>

                <!-- Calculs intermédiaires -->
                <text x={650} y={570} class="chiffre">2</text>
                <text x={550} y={570} class="chiffre">7</text>
                <text x={450} y={570} class="chiffre">3</text>
                
                <text x={650} y={670} class="zero">0</text>
                <text x={550} y={670} class="chiffre">8</text>
                <text x={450} y={670} class="chiffre">4</text>
                <text x={350} y={670} class="chiffre">3</text>
                <text x={250} y={670} class="chiffre">3</text>

                <text x={650} y={770} class="zero">0</text>
                <text x={550} y={770} class="zero">0</text>
                <text x={450} y={770} class="chiffre">6</text>
                <text x={350} y={770} class="chiffre">7</text>
                <text x={250} y={770} class="chiffre">9</text>
                <text x={150} y={770} class="chiffre">2</text>

                <line x1={100} y1={805} x2={700} y2={805} stroke="black" stroke-width={4} />

                {#each produit.toString().split("").reverse() as chiffre, i}
                    <text x={650 - i*100} y={870} class="chiffre">{chiffre}</text>
                {/each}

                <text x={500} y={270} class="chiffre">,</text>
                <text x={600} y={370} class="chiffre">,</text>
                <text x={400} y={870} class="chiffre">,</text>
            {/snippet}
            {#snippet html()}
                <LigneVide lignes={3} />
                <Texte lignes={3} addStyle="color: red;">
                    Il y a autant de chiffres après la virgule dans les <i>facteurs</i> que dans le <i>produit</i>.
                </Texte>
            {/snippet}
        </Schema>
</Contenu>