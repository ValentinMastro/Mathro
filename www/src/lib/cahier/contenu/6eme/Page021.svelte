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

    let nombre = $state(1.23);
    let chiffres = $derived({
        unite: Math.floor(nombre),
        dixieme: Math.floor((nombre - Math.floor(nombre)) * 10),
        centieme: Math.floor((nombre - Math.floor(nombre)) * 100),
    })

    let abscisse_nombre_dixiemes = $derived(400 + 1000*(nombre - 1));
    let abscisse_nombre_centiemes = $derived(400 + 1000*((nombre - 1)*10));
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
                <circle cx={abscisse_nombre_dixiemes} cy={200} r={10} fill="red" />
                <circle cx={abscisse_nombre_centiemes} cy={500} r={12} fill="red" />
                <!-- Axes -->
                {#each [200, 500, 800] as ordonnee_axe}
                    <line x1={300} x2={1500} y1={ordonnee_axe} y2={ordonnee_axe} stroke="black" stroke-width={5} />
                    {#each abscisses_graduations as {abscisse, taille_graduation}}
                        <line x1={abscisse} x2={abscisse} y1={ordonnee_axe - taille_graduation} y2={ordonnee_axe + taille_graduation} stroke="black" stroke-width={5} />
                    {/each}
                {/each}
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