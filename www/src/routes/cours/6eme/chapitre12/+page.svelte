<script lang="ts">
    import Chapitre from "$lib/chapitrage/Chapitre.svelte";
    import Partie from "$lib/chapitrage/Partie.svelte";
    import SousPartie from "$lib/chapitrage/SousPartie.svelte";
    import Definition from "$lib/chapitrage/sections/Definition.svelte";
    import Exemples from "$lib/chapitrage/sections/Exemples.svelte";
    import Propriete from "$lib/chapitrage/sections/Propriete.svelte";
</script>

<Chapitre numero={12} titre="Proportionnalité">
    <Partie numero={1} titre="Grandeurs proportionnelles">
        <SousPartie numero={1} titre="Concept">
            <Definition>
                Une grandeur est une caractéristique quantifiable (souvent associée à une unité).
            </Definition>
            <Exemples>
                Distance (m), Prix (€), Durée (s), Température (°C), Masse (kg), Énergie (J), Puissance (W), Tension (V)
            </Exemples>
            <Definition>
                Deux grandeurs sont proportionnelles si, pour une valeur de l'une, la valeur de l'autre est obtenue en la multipliant par un nombre constant, 
                appelé coefficient de proportionnalité.
            </Definition>
            <Exemples>
                <ul>
                    <li>Le côté et le périmètre d'un carré sont proportionnels.</li>
                    <li>L'âge et la taille d'une personne ne sont pas proportionnels.</li>
                </ul>
            </Exemples>
        </SousPartie>
        <SousPartie numero={2} titre="Tableau de proportionnalité">
            <Exemples>
                <ul class="liste_sans_puce">
                    <li>
                        <table class="donnees">
                            <tr>
                                <th>Nombre de pommes</th>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <th>Prix (€)</th>
                                <td>0,30</td>
                                <td>0,60</td>
                                <td>0,90</td>
                            </tr>
                        </table>
                    </li>
                    <li>
                        <table class="donnees">
                            <tr>
                                <th>Durée (h)</th>
                                <td>1</td>
                                <td>5</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <th>Distance (km)</th>
                                <td>50</td>
                                <td>250</td>
                                <td>500</td>
                            </tr>
                        </table>
                    </li>
                </ul>
            </Exemples>
        </SousPartie>
        <SousPartie numero={3} titre="Représentation graphique">
            <Propriete>
                Dans un graphique représentant deux grandeurs proportionnelles, les points sont alignés avec l'origine ;
                ils forment une droite passant par l'origine.
            </Propriete>
            <Exemples>
                <table class="donnees">
                    <tr>
                        <th>Nombre de pommes</th>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <th>Prix (€)</th>
                        <td>0,30</td>
                        <td>0,60</td>
                        <td>0,90</td>
                    </tr>
                </table>
                <svg viewBox="0 0 1000 1000" style="width: 30%;">
                    <!-- Axes -->
                    <line x1="100" y1="900" x2="900" y2="900" stroke="black" stroke-width="2" />
                    <line x1="100" y1="900" x2="100" y2="100" stroke="black" stroke-width="2" />
                    <!-- Graduations -->
                    {#each [0, 1, 2, 3] as x}
                        <line x1={100 + x * 200} y1="890" x2={100 + x * 200} y2="910" stroke="black" stroke-width="2" />
                        <text x={100 + x * 200} y="940" text-anchor="middle" font-size="30px">{x}</text>
                    {/each}
                    {#each [0.10, 0.20, 0.30, 0.40, 0.50, 0.60, 0.70, 0.80, 0.90] as y}
                        <line x1="110" y1={900 - y * 800} x2="90" y2={900 - y * 800} stroke="black" stroke-width="2" />
                        <text x="80" y={900 - y * 800} text-anchor="end" dominant-baseline="middle" font-size="30px">{y.toLocaleString("fr-FR", {minimumFractionDigits: 2})}</text>
                    {/each}
                    <!-- Points -->
                    {#each [0.30, 0.60, 0.90] as y}
                        <circle cx={100 + (y/0.3) * 200} cy={900 - y * 800} r="10" fill="black" />
                        <line x1={100 + (y/0.3) * 200} y1="900" x2={100 + (y/0.3) * 200} y2={900 - y * 800} stroke="red" stroke-width="2" stroke-dasharray="2 4" />
                        <line x1="100" y1={900 - y * 800} x2={100 + (y/0.3) * 200} y2={900 - y * 800} stroke="red" stroke-width="2" stroke-dasharray="2 4" />
                    {/each}
                    <!-- Droite passant par tous les points -->
                    <line x1="100" y1="900" x2="850" y2="0" stroke="blue" stroke-width="2" />
                </svg>
            </Exemples>
        </SousPartie>
    </Partie>
</Chapitre>

<style>
    .liste_sans_puce {
        list-style-type: none;
    }
    .donnees {
        border-collapse: collapse;
        width: 50%;
        margin-bottom: 2em;
    }
    .donnees th, .donnees td {
        border: 1px solid black;
        padding: 8px;
        text-align: center;
    }
</style>