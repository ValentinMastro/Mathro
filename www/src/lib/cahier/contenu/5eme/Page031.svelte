<script lang="ts">
	import { Chapitre, Contenu, Partie, SousPartie } from "$lib/cahier/composants/de_chapitrage/*";
	import { Formules } from "$lib/cahier/composants/de_cours/*";
	import Item from "$lib/cahier/composants/de_cours/Item.svelte";
    import LigneVide from "$lib/cahier/composants/LigneVide.svelte";
	import { math } from "mathlifier";

</script>

<Chapitre titre="Grandeurs" />

<Contenu apres_un_titre>
    <Partie numero={1} titre="Périmètre et aire" />
        <SousPartie numero={1} titre="Polygones" />
        <LigneVide />

        <Formules lignes={10}>
            <Item>
                {@html math("𝒫_{\\text{carré}} = 4 \\times \\text{côté}")}
            </Item>
            <Item>
                {@html math("𝒜_{\\text{carré}} = \\text{côté} \\times \\text{côté}")}
            </Item>
            <Item>
                {@html math("𝒫_{\\text{rectangle}} = 2 \\times L + 2 \\times \\ell")}
            </Item>
            <Item>
                {@html math("𝒜_{\\text{rectangle}} = L \\times \\ell")}
            </Item>
            <Item>
                {@html math("𝒫_{\\text{triangle}} = a + b + c")}
            </Item>
            <Item>
                {@html math("𝒜_{\\text{triangle}} = \\text{base} \\times \\text{hauteur} \\div 2")}
            </Item>
            <Item>
                {@html math("𝒫_{\\text{parallélogramme}} = 2 \\times L + 2 \\times \\ell")}
            </Item>
            <Item>
                {@html math("𝒜_{\\text{parallélogramme}} = L \\times \\ell")}
            </Item>
            <Item>
                {@html math("𝒫_{\\text{losange}} = 4 \\times \\text{côté}")}
            </Item>
            <Item>
                {@html math("𝒜_{\\text{losange}} = d \\times D \\div 2")}
            </Item>   

        </Formules>
        <LigneVide />
        <SousPartie numero={2} titre="Cercle et disque" />
        <LigneVide />

        <Formules lignes={2}>
            <Item>
                {@html math("𝒫_{\\text{cercle}} = 2 \\times \\pi \\times \\text{rayon}")}
            </Item>
            <Item>
                {@html math("𝒜_{\\text{disque}} = \\pi \\times \\text{rayon} \\times \\text{rayon} ")}
            </Item>   
        </Formules>
</Contenu>