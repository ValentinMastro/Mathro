<script lang="ts">
    import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
    import { Definition, Notation, Item, Texte, Exemples, Schema } from '$lib/cahier/composants/de_cours/*';
    
    import { math } from 'mathlifier';
</script>

<Contenu>
        <Definition lignes={2}>
            Ordre croissant : du plus petit au plus grand <br>
            Ordre décroissant : du plus grand au plus petit
        </Definition>
        <Exemples lignes={2}>
            <Item>{@html math("1 \\lt 2 \\lt 7 \\lt 12")}</Item>
            <Item>{@html math("19 \\gt 18 \\gt 15 \\gt 8")}</Item>
        </Exemples>
        <Definition lignes={2}>
            Encadrer un nombre, c'est déterminer un nombre qui lui est inférieur
            et un nombre qui lui est supérieur.
        </Definition>
        <Exemples lignes={4}>
            <Item>
                Encadrer 325 à la dizaine près : {@html math("320 < 325 < 330")}
            </Item>
            <Item lignes={2}>
                Encadrer 105 037 à la centaine de milliers près : <br> {@html math("100~000 < 105~037 < 200~000")}
            </Item>
            <Item>
                Encadrer {@html math('34~500')} à la centaine près : {@html math("34~500 \\leq 34~500 \\leq 34~600")} 
            </Item>
        </Exemples>

    <Partie numero={3} titre="Repérage" />

        <Definition lignes={2}>
            Un axe est une (demi-)droite que l'on va graduer, 
            c'est-à-dire associer un nombre à chaque point : son <i>abscisse</i>.
        </Definition>

        <Notation>
            Si le point {@html math('\\text{A}')} a pour abscisse {@html math('5')},
            on note {@html math('\\text{A}(5)')}.
        </Notation>

        <Exemples lignes={2}>
            <Schema lignes={2} aspectRatioSVG={6}>
                {#snippet svg()}
                    <line x1="{2*6*1000/12}" x2="{(10+1)*6*1000/12}" y1="500" y2="500" stroke="black" stroke-width="15" />
                    <path d="M {(10+1)*6*1000/12} 500 l -100 -100 l 0 200 z" fill="black" />
                    {#each Array(9) as _, i}
                        <line x1={(i+2) * 6*1000/12} y1="450" x2={(i+2) * 6*1000/12} y2="550" stroke="black" stroke-width="20" />
                    {/each}
                    <text x="{(2)*6*1000/12}" y="800" font-size="250" text-anchor="middle">0</text>
                    <text x="{(3)*6*1000/12}" y="800" font-size="250" text-anchor="middle">1</text>
                    {#each [{point: "A", abscisse: 0}, {point: "B", abscisse: 1}, {point: "C", abscisse: 2}, {point: "D", abscisse: 4}, {point: "E", abscisse: 7}] as {point, abscisse}}
                        <text x="{(abscisse+2)*6*1000/12}" y="330" font-size="300" text-anchor="middle">{point}</text>
                    {/each}
                {/snippet}
                {#snippet html()}
                    <Texte addStyle="color: rgb(0, 0, 139);">
                        {@html math("\\text{A}(0) \\quad \\text{B}(1) \\quad \\text{C}(2) \\quad \\text{D}(4) \\quad \\text{E}(7)")}
                    </Texte>
                {/snippet}
            </Schema>
        </Exemples>
</Contenu>