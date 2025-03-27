<script lang="ts">
	import { Contenu, Chapitre, Partie } from "$lib/cahier/composants/de_chapitrage/*";
    import { Definition, Exemples, Item, Paragraphe, Propriete } from "$lib/cahier/composants/de_cours/*";
	import LigneVide from "$lib/cahier/composants/LigneVide.svelte";
    import { math, display } from 'mathlifier';
</script>

<Chapitre titre="Probabilités" />

<Contenu apres_un_titre>
    <Partie numero={1} titre="Concept" />
        <LigneVide />
        <Definition lignes={2}>
            Une expérience est aléatoire si on ne peut pas connaître à l'avance 
            le résultat - l'issue - de l'expérience.
        </Definition>
        <Exemples lignes={4}>
            <Item>Un pile ou face</Item>
            <Item>Un lancer de dé</Item>
            <Item>Un tirage de boules dans une urne</Item>
            <Item>Choisir une lettre au hasard dans l'alphabet français</Item>
        </Exemples>
        <Definition>
            L'ensemble des issues de l'expérience aléatoire est l'univers noté {@html math(`\\Omega`)}.
        </Definition>
        <Exemples lignes={4}>
            <Item>Pour un pile ou face, {@html math(`\\Omega = \\{ \\text{Pile}, \\text{Face} \\}`)}</Item>
            <Item>Pour un lancer de dé, {@html math(`\\Omega = \\{ 1, 2, 3, 4, 5, 6 \\}`)}</Item>
            <Item lignes={2}>Tirer une lettre au hasard dans l'alphabet français, {@html math(`\\Omega = \\{ \\text{A}, \\text{B}, \\text{C}, \\dots, \\text{Z} \\}`)}</Item>
        </Exemples>
        <Definition>
            Un évènement est un ensemble d'issues de l'expérience aléatoire.
        </Definition> <Exemples lignes={4}>
            <Item>Pour un pile ou face, {@html math(`\\Omega = \\{ \\text{Pile}, \\text{Face} \\}`)}</Item>
            <Item>Pour un lancer de dé, {@html math(`\\Omega = \\{ 1, 2, 3, 4, 5, 6 \\}`)}</Item>
            <Item lignes={2}>Tirer une lettre au hasard dans l'alphabet français, {@html math(`\\Omega = \\{ \\text{A}, \\text{B}, \\text{C}, \\dots, \\text{Z} \\}`)}</Item>
        </Exemples>
        <Definition>
            Un évènement est un ensemble d'issues de l'expérience aléatoire.
        </Definition>
</Contenu>