<script lang="ts">
	import { Contenu, SousSousPartie } from "$lib/cahier/composants/de_chapitrage/*";
    import { Definition, Formule } from "$lib/cahier/composants/de_cours/*";
	import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    import { math } from 'mathlifier';
</script>

<Contenu>
    <SousSousPartie numero={3} titre="Pyramide" />
        <Definition lignes={3}>
            Une pyramide est un polyèdre dont une face est un polygone (la base) et les autres des triangles (les faces latérales).<br>
            Tous les sommets de la base sont reliés en un point appelé <i>l'apex.</i><br>
        </Definition>
        <Formule lignes={2}>
            Si la pyramide a une hauteur {@html math(`h`)} et une base d'aire {@html math(`A_{\\text{base}}`)}, 
            alors {@html math(`V_{\\text{pyramide}} = \\frac{1}{3} \\times A_{\\text{base}} \\times h`)}.
        </Formule>

    <SousSousPartie numero={4} titre="Prisme droit" />
        <Definition lignes={3}>
            Un prisme droit est un polyèdre dont deux des faces - les bases - sont des polygones identiques et parallèles.<br>
            Les autres faces - les faces latérales - sont des rectangles.<br>
        </Definition>
        <Formule lignes={2}>
            Si le prisme droit a une hauteur {@html math(`h`)} et une base d'aire {@html math(`A_{\\text{base}}`)}, 
            alors {@html math(`V_{\\text{prisme}} = A_{\\text{base}} \\times h`)}.
        </Formule>
</Contenu>