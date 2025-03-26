<script lang="ts">
    import { Chapitre, Contenu, Partie, SousPartie } from "$lib/cahier/composants/de_chapitrage/*";
    import { Definition, Exemples, Item, Schema, Texte, Ligne } from "$lib/cahier/composants/de_cours/*";
    import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    import { math } from 'mathlifier';

    let valeur_slider = $state(8);
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
            <Exemples lignes={2}>
                <Item>
                    Le carré de 12 est 144 car {@html math("12^2 = 12 \\times 12 = 144")}.
                </Item>
                <Item>
                    Le carré de 8 est 64 car {@html math("8^2 = 8 \\times 8 = 64")}.
                </Item>
            </Exemples>
            <LigneVide />

            <!-- Schema d'un carré de 8x8 pour comprendre le lien avec le carré géométrique -->
            <Schema lignes={8}>
                {#snippet svg()}
                    {#each Array(valeur_slider) as _, i}
                        {#each Array(valeur_slider) as _, j}
                            {#if valeur_slider <= 8}
                            <rect 
                                x={j * 1000 / 8 + 7}
                                y={i * 1000 / 8 + 7}
                                width={1000 / 8 - 2*7}
                                height={1000 / 8 - 2*7}
                                fill={i % 2 == j % 2 ? "red" : "black"}
                                stroke="none"
                            />
                            {:else}
                            <rect 
                                x={j * 1000 / valeur_slider + 7}
                                y={i * 1000 / valeur_slider + 7}
                                width={1000 / valeur_slider - 2*7}
                                height={1000 / valeur_slider - 2*7}
                                fill={i % 2 == j % 2 ? "red" : "black"}
                                stroke="none"
                            />
                            {/if}
                        {/each}
                    {/each}
                {/snippet}
                {#snippet html()}
                    <Ligne>
                        <input type="range" min="1" max="20" bind:value={valeur_slider} />
                    </Ligne>
                    <Texte lignes={2} addStyle="display: flex; justify-content: center;">
                        Le carré de {valeur_slider} est {valeur_slider * valeur_slider}.
                    </Texte>
                    <Texte lignes={2} addStyle="display: flex; justify-content: center;">
                        {@html math(valeur_slider + "^2 = " + valeur_slider + " \\times " + valeur_slider + " = " + valeur_slider * valeur_slider)}
                    </Texte>
                {/snippet}
            </Schema>

            <LigneVide />
        <SousPartie numero={2} titre="La racine carrée d'un nombre" />
            <LigneVide />
            <Definition lignes={2}>
                La racine carrée d'un nombre est l'opération réciproque du carré d'un nombre.
                Elle se note avec le symbole « radical » : {@html math("\\sqrt{\\quad}")}.
            </Definition>
            <Exemples lignes={3}>
                <Item>
                    La racine carrée de 144 est 12 car {@html math("12 \\times 12 = 144")}.
                </Item>
                <Item>
                    {@html math("\\sqrt{64} = 8")} car {@html math("8 \\times 8 = 64")}.
                </Item>
                <Item>
                    {@html math("\\sqrt{2{,}25} = 1{,}5")} car {@html math("1{,}5 \\times 1{,}5 = 2{,}25")}.
                </Item>
            </Exemples>
</Contenu>

<style>
    input[type=range] {
        --margin: 5%;
        margin-left: var(--margin);
        margin-right: var(--margin);
        width: calc(100% - 2*var(--margin));
    }
</style>