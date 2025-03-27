<script lang="ts">
	import { Chapitre, Contenu, Partie } from "$lib/cahier/composants/de_chapitrage/*";
    import { Definition, Exemples, Item } from "$lib/cahier/composants/de_cours/*";
	import LigneVide from "$lib/cahier/composants/LigneVide.svelte";
    import { math } from 'mathlifier';
</script>

<Chapitre titre="Équations" />

<Contenu apres_un_titre>
    <Partie numero={1} titre="Concept" />
        <LigneVide />
        <Definition lignes={4}>
            Une équation est une égalité contenant une variable <i>inconnue</i>, souvent désignée par la lettre {@html math('x')}.<br>
            Lorsqu'en remplaçant la valeur de l'inconnue, l'égalité est vérifiée, on dit que cette valeur est une <i>solution</i> de l'équation.
        </Definition>
        <LigneVide />
        <Exemples lignes={18}>
            <Item lignes={9}>
                Dans l'équation {@html math('2x+5 = 3')}:
                <Item lignes={4}>
                        Si je remplace {@html math('x')} par {@html math("-1")}, <br>
                        à gauche du égal, j'aurai {@html math('2 \\times (-1) + 5 = \\fcolorbox{red}{white}{3}')} <br>
                        et à droite du égal, j'aurai {@html math('\\fcolorbox{red}{white}{3}')}.<br>
                        <span style="color: red">-1 est une solution de l'équation</span>
                </Item>
                <Item lignes={4}>
                        Si je remplace {@html math('x')} par 2, <br>
                        à gauche du égal, j'aurai {@html math('2 \\times 2 + 5 = 4 + 5 = \\fcolorbox{red}{white}{9}')} <br>
                        et à droite du égal, j'aurai {@html math('\\fcolorbox{red}{white}{3}')}.<br>
                        <span style="color: red">2 n'est pas une solution de l'équation</span>
                </Item>
            </Item>
            <Item lignes={9}>
                    Dans l'équation {@html math('7x+5 = 6x+6')} :
                    <Item lignes={4}>
                            Si je remplace {@html math('x')} par 0, <br>
                            à gauche du égal, j'aurai {@html math('7 \\times 0 + 5 = 0 + 5 = \\fcolorbox{red}{white}{5}')} <br>
                            et à droite du égal, j'aurai {@html math('6 \\times 0 + 6 = 0 + 6 = \\fcolorbox{red}{white}{6}')}.<br>
                            <span style="color: red">0 n'est pas une solution de l'équation</span>
                    </Item>
                    <Item lignes={4}>
                            Si je remplace {@html math('x')} par 1, <br>
                            à gauche du égal, j'aurai {@html math('7 \\times 1 + 5 = 7 + 5 = \\fcolorbox{red}{white}{12}')} <br>
                            et à droite du égal, j'aurai {@html math('6 \\times 1 + 6 = 6 + 6 = \\fcolorbox{red}{white}{12}')}.<br>
                            <span style="color: red">1 est une solution de l'équation</span>
                    </Item>
            </Item>
        </Exemples>
</Contenu>