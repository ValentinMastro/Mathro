<script lang="ts">
	import { Contenu, SousPartie, SousSousPartie } from "$lib/cahier/composants/de_chapitrage/*";
    import { Definition, Formule } from "$lib/cahier/composants/de_cours/*";
    
    import { math } from 'mathlifier';
</script>

<Contenu>
    <SousPartie numero={2} titre="Solides de révolution" />
        <Definition lignes={2}>
            Un solide de révolution est un solide obtenu en faisant tourner un polygone autour d'un axe.
        </Definition>
        <SousSousPartie numero={1} titre="Cylindre de revolution" />
            <Definition lignes={2}>
                Un cylindre de révolution est un solide obtenu en faisant tourner un rectangle autour d'un de ses côtés.
            </Definition>
            <Formule lignes={2}>
                Si le cylindre a une hauteur {@html math(`h`)} et un rayon de base {@html math(`r`)}, 
                alors {@html math(`V_{\\text{cylindre}} = \\pi r^2 \\times h`)}.
            </Formule>
        <SousSousPartie numero={2} titre="Cône de révolution" />
            <Definition lignes={3}>
                Un cône de révolution est un solide obtenu en faisant tourner un triangle rectangle autour d'un des deux côtés qui n'est pas l'hypoténuse.
            </Definition>
            <Formule lignes={2}>
                Si le cône a une hauteur {@html math(`h`)} et un rayon de base {@html math(`r`)}, 
                alors {@html math(`V_{\\text{cone}} = \\frac{1}{3} \\times \\pi r^2 \\times h`)}.
            </Formule>
        <SousSousPartie numero={3} titre="Sphère et boule" />
            <Definition lignes={2}>
                Une sphère est un solide de révolution obtenu en faisant tourner un cercle autour de son diamètre.
                Une boule est une sphère pleine.
            </Definition>
            <Formule>
                Si la sphère a un rayon {@html math(`r`)}, 
                alors {@html math(`A_{\\text{sphere}} = 4 \\times \\pi r^2`)}
                et {@html math(`V_{\\text{boule}} = \\frac{4}{3} \\times \\pi r^3`)}.
            </Formule>
</Contenu>