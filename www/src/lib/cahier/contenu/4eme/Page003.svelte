<script lang="ts">
    import Chapitre from '$lib/cahier/composants/de_chapitrage/Chapitre.svelte';
    import Contenu from '$lib/cahier/composants/de_chapitrage/Contenu.svelte';
	import Partie from '$lib/cahier/composants/de_chapitrage/Partie.svelte';
    import SousPartie from '$lib/cahier/composants/de_chapitrage/SousPartie.svelte';

    import Definition from '$lib/cahier/composants/de_cours/Definition.svelte';
    import Exemples from '$lib/cahier/composants/de_cours/Exemples.svelte';
    import Remarque from '$lib/cahier/composants/de_cours/Remarque.svelte';

    import LigneVide from '$lib/cahier/composants/LigneVide.svelte';
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
            <LigneVide />
            <Exemples lignes={4}>
                <ul>
                    <li>5 est un nombre entier naturel</li>
                    <li>-5 n'est pas un nombre entier naturel</li>
                    <li>5,5 n'est pas un nombre entier naturel</li>
                </ul>
            </Exemples>
            <Definition lignes={2}>
                Un nombre <i>entier relatif</i> n'a pas de partie décimale et peut être positif comme négatif.
            </Definition>
            <Remarque>
                0 est considéré comme un nombre négatif <u>et</u> positif.
            </Remarque>
        
</Contenu>