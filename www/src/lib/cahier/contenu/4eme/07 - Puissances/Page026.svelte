<script lang="ts">
    import { Contenu, Partie, SousPartie} from "$lib/cahier/composants/de_chapitrage/*";
    import { Paragraphe, Remarque, Exemples, Definition, Item, Methode } from "$lib/cahier/composants/de_cours/*";
    import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    import { math } from 'mathlifier';
</script>

<Contenu>
    <SousPartie numero={2} titre="Écriture scientifique d'un nombre décimal" />
        <LigneVide />
        <Methode lignes={5}>
            Soit {@html math("n")} un nombre entier positif.
            <Item lignes={2}>
                Multiplier un nombre par {@html math("10^n")}, c'est déplacer la virgule de {@html math("n")} chiffres vers la droite.
            </Item>
            <Item lignes={2}>
                Multiplier un nombre par {@html math("10^{-n}")}, c'est déplacer la virgule de {@html math("n")} chiffres vers la gauche.
            </Item>
        </Methode>
        <Remarque>
            Multiplier par {@html math("10^{-n}")} revient à diviser par {@html math("10^n")}.
        </Remarque>
        <Exemples lignes={6}>
            <Item>
                {@html math(`
                    1{,}234 \\times 10^2 = 123{,}4 
                `)}
            </Item>
            <Item>
                {@html math(`
                    96{,}76 \\times 10^{-3} = 0{,}096~76
                `)}
            </Item>
            <Item>
                {@html math(`
                    39{,}426~49 \\times 10^4 = 394~264{,}9    
                `)}
            </Item>
            <Item>            
                {@html math(`
                    0{,}003~825 \\times 10^{-1} = 0{,}000~382~5
                `)}
            </Item>
            <Item>
                {@html math(`
                    1{,}927~4 \\times 10^5 = 192~740
                `)}
            </Item>
            <Item>
                {@html math(`
                    96{,}76 \\times 10^{-3} = 0{,}096~76
                `)}
            </Item>
        </Exemples>
        <Definition lignes={4}>
            L'écriture scientifique d'un nombre décimal est <i>l'unique</i> écriture de la forme {@html math(`a \\times 10^n`)} où :
            <Item>
                {@html math("a")} est un nombre décimal tel que {@html math('1 \\leq a \\lt 10')}
            </Item>
            <Item>
                {@html math("n")} est un entier relatif
            </Item>
        </Definition>
        <Exemples lignes={8}>
            <Item>
                {@html math(`
                    120~546 = 1{,}205~46 \\times 10^5
                `)}
            </Item>
            <Item>
                {@html math(`
                    0{,}436 = 4{,}36 \\times 10^{-1}
                `)}
            </Item>
            <Item>
                {@html math(`
                    540~000 = 5{,}4 \\times 10^5
                `)}
            </Item>
            <Item>
                {@html math(`
                    0{,}008~76 = 8{,}76 \\times 10^{-3}
                `)}
            </Item>
            <Item>
                {@html math(`
                    0{,}071~5 = 7{,}15 \\times 10^{-2}
                `)}
            </Item>
            <Item>
                {@html math(`
                    12{,}34 = 1{,}234 \\times 10^1
                `)}
            </Item>
            <Item>
                {@html math(`
                    0{,}000~16 = 1{,}6 \\times 10^{-4}
                `)}
            </Item>
            <Item>
                {@html math(`
                    6{,}725 = 6{,}725 \\times 10^0
                `)}
            </Item>
        </Exemples>
</Contenu>