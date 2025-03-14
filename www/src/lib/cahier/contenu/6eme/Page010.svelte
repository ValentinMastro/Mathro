<script lang="ts">
	import { Contenu, DansLaMarge, Partie } from "$lib/cahier/composants/de_chapitrage/*";
	import { Exemples, Item, Propriete } from "$lib/cahier/composants/de_cours/*";
	import { Nombre } from "$lib/cahier/composants/de_marge/*";
    import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    import { math } from 'mathlifier';

    let facteur_1 = $state(3);
    let facteur_2 = $state(3);
</script>

<DansLaMarge>
    <LigneVide lignes={7} />
    <Nombre bind:valeur={facteur_1} min={1} max={9} label="multiplicateur" />
    <LigneVide />
    <Nombre bind:valeur={facteur_2} min={1} max={10} label="multiplicateur" />
</DansLaMarge>

<Contenu>
    <Partie numero={2} titre="Égalités de fractions" />
        <Propriete lignes={2}>
            Si on multiplie le numérateur et le dénominateur <u>par le même nombre</u>,
            alors on obtient une deuxième fraction égale à la première.
        </Propriete>
        <Exemples lignes={6}>
            <Item lignes={2}>
                {@html math(`\\dfrac{2}{3} _{\\xrightarrow{\\color{red} \\times ${facteur_1}}}^{\\xrightarrow[\\color{red} \\times ${facteur_1}]{}} \\dfrac{${2*facteur_1}}{${3*facteur_1}}`)}
            </Item>
            <Item lignes={2}>
                {@html math(`\\dfrac{4}{5} 
                = 
                \\dfrac
                    {4 {\\color{red} \\times ${facteur_2}}}
                    {5 {\\color{red} \\times ${facteur_2}}}
                =
                \\dfrac
                    {${4 * facteur_2}}
                    {${5 * facteur_2}}  `)}
            </Item>
            <Item lignes={2}>
                {@html math(`
                    \\dfrac{54}{63} = \\dfrac{6 \\times 9}{7 \\times 9} = \\dfrac{6 \\times \\cancel{9}}{7 \\times \\cancel{9}} = \\dfrac{6}{7}
                `)}
            </Item>
        </Exemples>
</Contenu>