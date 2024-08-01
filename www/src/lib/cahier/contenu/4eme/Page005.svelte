<script lang="ts">
    import Contenu from '$lib/cahier/composants/de_chapitrage/Contenu.svelte';
    import Partie from '$lib/cahier/composants/de_chapitrage/Partie.svelte';
	import SousPartie from '$lib/cahier/composants/de_chapitrage/SousPartie.svelte';

    import Propriete from '$lib/cahier/composants/de_cours/Propriete.svelte';
    import Item from '$lib/cahier/composants/de_cours/Item.svelte';
	import Remarque from '$lib/cahier/composants/de_cours/Remarque.svelte';
    import Exemple from '$lib/cahier/composants/de_cours/Exemple.svelte';
    import Exemples from '$lib/cahier/composants/de_cours/Exemples.svelte';

    import LigneVide from '$lib/cahier/composants/LigneVide.svelte';

    import { math, alignStar } from 'mathlifier';
</script>

<Contenu>
        <SousPartie numero={2} titre="Multiplication et division" />
            <LigneVide />
            <Propriete lignes={3}>
                Pour multiplier des nombres relatifs : 
                <Item>
                    si le nombre de facteurs négatifs est <i>pair</i>, le produit est positif
                </Item>
                <Item>
                    si le nombre de facteurs négatifs est <i>impair</i>, le produit est négatif
                </Item>
            </Propriete>
            <Remarque>
                Pour les divisions, on utilise la même règle de signes.
            </Remarque>
            <Exemples lignes={2}>
                <Item>
                    {@html math("(-2) \\times (-6) \\times (+6) \\times 4 \\times (-2) = -576")}
                </Item>
                <Item>
                    {@html math("(-2) \\times (-6) \\times 6 \\times (+4) \\times (-2) \\div (-2) = 288")}
                </Item>
            </Exemples>

            <LigneVide lignes={2} />
    <Partie numero={3} titre="La priorité des opérations" />
            <LigneVide />
            <Propriete lignes={4}>
                Dans un calcul contenant plusieurs opérations :
                <Item>la priorité est donnée aux calculs entres parenthèses</Item>
                <Item>puis, aux multiplications et aux divisions (de gauche à droite)</Item>
                <Item>enfin, aux additions et aux soustractions (de gauche à droite)</Item>
            </Propriete>
            <Remarque lignes={2}>
                Dans un calcul contenant un trait de fraction, on calcule d'abord le numérateur et le
                dénominateur, puis on effectue la division.
            </Remarque>
            <Exemple lignes={6}>
                {@html alignStar(`
                        \\text{A} &= 3 \\times (4 + 2) \\times 5 - 6 \\div 2 \\\\[-0.3pt]
                        &= 3 \\times 6 \\times 5 - 6 \\div 2 \\\\[-0.3pt]
                        &= 18 \\times 5 - 6 \\div 2 \\\\[-0.3pt]
                        &= 90 - 6 \\div 2 \\\\[-0.3pt]
                        &= 90 - 3 \\\\[-0.3pt]
                        &= 87
                `)}
            </Exemple>
</Contenu>