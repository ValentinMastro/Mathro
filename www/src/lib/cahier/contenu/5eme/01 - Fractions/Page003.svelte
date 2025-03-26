<script lang="ts">
    import { Chapitre, Contenu, Partie } from "$lib/cahier/composants/de_chapitrage/*";
    import { Definition, Exemples, Notation, Item, Vocabulaire } from "$lib/cahier/composants/de_cours/*";
	import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    import { math } from 'mathlifier';
</script>

<Chapitre titre="Fractions" />

<Contenu apres_un_titre={true}>
    <Partie numero={1} titre="Concept" />
        <LigneVide />
        <Definition lignes={2}>
            Soient deux nombres entiers {@html math('a')} et {@html math('b')} avec {@html math('b \\neq 0')}.<br>
            Le quotient de {@html math('a')} par {@html math('b')} est le nombre qui, multiplié par {@html math('b')}, est égal à {@html math('a')}.<br>
        </Definition>
        <Notation>
            On le note {@html math('\\frac{a}{b}')}.
        </Notation>
        <Exemples lignes={5}>
            <Item lignes={2}>
                {@html math('\\frac{7}{3}')} est le quotient de 7 par 3. <br>
                {@html math('\\frac{7}{3} \\times 3 = \\frac{7}{\\cancel{3}} \\times \\cancel{3} = 7')}
            </Item>
            <LigneVide />
            <Item lignes={2}>
                {@html math('\\frac{17}{6}')} est le quotient de 17 par 6. <br>
                {@html math('\\frac{17}{6} \\times 6 = \\frac{17}{\\cancel{6}} \\times \\cancel{6} = 17')}
            </Item>
        </Exemples>
        <LigneVide />
        <Vocabulaire lignes={2}>
            On dit qu'un nombre est rationnel lorsqu'il peut s'écrire sous forme de fraction.
        </Vocabulaire>
        <Exemples lignes={7}>
            <Item>
                {@html math('\\frac{3}{4}')} est rationnel car c'est une fraction.
            </Item>
            <Item lignes={2}>
                {@html math('1{,}5')} est un nombre rationnel car il peut s'écrire sous forme de fraction : {@html math('1{,}5 = \\frac{3}{2}')}
            </Item>
            <Item lignes={2}>
                {@html math('1{,}333...')} est rationnel car il peut s'écrire sous forme de fraction : {@html math('1{,}333... = \\frac{4}{3}')}
            </Item>
            <Item lignes={2}>
                {@html math('\\pi')} n'est pas un nombre rationnel, il n'est pas possible de l'écrire sous forme de fraction.
            </Item>
        </Exemples>
</Contenu>