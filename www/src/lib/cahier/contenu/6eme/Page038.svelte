<script lang="ts">
	import { Chapitre, Contenu, Partie } from "$lib/cahier/composants/de_chapitrage/*";
	import { Definition, Exemples } from "$lib/cahier/composants/de_cours/*";
	import LigneVide from "$lib/cahier/composants/LigneVide.svelte";


</script>

<Chapitre titre="Symétrie axiale" />

<Contenu apres_un_titre>
    <Partie numero={1} titre="Concept" />
    <LigneVide />
    <Definition lignes={3}>
        Deux figures (ℱ) et (ℱ') sont symétriques par rapport à une droite (d) si, 
        en repliant le plan le long de (d), (ℱ) et (ℱ') se superposent. <br>
        (d) est appelée axe de symétrie.
    </Definition>
    <LigneVide />
    <Exemples>
        
    </Exemples>
</Contenu>