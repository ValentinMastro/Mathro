<script lang="ts">
	import { Chapitre, Contenu, Partie } from "$lib/cahier/composants/de_chapitrage/*";
	import { Definition, Item, Methode, Paragraphe, Protocole, Schema, Texte } from "$lib/cahier/composants/de_cours/*";
    import { math } from "mathlifier";
</script>

<Chapitre titre="Rapporteur" />

<Contenu apres_un_titre>
    <Definition lignes={2}>
        Un <i>rapporteur</i> est un outil géométrique servant à tracer et à mesurer des angles.
    </Definition>
    <Partie numero={1} titre="Tracer un angle de mesure donnée" />
        <Paragraphe couleur="bleu" nom_du_paragraphe="Partons d'un exemple">
            Tracer {@html math("\\widehat{ABC} = 30^\\circ")}
        </Paragraphe>
        <Protocole lignes={8}>
            <Item>
                Tracer un côté de l'angle {@html math("\\color{blue} [BC)")}
            </Item>
            <Item lignes={3}>
                Placer le rapporteur tel que :
                <Item>
                    le repère du rapporteur est placé sur le sommet de l'angle {@html math("\\color{blue} B")}
                </Item>
                <Item lignes={2}>
                    le 0 du rapporteur est aligné avec le côté de l'angle {@html math("\\color{blue} [BC)")}
                </Item>
            </Item>
            <Item lignes={2}>
                Sur le rapporteur, en partant du 0 aligné, repérer la mesure de l'angle {@html math("\\color{blue} 30^\\circ")}
            </Item>
            <Item lignes={2}>
                Tracer le deuxième côté de l'angle {@html math("\\color{blue} [BA)")}
            </Item>
        </Protocole>
        <Schema lignes={5} aspectRatioSVG={3}>
            {#snippet svg()}
                <line x1={200} y1={800} x2={2900} y2={800} stroke="black" stroke-width={8} />
                <line x1={200} y1={800} x2={200 + 2000*Math.cos(Math.PI/6)} y2={800 - 2000*Math.sin(Math.PI/6)} stroke="black" stroke-width={8} />
                <text x={800} y={700} text-anchor="middle" alignment-baseline="middle" font-size={100} fill="black">30°</text>
                <text x={800} y={800} text-anchor="middle" alignment-baseline="middle" font-size={100} fill="black">B</text>
            {/snippet}
        </Schema>
</Contenu>
