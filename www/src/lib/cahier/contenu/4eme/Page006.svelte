<script lang="ts">
    import Chapitre from "$lib/cahier/composants/de_chapitrage/Chapitre.svelte";
    import Contenu from "$lib/cahier/composants/de_chapitrage/Contenu.svelte";
    import Partie from "$lib/cahier/composants/de_chapitrage/Partie.svelte";
    import SousPartie from "$lib/cahier/composants/de_chapitrage/SousPartie.svelte";
	
    import Definition from "$lib/cahier/composants/de_cours/Definition.svelte";
	import Exemples from "$lib/cahier/composants/de_cours/Exemples.svelte";
	import Item from "$lib/cahier/composants/de_cours/Item.svelte";
	
    import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    import { math } from 'mathlifier';
</script>

<Chapitre titre="Théorème de Pythagore" />

<Contenu apres_un_titre={true}>
    <Partie numero={1} titre="Carré et racine carrée" />
        <SousPartie numero={1} titre="Le carré d'un nombre" />
            <LigneVide />
            <Definition lignes={2}>
                Le carré d'un nombre est égal à ce nombre multiplié par lui-même. 
                On le note avec un « 2 » en exposant (en petit, en haut à droite).
            </Definition>
            <Exemples>
                <Item>
                    Le carré de 12 est 144 car {@html math("12^2 = 12 \\times 12 = 144")}
                </Item>
                <Item>
                    Le carré de 8 est 64 car {@html math("8^2 = 8 \\times 8 = 64")}
                </Item>
            </Exemples>
</Contenu>