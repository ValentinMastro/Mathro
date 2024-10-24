<script lang="ts">
    import { Chapitre, Contenu, Partie } from "$lib/cahier/composants/de_chapitrage/*";
	import { Definition, Item, Notation, Schema } from "$lib/cahier/composants/de_cours/*";
    import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    import { math } from 'mathlifier';
</script>

<Chapitre titre="Droites" />

<Contenu apres_un_titre>
    <Partie numero={1} titre="Relations entre deux droites" />
        <LigneVide />
        <Definition lignes={4}>
            <Item lignes={2}>
                Deux droites sont <i>parallèles</i> si elles n'ont aucun point d'intersection.
            </Item>
            <Item lignes={2}>
                Lorsque deux droites possèdent un point d'intersection, elles sont <i>sécantes</i>.
            </Item>
        </Definition>
        <Notation>
            Si {@html math('(d)')} et {@html math("(d')")} sont parallèles, 
            on note {@html math("(d) \\backslash\\backslash (d')")}.
        </Notation>
        <Schema lignes={8}>
            {#snippet svg()}
                <defs>
                    <style>
                        text {
                            font-size: 60px;
                            text-anchor: middle;
                        }
                    </style>
                </defs>
                <line x1={100} y1={500} x2={900} y2={500} stroke="black" stroke-width={5} />
                <text x={500} y={570}>(d)</text>
            {/snippet}
        </Schema>
</Contenu>

