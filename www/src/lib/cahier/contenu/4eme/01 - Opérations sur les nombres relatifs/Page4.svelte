<script lang="ts">
    import { Contenu, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
    import { Propriete, Item, Remarque, Exemples } from '$lib/cahier/composants/de_cours/*';
    import { math } from 'mathlifier';
</script>

<Contenu>
    <SousPartie numero={2} titre="Multiplication et division" />
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
</Contenu>