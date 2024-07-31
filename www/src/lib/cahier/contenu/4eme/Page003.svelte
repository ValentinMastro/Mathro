<script lang="ts">
    import Chapitre from '$lib/cahier/composants/de_chapitrage/Chapitre.svelte';
    import Contenu from '$lib/cahier/composants/de_chapitrage/Contenu.svelte';
	import Partie from '$lib/cahier/composants/de_chapitrage/Partie.svelte';
    import SousPartie from '$lib/cahier/composants/de_chapitrage/SousPartie.svelte';

    import Definition from '$lib/cahier/composants/de_cours/Definition.svelte';
    import Exemples from '$lib/cahier/composants/de_cours/Exemples.svelte';
    import Remarque from '$lib/cahier/composants/de_cours/Remarque.svelte';
    import Item from '$lib/cahier/composants/de_cours/Item.svelte';

    import LigneVide from '$lib/cahier/composants/LigneVide.svelte';

    import { math } from 'mathlifier';
</script>

<Chapitre titre="Opérations sur les nombres relatifs" />

<Contenu apres_un_titre={true}>
    <Partie numero={1} titre="Natures des nombres" />
        <SousPartie numero={1} titre="Nombres entiers" />
            <LigneVide />
            <Definition lignes={2}>
                Un nombre <i>entier naturel</i> permet de compter des éléments. Il est positif et n'a pas de
                partie décimale.
            </Definition>
            <Exemples lignes={3}>
                <Item>5 est un nombre entier naturel</Item>
                <Item>-5 n'est pas un nombre entier naturel</Item>
                <Item>5,5 n'est pas un nombre entier naturel</Item>
            </Exemples>
            <Definition lignes={2}>
                Un nombre <i>entier relatif</i> n'a pas de partie décimale et peut être positif comme négatif.
            </Definition>
            <Remarque>
                0 est considéré comme un nombre négatif <u>et</u> positif.
            </Remarque>
            <LigneVide />
        <SousPartie numero={2} titre="Fractions et nombres rationnels" />
            <LigneVide />
            <Definition lignes={2}>
                Une fraction est un moyen d'écrire le résultat d'une division entre deux nombres entiers :
                le numérateur et le dénominateur.
            </Definition>
            <Definition lignes={2}>
				S'il existe une division entre deux nombres entiers égale à un nombre, alors ce nombre est <i>rationnel</i>.
			</Definition>
			<Exemples lignes={3}>
				<Item>
					{@html math('0{,}75')} est rationnel car {@html math('0{,}75 = \\frac{3}{4}')}
                </Item>
                <Item>
					{@html math('0{,}17')} est rationnel car {@html math('0{,}17 = \\frac{17}{100}')}
                </Item>
                <Item>
					{@html math('\\pi')} n'est pas un nombre rationnel
                </Item>
			</Exemples>
</Contenu>