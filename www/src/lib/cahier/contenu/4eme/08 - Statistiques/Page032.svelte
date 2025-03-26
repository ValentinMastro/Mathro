<script lang="ts">
	import { Contenu } from "$lib/cahier/composants/de_chapitrage/*";
    import { Paragraphe, Exemples, Item, Methode } from "$lib/cahier/composants/de_cours/*";
    import { math } from 'mathlifier';

    let serie_1 = [2, 6, 4, 6, 3, 1, 5, 3];
    let serie_2 = [45, 38, 46, 39, 40];

    function mediane(serie: number[]): number {
        serie = serie.slice().sort((a, b) => a - b); // ordre croissant
        if (serie.length % 2 == 0) {
            return (serie[serie.length/2] + serie[serie.length/2-1]) / 2;
        } else {
            return serie[Math.floor(serie.length/2)];
        }
    }

    let mediane_1 = $derived(mediane(serie_1));
    let mediane_2 = $derived(mediane(serie_2));
</script>

<Contenu>
    <Methode lignes={6}>
        Pour trouver la médiane d'une série statistique, on procède ainsi :
        <Item bullet="1. " bullet_color="black">
            On ordonne les valeurs de la série par ordre croissant.
        </Item>
        <Item bullet="2. " bullet_color="black" lignes={2}>
            Si l'effectif total est impair, la médiane est la valeur du milieu (la {@html math(`\\frac{\\text{N}+1}{2}`)}ème valeur).
        </Item>
        <Item bullet="3. " bullet_color="black" lignes={2}>
            Si l'effectif total est pair, la médiane est la moyenne des deux valeurs du milieu (la {@html math(`\\frac{\\text{N}}{2}`)}ème et la {@html math(`(\\frac{\\text{N}}{2}+1)`)}ème valeurs).
        </Item>
    </Methode>
    <Exemples lignes={13}>
        <Item lignes={7}>
            {@html math(`\\left\\{ ${serie_1.join("~;~")}  \\right\\}`)}
            <Item bullet="➜" lignes={2}>
                On trie les valeurs dans l'ordre croissant : {@html math(`\\left\\{ ${serie_1.slice().sort((a,b)=> a-b).join("~;~")}  \\right\\}`)}
            </Item>
            <Item bullet="➜" lignes={4}>
                {@html math(`\\text{N}=${serie_1.length}`)} est pair, donc la médiane est entre la {@html math(`\\frac{\\text{N}}{2}`)}ème et la {@html math(`(\\frac{\\text{N}}{2}+1)`)}ème valeurs :<br>
                Autrement dit, entre la {serie_1.length/2}ème valeur et la {serie_1.length/2+1}ème valeur.<br>
                La médiane est donc {mediane_1.toLocaleString("fr-FR", {maximumFractionDigits: 3})}.
            </Item>
        </Item>
        <Item lignes={6}>
            {@html math(`\\left\\{ ${serie_2.join("~;~")}  \\right\\}`)}
            <Item bullet="➜" lignes={2}>
                On trie les valeurs dans l'ordre croissant : {@html math(`\\left\\{ ${serie_2.slice().sort((a,b)=> a-b).join("~;~")}  \\right\\}`)}
            </Item>
            <Item bullet="➜" lignes={3}>
                {@html math(`\\text{N}=${serie_2.length}`)} est impair, donc la médiane est la {@html math(`\\frac{\\text{N}+1}{2}`)}ème valeur :<br>
                Autrement dit, la {Math.floor(serie_2.length/2)+1}ème valeur.<br>
                La médiane est donc {mediane_2.toLocaleString("fr-FR", {maximumFractionDigits: 1})}.
            </Item>
        </Item>
    </Exemples>
</Contenu>