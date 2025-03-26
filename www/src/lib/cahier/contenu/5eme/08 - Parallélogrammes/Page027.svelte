<script lang="ts">
	import { Chapitre, Contenu, Partie } from "$lib/cahier/composants/de_chapitrage/*";
	import { Definition, Propriete, Schema } from "$lib/cahier/composants/de_cours/*";
	import Item from "$lib/cahier/composants/de_cours/Item.svelte";
	import Paragraphe from "$lib/cahier/composants/de_cours/Paragraphe.svelte";
	import Texte from "$lib/cahier/composants/de_cours/Texte.svelte";
    import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    import { math } from "mathlifier";
</script>

<Chapitre titre="Parallélogrammes" />

<Contenu apres_un_titre>
    <Partie numero={1} titre="Définition et constructions" />
        <LigneVide />
        <Definition lignes={2}>
            Un parallélogramme est un quadrilatère 
            qui a ses côtés opposés parallèles.
        </Definition>
        <Schema lignes={10}>
            {#snippet svg()}
                <polygon points="200,200 600,200 800,600 400,600" fill="none" stroke="black" stroke-width={8} />
                <text x="200" y="200" font-size="50" text-anchor="middle" dx={-30}>A</text>
                <text x="600" y="200" font-size="50" text-anchor="middle" dx={30}>B</text>
                <text x="800" y="600" font-size="50" text-anchor="middle" dy={60}>C</text>
                <text x="400" y="600" font-size="50" text-anchor="middle" dy={60}>D</text>
            {/snippet}
            {#snippet html()}
                <LigneVide lignes={2} />
                <Texte>{@html math("\\text{(AB)} // \\text{(DC)}")}</Texte>
                <Texte>{@html math("\\text{(AD)} // \\text{(BC)}")}</Texte>
            {/snippet}
        </Schema>
        <Paragraphe couleur="rouge" nom_du_paragraphe="Propriétés" lignes={6}>
            <Item>
                Les côtés opposés d'un parallélogramme sont de même longueur.
            </Item>
            <Item>
                Les angles opposés d'un parallélogramme sont de même mesure.
            </Item>
            <Item>
                Deux angles intérieurs consécutifs sont supplémentaires.
            </Item>
            <Item>
                Les diagonales d'un parallélogramme se coupent en leur milieu.
            </Item>
            <Item lignes={2}>
                La somme des mesures des angles d'un parallélogramme est de 360°.
            </Item>
        </Paragraphe>
</Contenu>