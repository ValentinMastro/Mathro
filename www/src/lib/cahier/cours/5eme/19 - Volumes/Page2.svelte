<script lang="ts">
    import { Contenu, Partie } from "$lib/cahier/composants/de_chapitrage/*";
    import { Schéma } from "$lib/cahier/composants/de_cours/*";
	import { Cylindre, Cube, PavéDroit, Prisme, Projecteur, TexteSVG } from "$lib/cahier/composants/svg/*";

    const projecteur = new Projecteur(0.46);
</script>

<Contenu>
    <Partie numero={2} titre="Formulaire" />

    <Schéma lignes={30} aspectRatioSVG={1}>
        {#snippet svg()}
            <Cube {projecteur} arête={180} coin={{x: 100, y: 100}} />
            <PavéDroit {projecteur} longueur={300} largeur={110} hauteur={150} coin={{x: 50, y: 400}} />
            <Prisme {projecteur} nature={3} centre1={{x: 200, y: 500, z: 0}} centre2={{x: 200, y: 700, z: 0}} />
            <Cylindre {projecteur} centre1={{x: 200, y: 1000, z: 0}} centre2={{x: 200, y: 800, z: 0}} rayon={100} />
            <TexteSVG point={{x: 600, y: 10}} fill="var(--rouge)">V = a³</TexteSVG>
            <TexteSVG point={{x: 650, y: 340}} fill="var(--rouge)">V = L × l × h</TexteSVG>
            <TexteSVG point={{x: 650, y: 630}} fill="var(--rouge)">V = Aire base × hauteur</TexteSVG>
            <TexteSVG point={{x: 650, y: 910}} fill="var(--rouge)">V = π × r² × h</TexteSVG>
        {/snippet}
    </Schéma>
</Contenu>