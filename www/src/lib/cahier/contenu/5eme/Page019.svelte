<script lang="ts">
    import { Partie, Contenu } from "$lib/cahier/composants/de_chapitrage/*";
	import { Definition, Item, Notation, Remarque } from "$lib/cahier/composants/de_cours/*";
	import LigneVide from "$lib/cahier/composants/LigneVide.svelte";
	import { math } from "mathlifier";
</script>

<Contenu>
    <Partie numero={2} titre="Repérage sur une droite graduée" />
        <LigneVide />
        <Definition lignes={5}>
            Un repère orthogonal est constitué : 
            <Item>
                d'un point : <i>l'origine</i>
            </Item>
            <Item>
                d'un axe horizontal : <i>l'axe des abscisses</i>
            </Item>
            <Item>
                d'un axe vertical : <i>l'axe des ordonnées</i>
            </Item>
            Les deux axes sont perpendiculaires et se coupent en l'origine.
        </Definition>
        <LigneVide />
        <Definition lignes={2}>
            À chaque point du repère, on associe deux nombres : son <i>abscisse</i> et son <i>ordonnée</i>.
        </Definition>
        <Notation>
            Si le point A a pour abscisse {@html math('2')} et pour ordonnée {@html math('-3')}, on note {@html math('\\text{A}(2;-3)')}.
        </Notation>
</Contenu>