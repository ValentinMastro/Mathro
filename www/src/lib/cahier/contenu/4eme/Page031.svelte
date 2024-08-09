<script lang="ts">
    import { Contenu, SousPartie } from "$lib/cahier/composants/de_chapitrage/*";
    import { Item, Paragraphe, Definition, Exemples } from "$lib/cahier/composants/de_cours/*";
    import LigneVide from "$lib/cahier/composants/LigneVide.svelte"

    import { math, display } from 'mathlifier';

    let serie_1 = [2, 6, 4, 6, 3, 1, 5, 3];
    let serie_2 = [45, 38, 46, 39, 40];

    let moyenne_2 = $derived(serie_2.reduce((a,b) => a+b, 0) / serie_2.length);

    function mediane(serie: number[]): number {
        serie = serie.slice().sort((a, b) => a - b); // ordre croissant
        if (serie.length % 2 == 0) {
            return (serie[serie.length/2] + serie[serie.length/2-1]) / 2;
        } else {
            return serie[Math.floor(serie.length/2)];
        }
    }

    let mediane_2 = $derived(mediane(serie_2));
</script>

<Contenu>
    <Paragraphe lignes={2.7} nom_du_paragraphe='Exemples (suite)' couleur="rgb(0, 0, 138)">
        <Item>
            {@html math(`\\left\\{ ${serie_2.join("~;~")}  \\right\\}`)}
        </Item>
        {@html display(`
            \\bar{x}
            = \\frac{${serie_2.join("+")}}{${serie_2.length}} 
            = ${moyenne_2.toLocaleString("fr-FR", {maximumFractionDigits: 3})}
        `)}
    </Paragraphe>
    <LigneVide lignes={0.3} />
    <SousPartie numero={2} titre="Étendue" />
        <LigneVide />
        <Definition lignes={2}>
            <i>L'étendue</i> d'une série statistique est la différence entre la plus grande valeur (le maximum) et la plus petite valeur (le minimum).
        </Definition>
        <Exemples lignes={2}>
            <Item>
                {@html math(`\\left\\{ ${serie_1.join("~;~")}  \\right\\} \\longrightarrow `)}
                L'étendue est {@html math(`
                    ${Math.max(...serie_1)} - ${Math.min(...serie_1)} = 
                    ${Math.max(...serie_1) - Math.min(...serie_1)}
                `)}
            </Item>
            <Item>
                {@html math(`\\left\\{ ${serie_2.join("~;~")}  \\right\\} \\longrightarrow `)}
                L'étendue est {@html math(`
                    ${Math.max(...serie_2)} - ${Math.min(...serie_2)} = 
                    ${Math.max(...serie_2) - Math.min(...serie_2)}
                `)}
            </Item>
        </Exemples>
        <SousPartie numero={3} titre="Médiane" />
            <LigneVide />
            <Definition lignes={4}>
                La <i>médiane</i> d'une série statistique est la valeur partageant la série en deux parties de même effectif.<br>
                La première partie contient les valeurs inférieures à la médiane, la seconde partie contient les valeurs supérieures à la médiane.
            </Definition>
            <Exemples lignes={4}>
                {@html math(`\\left\\{ ${serie_2.join("~;~")}  \\right\\}`)} <br>
                La médiane est {@html math(`${mediane_2}`)}. <br>
                En effet, on peut scinder cette série en deux : <br>
                {@html math(`\\left\\{ ${serie_2.slice().filter((e) => e < mediane_2).join("~;~")}  \\right\\}`)} et 
                {@html math(`\\left\\{ ${serie_2.slice().filter((e) => e > mediane_2).join("~;~")}  \\right\\}`)}
            </Exemples>
</Contenu>