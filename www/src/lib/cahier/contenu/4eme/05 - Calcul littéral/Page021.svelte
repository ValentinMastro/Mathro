<script lang="ts">
    import { Contenu, Partie, SousPartie } from "$lib/cahier/composants/de_chapitrage/*";
    import { Definition, Exemples, Paragraphe } from "$lib/cahier/composants/de_cours/*";
	import Item from "$lib/cahier/composants/de_cours/Item.svelte";
	import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    import { math } from "mathlifier";
</script>

<Contenu>
    <Partie numero={2} titre="Développer, factoriser, réduire" />
        <LigneVide />
        <Definition lignes={4}>
            Développer une expression littérale, c'est transformer un produit en une somme.<br>
            Factoriser une expression littérale, c'est transformer une somme en un produit.
        </Definition>
        <LigneVide /> 
        <SousPartie numero={1} titre="Distributivité" />
            <Paragraphe couleur="rouge" nom_du_paragraphe="Règle">
                Soient {@html math("a")}, {@html math("b")} et {@html math("k")} trois nombres :  
                {@html math("k (a + b) = ka + kb")}
            </Paragraphe>
            <Exemples lignes={6} addStyle="display: flex;">
                <div style="width: 50%;">
                    <Item lignes={2} bullet="">
                        {@html math(`
                            \\begin{aligned}
                                x(x+4)  &= x \\times x + x \\times 4 \\\\
                                        &= x^2 + 4x
                            \\end{aligned}
                        `)}
                    </Item>
                    <Item lignes={2} bullet="">
                        {@html math(`
                            \\begin{aligned}
                                3(2x+5) &= 3 \\times 2x + 3 \\times 5 \\\\
                                        &= 6x + 15
                            \\end{aligned}
                        `)}
                    </Item>
                    <Item lignes={2} bullet="">
                        {@html math(`
                            \\begin{aligned}
                                2x(x+3) &= 2x \\times x + 2x \\times 3 \\\\
                                        &= 2x^2 + 6x
                            \\end{aligned}
                        `)}
                    </Item>
                </div>
                <div style="width: 50%;">
                    <Item lignes={2} bullet="">
                        {@html math(`
                            \\begin{aligned}
                                2x + xy &= 2 \\fbox{$x$} + \\fbox{$x$} y \\\\
                                &= x (2 + y)
                            \\end{aligned}
                        `)}
                    </Item>
                    <Item lignes={3} bullet="">
                        {@html math(`
                            \\begin{aligned}
                                3x + 15 &= 3x + 3 \\times 5 \\\\
                                        &= \\fbox{$3$} x + \\fbox{$3$} \\times 5 \\\\
                                        &= 3 (x + 5)
                            \\end{aligned}
                        `)}
                    </Item>
                </div>
            </Exemples>
</Contenu>