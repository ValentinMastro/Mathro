<script lang="ts">
    import { Contenu, DansLaMarge, Partie, SousPartie } from "$lib/cahier/composants/de_chapitrage/*";
    import { Definition, Exemple, Exemples, Item, Methode, Schema } from "$lib/cahier/composants/de_cours/*";
	import { Nombre } from "$lib/cahier/composants/de_marge/*";
    import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    import { math } from "mathlifier";

    let abscisses_graduations: {abscisse: number, taille_graduation: number}[] = 
        [...Array(11).keys()]
        .map(i => ({
            abscisse: 300 + 100*(i+1),
            taille_graduation: (i == 0 || i == 10) ? 30 : 15,
        }));

    let nombre = $state(0.237);
    let chiffres = $derived({
        dixieme: Math.floor(nombre * 10),
        centieme: Math.floor(nombre * 100 - 10 * Math.floor(nombre * 10)),
        millieme: Math.floor(nombre * 1000 - 100 * Math.floor(nombre * 10) - 10 * Math.floor(nombre * 100 - 10 * Math.floor(nombre * 10))),
    })

    let abscisses = $derived({
        dixieme: 400 + 100 * chiffres["dixieme"] + 10 * chiffres["centieme"] + chiffres["millieme"],
        centieme: 400 + 100 * chiffres["centieme"] + 10 * chiffres["millieme"],
        millieme: 400 + 100 * chiffres["millieme"],
    })

    let extremites = $derived([
        {
            debut: 0,
            fin: 1,
        },
        {
            debut: 0 + 0.1 * chiffres["dixieme"],
            fin: 0.1 + 0.1 * chiffres["dixieme"],
        },
        {
            debut: 0 + 0.1 * chiffres["dixieme"] + 0.01 * chiffres["centieme"],
            fin: 0.01 + 0.1 * chiffres["dixieme"] + 0.01 * chiffres["centieme"],
        }
    ])
</script>

<DansLaMarge>
    <LigneVide lignes={5} />
    <Nombre bind:valeur={nombre} min={0} max={1} step={0.001} />
</DansLaMarge>

<Contenu>
    <Partie numero={3} titre="Repérage sur une droite graduée" />
        <LigneVide />
        <Exemple />
        <Schema lignes={10} aspectRatioSVG={1.7}>
            {#snippet svg()}
                <circle cx={abscisses["dixieme"]} cy={200} r={10} fill="red" />
                <circle cx={abscisses["centieme"]} cy={500} r={12} fill="red" />
                <circle cx={abscisses["millieme"]} cy={800} r={14} fill="red" />
                <!-- Axes -->
                {#each [200, 500, 800] as ordonnee_axe, index}
                    <line x1={300} x2={1500} y1={ordonnee_axe} y2={ordonnee_axe} stroke="black" stroke-width={5} />
                    {#each abscisses_graduations as {abscisse, taille_graduation}}
                        <line x1={abscisse} x2={abscisse} y1={ordonnee_axe - taille_graduation} y2={ordonnee_axe + taille_graduation} stroke="black" stroke-width={5} />
                    {/each}
                    <!-- Graduations -->
                    <text x={400} y={ordonnee_axe + 80} font-size={45} text-anchor="middle">{extremites[index]["debut"].toLocaleString("fr-FR")}</text>
                    <text x={1400} y={ordonnee_axe + 80} font-size={45} text-anchor="middle">{extremites[index]["fin"].toLocaleString("fr-FR")}</text>
                {/each}
                <!-- Nombre -->
                <text x={abscisses["dixieme"]} y={200 + 80} font-size={45} text-anchor="middle" fill="red">{nombre.toLocaleString("fr-FR")}</text>
                <text x={abscisses["centieme"]} y={500 + 80} font-size={45} text-anchor="middle" fill="red">{nombre.toLocaleString("fr-FR")}</text>
                {#if chiffres["millieme"] != 0}
                    <text x={abscisses["millieme"]} y={800 + 80} font-size={45} text-anchor="middle" fill="red">{nombre.toLocaleString("fr-FR")}</text>
                {/if}
                {/snippet}
        </Schema>

        <LigneVide />
    <Partie numero={4} titre="Comparaison" />
        <LigneVide />
        <Methode lignes={4}>
            Pour comparer deux nombres décimaux : 
            <Item>
                on compare d'abord leur partie entière (avant la virgule)
            </Item>
            <Item lignes={2}>
                puis, on compare chaque chiffre après la virgule, en commençant par les dixièmes, puis les centièmes, etc.
            </Item>
        </Methode>
        <Exemples lignes={2}>
            <Item>
                {@html math("1{,}23 < 1{,}24")}
            </Item>
            <Item>
                {@html math("3{,}3 > 3{,}07")}
            </Item>
        </Exemples>
    
</Contenu>