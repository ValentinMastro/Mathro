<script lang="ts">
    import { Chapitre, Partie, Contenu } from "$lib/cahier/composants/de_chapitrage/*";
	import { Theoreme, Schema, Texte, Exemple, Paragraphe, Remarque } from "$lib/cahier/composants/de_cours/*";
    import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    import { math } from 'mathlifier';
</script>

<Chapitre titre="Réciproques" />

<Contenu apres_un_titre>
    <Partie numero={1} titre="Réciproque du théorème de Pythagore" />
        <LigneVide />
        <Theoreme lignes={3}>
            Si, dans un triangle, le carré de la plus grande longueur est égal à la 
            somme des carrés des deux autres côtés, alors ce triangle est rectangle.
        </Theoreme>
        <Exemple lignes={10}>
            <Schema lignes={10}>
                {#snippet svg()}
                    <polygon points="400,100 {400+Math.sqrt(12)*150},{100+Math.sqrt(12)*150} {400-Math.sqrt(5)*150},{100+Math.sqrt(5)*150}" fill="none" stroke="black" stroke-width="8" />
                    <text x={400-30} y={100-5} font-size="60" text-anchor="middle" fill="black">E</text>
                    <text x={400+Math.sqrt(12)*150+30} y={100+Math.sqrt(12)*150+10} font-size="60" text-anchor="middle" fill="black">F</text>
                    <text x={400-Math.sqrt(5)*150-30} y={100+Math.sqrt(5)*150+10} font-size="60" text-anchor="middle" fill="black">G</text>
                    <text x="640" y="300" font-size="60" text-anchor="middle" fill="red">12</text>
                    <text x="160" y="230" font-size="60" text-anchor="middle" fill="red">5</text>
                    <text x="350" y="450" font-size="60" text-anchor="middle" fill="red">13</text>
                {/snippet}
                {#snippet html()}
                    <LigneVide lignes={0.7} />
                    <Texte lignes={2}>
                        Peut-on prouver que le triangle EFG est rectangle en E ?
                    </Texte>
                {/snippet}
            </Schema>
        </Exemple>
        <Paragraphe couleur="black" nom_du_paragraphe="Rédaction" lignes={4}>
            <u>D'une part :</u> {@html math("\\text{GF}^2 = 13^2 = {\\color{red} 169}")} <br>
            <u>D'autre part :</u> {@html math("\\text{EG}^2 + \\text{EF}^2 = 5^2 + 12^2 = 25 + 144 = {\\color{red} 169}")}<br>
            D'après la réciproque du théorème de Pythagore,<br>
            le triangle EFG est rectangle en E.
        </Paragraphe>
        <LigneVide />
        <Remarque lignes={2}>
            Si les deux valeurs n'avaient pas été égales, alors le triangle n'aurait pas été rectangle.
        </Remarque>
</Contenu>