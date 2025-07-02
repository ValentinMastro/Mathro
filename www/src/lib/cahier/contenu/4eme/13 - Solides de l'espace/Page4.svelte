<script lang="ts">
	import { Contenu, SousSousPartie } from "$lib/cahier/composants/de_chapitrage/*";
    import { Definition, Formule, Schema } from "$lib/cahier/composants/de_cours/*";
	import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    import { math } from 'mathlifier';
</script>

<Contenu>
    <SousSousPartie numero={1} titre="Le cube" />
        <Definition lignes={2}>
            Un cube est un hexaèdre régulier, c'est-à-dire un polyèdre dont toutes les faces sont des carrés.
            Il a 12 arêtes et 8 sommets.
        </Definition>
        <Formule>
            Si l'arête d'un cube mesure {@html math("c")}, alors {@html math(`\\text{V}_{\\text{cube}} = c^3`)}.
        </Formule>
        <Schema lignes={8}>
            {#snippet svg()}
                <rect x="125" y="375" width="500" height="500" fill="none" stroke="black" stroke-width="4" />
                <path d="M 125 375 l 250 -250 l 500 0 l -250 250 Z" fill="none" stroke="black" stroke-width="4" />
                <path d="M 125 875 l 250 -250 l 0 -500" fill="none" stroke="black" stroke-width="4" stroke-dasharray="20 20"  />
                <line x1="375" y1="625" x2="875" y2="625" stroke="black" stroke-width="4" stroke-dasharray="20 20" />
                <path d="M 625 875 l 250 -250 l 0 -500" fill="none" stroke="black" stroke-width="4" />

                <text x="10" y="950" text-anchor="start" dominant-baseline="middle" font-size="70px" stroke="none" fill="black">
                    Cube en perspective cavalière
                </text>
            {/snippet}
        </Schema>
    
    <LigneVide />
    <SousSousPartie numero={2} titre="Le pavé droit" />
        <Definition lignes={3}>
            Un pavé droit (ou parallélépipède rectangle) est un hexaèdre (un polyèdre à 6 faces) dont toutes les faces sont des rectangles.
            Il a 12 arêtes et 8 sommets.
        </Definition>
        <Formule lignes={2}>
            Si le pavé droit est de longueur {@html math(`\\text{L}`)}, de largeur {@html math("\\ell")}
            et de hauteur {@html math(`\\text{h}`)}, alors {@html math(`\\text{V}_{\\text{pave}} = \\text{L} \\times \\ell \\times h`)}.
        </Formule>
        <Schema lignes={8} aspectRatioSVG={1.25}>
            {#snippet svg()}
                <rect x="125" y="375" width="625" height="375" fill="none" stroke="black" stroke-width="4" />
                <path d="M 125 375 l 250 -250 l 625 0 l -250 250 Z" fill="none" stroke="black" stroke-width="4" />
                <path d="M 125 750 l 250 -250 l 0 -375" fill="none" stroke="black" stroke-width="4" stroke-dasharray="20 20"  />
                <line x1="375" y1="500" x2="1000" y2="500" stroke="black" stroke-width="4" stroke-dasharray="20 20" />
                <path d="M 750 750 l 250 -250 l 0 -375" fill="none" stroke="black" stroke-width="4" />

                <text x="10" y="850" text-anchor="start" dominant-baseline="middle" font-size="70px" stroke="none" fill="black">
                    Pavé droit en perspective cavalière
                </text>
            {/snippet}
        </Schema>
</Contenu>