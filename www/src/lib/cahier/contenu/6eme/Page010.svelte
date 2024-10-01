<script lang="ts">
	import { Contenu, Partie } from "$lib/cahier/composants/de_chapitrage/*";
	import { Exemples, Propriete } from "$lib/cahier/composants/de_cours/*";
    import LigneVide from "$lib/cahier/composants/LigneVide.svelte";
</script>

<Contenu>
    <Partie numero={2} titre="Égalités de fractions" />
        <LigneVide />
        <Propriete lignes={2}>
            Si on multiplie le numérateur et le dénominateur <u>par le même nombre</u>,
            alors on obtient une deuxième fraction égale à la première.
        </Propriete>
        <LigneVide />
        <Exemples>
            
        </Exemples>
</Contenu>