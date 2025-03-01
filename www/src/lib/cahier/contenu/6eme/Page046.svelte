<script lang="ts">
	import { Chapitre, Contenu } from "$lib/cahier/composants/de_chapitrage/*";
	import { Definition, Item, Propriete, Exemples, Schema } from "$lib/cahier/composants/de_cours/*";

	import LigneVide from "$lib/cahier/composants/LigneVide.svelte";
</script>

<Chapitre titre="Division décimale" />

<Contenu apres_un_titre>
    <Definition lignes={2}>
        Contrairement à la division euclidienne, la division décimale admet pour quotient un nombre décimal.
    </Definition>
    <LigneVide />
    <Propriete lignes={5}>
        Lorsque l'on effectue une division décimale :
        <Item lignes={2}>
            lorsqu'il n'y a plus de chiffre à abaisser, on peut ajouter au
            dividende autant de zéros que l'on veut après la virgule ;
        </Item>
        <Item lignes={2}>
            la division s'arrête lorsque le reste est égal à 0 <br>
            OU que les restes se répètent en boucle.
        </Item>
    </Propriete>
    <LigneVide />
    <Exemples>
        <Schema>
            
        </Schema>
    </Exemples>
</Contenu>
