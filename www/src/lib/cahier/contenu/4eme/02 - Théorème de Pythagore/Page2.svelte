<script lang="ts">
	import { Contenu, SousPartie } from "$lib/cahier/composants/de_chapitrage/*";
    import { Definition, Exemples, Item } from "$lib/cahier/composants/de_cours/*";
    import { math } from "mathlifier";
</script>

<Contenu>
    <SousPartie numero={2} titre="La racine carrée d'un nombre" />
        <Definition lignes={2}>
            La racine carrée d'un nombre est l'opération réciproque du carré d'un nombre.
            Elle se note avec le symbole « radical » : {@html math("\\sqrt{\\quad}")}.
        </Definition>
        <Exemples lignes={3}>
            <Item>
                La racine carrée de 144 est 12 car {@html math("12 \\times 12 = 144")}.
            </Item>
            <Item>
                {@html math("\\sqrt{64} = 8")} car {@html math("8 \\times 8 = 64")}.
            </Item>
            <Item>
                {@html math("\\sqrt{2{,}25} = 1{,}5")} car {@html math("1{,}5 \\times 1{,}5 = 2{,}25")}.
            </Item>
        </Exemples>
</Contenu>