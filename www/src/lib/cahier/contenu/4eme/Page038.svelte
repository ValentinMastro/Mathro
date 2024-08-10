<script lang="ts">
    import { Chapitre, DansLaMarge, Contenu, Partie } from  "$lib/cahier/composants/de_chapitrage/*";
    import { Definition, Ligne, Schema, Remarque } from "$lib/cahier/composants/de_cours/*";
	import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    import { math } from 'mathlifier';

    let index_selection_angle: 0 | 1 = $state(0);
</script>

<Chapitre titre="Cosinus" />

<DansLaMarge apres_un_titre>
    <LigneVide lignes={13} />
    <Ligne>
        Angle choisi : 
        <br>
        <input type="radio" value={0} id="ABC" name="angle_choisi" bind:group={index_selection_angle} />
        <label for="ABC">{@html math("\\widehat{ABC}")}</label>
        <br>
        <input type="radio" value={1} id="BCA" name="angle_choisi" bind:group={index_selection_angle} />
        <label for="BCA">{@html math("\\widehat{BCA}")}</label>
    </Ligne>
</DansLaMarge>

<Contenu apres_un_titre>
    <Partie numero={1} titre="Les côtés dans un triangle rectangle" />
        <LigneVide />
        <Definition>
            Le côté opposé à l'angle droit est appelé l'hypoténuse.
        </Definition>
        <Definition lignes={3}>
            Choisissons un des angles aigus du triangle.<br>
            Le côté du triangle qui forme l'angle choisi et qui n'est pas l'hypoténuse est appelé le <i>côté adjacent</i>.<br>
        </Definition>
        <LigneVide />
        <Schema lignes={10}>
            {#snippet svg()}
                <defs>
                    <polygon id="triangle" points="100,100 100,900, 700,900" />
                    <clipPath id="clip_triangle">
                        <use href="#triangle" fill="white" />
                    </clipPath>
                </defs>

                {#if index_selection_angle === 0}
                    <circle cx="100" cy="100" r="100" fill="red" clip-path="url(#clip_triangle)" />
                {:else}
                    <circle cx="700" cy="900" r="100" fill="red" clip-path="url(#clip_triangle)" />
                {/if}


                <use href="#triangle" fill="none" stroke="black" stroke-width="5" />
                <rect x="100" y="850" width="50" height="50" fill="black" />

                {#if index_selection_angle == 0}
                    <line x1="100" y1="100" x2="100" y2="900" stroke="red" stroke-width="8" />
                    <text 
                        x="60" y="500" font-size="55" 
                        text-anchor="middle" fill="red"
                        transform-origin="60px 500px"
                        transform="rotate(-90)"
                    >
                        côté adjacent
                    </text>
                {:else}
                    <line x1="100" y1="900" x2="700" y2="900" stroke="red" stroke-width="8" />
                    <text x="400" y="955" font-size="55" text-anchor="middle" fill="red">côté adjacent</text>
                {/if}

                <text x="100" y="970" font-size="70" text-anchor="middle">A</text>
                <text x="100" y="70" font-size="70" text-anchor="middle">B</text>
                <text x="700" y="970" font-size="70" text-anchor="middle">C</text>

                <line x1="100" y1="100" x2="700" y2="900" stroke="blue" stroke-width="8" />
                <text x="470" y="470" 
                    fill="blue"
                    font-size="70" 
                    text-anchor="middle" 
                    transform-origin="470px 470px"
                    transform="rotate(53.13)"
                >Hypoténuse</text>
            {/snippet}
        </Schema>
        <Remarque>
            Le côté qui "ne touche pas" l'angle droit est appelé <i>côté opposé</i>.
        </Remarque>
</Contenu>