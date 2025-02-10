<script lang="ts">
	import { Contenu, Partie } from "$lib/cahier/composants/de_chapitrage/*";
    import { Definition, Exemples, Paragraphe, Propriete, Item, Schema } from "$lib/cahier/composants/de_cours/*";
	import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    import { math, display } from 'mathlifier';

    let numero_boules: number[] = [
        1, 1, 1, 5,
        2, 6, 6, 2, 
        2, 4, 4, 6
    ]
    let couleur_boules: string[] = [
        "gray", "gray", "white", "white",
        "gray", "gray", "white", "white",
        "white", "gray", "gray", "gray"
    ]
</script>

<Contenu>
    <Exemples lignes={6}>
        <Item lignes={3}>
            Expérience : lancer un dé<br>
            {@html math(`\\text{A} = `)} « Obtenir un nombre pair » {@html math(` = \\{ 2, 4, 6 \\}`)}<br>
            {@html math(`\\text{B} = `)} « Obtenir un nombre impair » {@html math(` = \\{ 1, 3, 5 \\}`)}
        </Item>
        <Item lignes={3}>
            Expérience : tirer une lettre au hasard dans l'alphabet français<br>
            {@html math(`\\text{C} = `)} « Obtenir une voyelle » {@html math(` = \\{ \\text{A}, \\text{E}, \\text{I}, \\text{O}, \\text{U}, \\text{Y} \\}`)}<br>
            {@html math(`\\text{D} = `)} « Obtenir une consonne» {@html math(` = \\{ \\text{B}, \\text{C}, \\dots, \\text{Z} \\}`)}
        </Item>
    </Exemples>
    <Definition lignes={3}>
        Un évènement A est dit :
        <Item>
            Impossible si {@html math(`A = \\emptyset`)}, autrement dit si A ne peut pas se réaliser
        </Item>
        <Item>
            Certain si {@html math(`A = \\Omega`)}, autrement dit si A se réalise à chaque fois
        </Item>
    </Definition>
    <LigneVide />
    <Paragraphe nom_du_paragraphe="Récapitulatif" couleur="red" lignes={12} addStyle="color: black; border: 1px black solid; width: fit-content;">
        Dans une urne contenant des boules colorées et numérotées :
        <Item bullet="1. " lignes={2}>
            Si on s’intéresse à la couleur de la boule, quelles sont les issues possibles ?
        </Item>
        <Item bullet="2. " lignes={2}>
            Si on s’intéresse au numéro écrit sur la boule, quelles sont les issues possibles ?
        </Item>
        <Item bullet="3. ">Donne un événement certain de se réaliser.</Item>
        <Item bullet="4. ">Donne un événement impossible.</Item>
        <Schema lignes={5} aspectRatioSVG={2}>
            {#snippet svg()}
                {#each Array(12) as _, index }
                    <circle 
                        cx={2000/4 * (index%4 + 0.5)}
                        cy={1000/3 * (Math.floor(index/4) + 0.5)}
                        r="150"
                        stroke="black"
                        stroke-width="10"
                        fill={couleur_boules[index]}
                    />
                    <text 
                        x={2000/4 * (index%4 + 0.5)}
                        y={1000/3 * (Math.floor(index/4) + 0.6)}
                        text-anchor="middle"
                        alignment-baseline="middle"
                        font-size="130"
                        fill={couleur_boules[index] === "white" ? "black" : "white"}
                    >   
                        {numero_boules[index]}
                    </text>
                {/each}
            {/snippet}
        </Schema>
    </Paragraphe>
    <LigneVide lignes={1.2} />
    <Item bullet="1. ">Les issues possibles sont : {@html math(`\\Omega = \\{ \\text{Blanche}, \\text{Grise} \\}`)}</Item>
    <Item bullet="2. ">Les issues possibles sont : {@html math(`\\Omega = \\{ 1, 2, 4, 5, 6 \\}`)}</Item>
    <Item bullet="3. ">Un événement certain est : « Obtenir une boule »</Item>
    <Item bullet="4. ">Un événement impossible est : « Obtenir une boule rouge »</Item>
</Contenu>