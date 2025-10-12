<script lang="ts">
    import { Contenu, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
    import { Definition, Exemples, Item } from '$lib/cahier/composants/de_cours/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';
    import { math } from 'mathlifier';
</script>

<Contenu>
    <SousPartie numero={2} titre="Fractions et nombres rationnels" />
        <Definition lignes={2}>
            Une fraction est un moyen d'écrire le résultat d'une division entre deux nombres entiers :
            le numérateur et le dénominateur.
        </Definition>
        <Definition lignes={2}>
            S'il existe une division entre deux nombres entiers égale à un nombre, alors ce nombre est <i>rationnel</i>.
        </Definition>
        <Exemples lignes={5}>
            <Item>
                {@html math('0{,}75')} est rationnel car {@html math('0{,}75 = \\dfrac{3}{4}')}
            </Item>
            <LigneVide />
            <Item>
                {@html math('0{,}17')} est rationnel car {@html math('0{,}17 = \\dfrac{17}{100}')}
            </Item>
            <LigneVide lignes={1.1} />
            <Item>
                {@html math('\\pi')} n'est pas un nombre rationnel
            </Item>
        </Exemples>
</Contenu>
