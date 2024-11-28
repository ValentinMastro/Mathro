<script lang="ts">
	import { Chapitre, Contenu, Partie } from "$lib/cahier/composants/de_chapitrage/*";
	import { Definition, Item } from "$lib/cahier/composants/de_cours/*";
	import Paragraphe from "$lib/cahier/composants/de_cours/Paragraphe.svelte";
	import LigneVide from "$lib/cahier/composants/LigneVide.svelte";


</script>

<Chapitre titre="Polygones" />

<Contenu apres_un_titre>
    <Partie numero={1} titre="Les différents types de polygones" />
        <LigneVide />
        <Definition>
            Un polygone est une figure fermée qui possède plusieurs côtés.
        </Definition>
        <Paragraphe nom_du_paragraphe="Nomenclature" lignes={6}>
            <Item>
                3 côtés : triangle
            </Item>
            <Item>
                4 côtés : quadrilatère
            </Item>
            <Item>
                5 côtés : pentagone
            </Item>
            <Item>
                6 côtés : hexagone
            </Item>
            <Item>
                8 côtés : octogone
            </Item>
            <Item>
                10 côtés : décagone
            </Item>
        </Paragraphe>
</Contenu>