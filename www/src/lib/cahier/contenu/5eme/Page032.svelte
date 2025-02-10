<script lang="ts">
	import { Contenu } from "$lib/cahier/composants/de_chapitrage/*";
    import { Exemples } from "$lib/cahier/composants/de_cours/*";
	import Item from "$lib/cahier/composants/de_cours/Item.svelte";
	import Texte from "$lib/cahier/composants/de_cours/Texte.svelte";
	import { alignStar } from "mathlifier";


</script>

<Contenu>
    <Exemples lignes={5}>
        <Item>
            Calculer le périmètre d'un cercle de rayon 5 cm.
        </Item>
        <Texte lignes={4}>
            {@html alignStar(`
                𝒫_{\\text{cercle}} &= 2 \\times \\pi \\times \\text{rayon} \\\\
                &= 2 \\times \\pi \\times 5 cm \\\\
                &= 10\\pi cm \\longleftarrow \\text{valeur exacte} \\\\
                &\\approx 31{,}4 cm \\longleftarrow \\text{valeur approchée} 
            `)}
        </Texte>
    </Exemples>
</Contenu>
