<script lang="ts">
    import { Contenu, Partie, SousPartie } from "$lib/cahier/composants/de_chapitrage/*";
    import { Definition, Exemples, Item, Propriete } from "$lib/cahier/composants/de_cours/*";
    import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    import { math } from 'mathlifier';
</script>

<Contenu>
    <Partie numero={2} titre="Calculs sur les fractions" />
        <SousPartie numero={1} titre="Fractions égales" />
            <LigneVide />
            <Definition>
                Deux fractions sont égales si elles représentent le même quotient.
            </Definition>
            <Exemples lignes={2}>
                <Item>
                    {@html math(`\\frac{3}{4} = \\frac{6}{8}`)} car {@html math(`\\frac{3}{4} = 3 \\div 4 = 0,75`)} et {@html math(`\\frac{6}{8} = 6 \\div 8 = 0,75`)}.
                </Item>
                <Item>
                    {@html math(`\\frac{2}{3} \\neq \\frac{3}{4}`)} car {@html math(`\\frac{2}{3} = 2 \\div 3 = 0,666...`)} et {@html math(`\\frac{3}{4} = 3 \\div 4 = 0,75`)}.
                </Item>
            </Exemples>
            <Propriete lignes={3}>
                Si deux fractions sont égales, alors on peut multiplier le numérateur et le dénominateur de l'une par un même nombre non nul pour obtenir l'autre fraction.
            </Propriete>
            <Exemples lignes={2}>
                <Item>
                    {@html math(`\\dfrac{3}{4} _{\\color{red} \\rightarrow \\times 2}^{\\color{red} \\rightarrow \\times 2} = \\dfrac{6}{8}`)}.
                </Item>
                <Item>
                    {@html math(`\\dfrac{2}{3} _{\\color{red} \\rightarrow \\times 4}^{\\color{red} \\rightarrow \\times 4} \\neq \\dfrac{8}{12}`)}.
                </Item>
            </Exemples>
</Contenu>