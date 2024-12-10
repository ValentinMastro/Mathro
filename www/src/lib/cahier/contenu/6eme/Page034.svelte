<script lang="ts">
    import { Chapitre, Contenu, Partie } from "$lib/cahier/composants/de_chapitrage/*";
	import { Exemples, Nomenclature } from "$lib/cahier/composants/de_cours/*";
	import Item from "$lib/cahier/composants/de_cours/Item.svelte";
    import LigneVide from "$lib/cahier/composants/LigneVide.svelte";
</script>

<Chapitre titre="Conversions d'unités" />

<Contenu apres_un_titre>
    <Partie numero={1} titre="Préfixes et tableau de conversion" />
        <LigneVide />
        <Nomenclature lignes={6}>
            <Item>kilo = 1 millier</Item>
            <Item>hecto = 1 centaine</Item>
            <Item>déca = 1 dizaine</Item>
            <Item>deci = 1 dixième</Item>
            <Item>centi = 1 centième</Item>
            <Item>milli = 1 millième</Item>
        </Nomenclature>
        <Exemples lignes={2}>
            <Item>3 k€ = 3000 €</Item>
            <Item>5 mm = 0,005 m</Item>
        </Exemples>
</Contenu>