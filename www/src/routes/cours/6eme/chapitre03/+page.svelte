<script>
	import Chapitre from "$lib/chapitrage/Chapitre.svelte";
    import Partie from "$lib/chapitrage/Partie.svelte";
	import SousPartie from "$lib/chapitrage/SousPartie.svelte";
	import Definition from "$lib/chapitrage/sections/Definition.svelte";
	import Exemples from "$lib/chapitrage/sections/Exemples.svelte";
</script>
<Chapitre numero={3} titre="Addition et soustraction">
    <Partie numero={1} titre="Addition">
        <Definition>
            Additionner, c'est réunir deux quantités en une.<br>
            <img    style="height: 7em;"
                    alt="Schema addition"
                    src="/tikz/6ch3_addition_schema.svg">
        </Definition>
        <Exemples>
            <img    style="height: 7em;"
                    alt="Exemple d'addition"
                    src="/tikz/6ch3_addition_exemples.svg">
        </Exemples>
    </Partie>
    <Partie numero={2} titre="Soustraction">
        <Definition>
            Soustraire, c'est retirer une quantité à une autre.<br>
            <img    style="height: 7em;"
                    alt="Schema addition"
                    src="/tikz/6ch3_soustraction_schema.svg">
        </Definition>
        <Exemples>
            <img    style="height: 7em;"
                    alt="Exemple d'addition"
                    src="/tikz/6ch3_soustraction_exemples.svg">
        </Exemples>
    </Partie>
</Chapitre>