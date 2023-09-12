<script>
	import Chapitre from "$lib/chapitrage/Chapitre.svelte";
    import Partie from "$lib/chapitrage/Partie.svelte";
	import Definition from "$lib/chapitrage/sections/Definition.svelte";
	import Exemples from "$lib/chapitrage/sections/Exemples.svelte";
    import Notation from "$lib/chapitrage/sections/Notation.svelte";

    import Katex from "svelte-katex";
</script>

<Chapitre numero={1} titre="Notation géométrique">
    <Partie numero={1} titre="Droite, demi-droite, segment">
        <Definition>
            Une <i>droite</i> est un ensemble de points alignés. <br>
            Elle se prolonge à l'infini des deux côtés.
        </Definition>
        <Notation>
            Le nom d'une droite s'écrit entre parenthèses.
        </Notation>
        <Exemples>
            La droite <Katex>(AB)</Katex>.
        </Exemples>
    </Partie>
</Chapitre>