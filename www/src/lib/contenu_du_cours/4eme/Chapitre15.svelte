<script lang="ts">
    import { Chapitre, Partie, SousPartie } from "$lib/chapitrage/all_chapitrages";
    import { Definition, Propriete, Schema, Paragraphe, Formule, Exemples, Remarque, Theoreme } from "$lib/chapitrage/sections/all_sections";
    import { math, display } from 'mathlifier';
</script>

<Chapitre numero={15} titre="Réciproques">
    <Partie numero={1} titre="Réciproque du théorème de Pythagore">
        <Paragraphe nom="Théorème" couleur="red">
            Si le carré de la plus grande longeur est égal à la somme des carrés des deux autres longueurs, alors le triangle est rectangle.
        </Paragraphe>
        <div style="display: flex">
            <svg viewBox="0 0 200 200" style="width: 15em;">
                <polygon points="0,0 0,200 200,200" fill="none" stroke="black" stroke-width="1" />
                <text x="5" y="25" font-size="15">E</text>
                <text x="10" y="190" font-size="15">F</text>
                <text x="188" y="188" font-size="15">G</text>
            </svg>
            <Paragraphe nom="Théorème" couleur="red">
                Si {@html math("EG^2 = EF^2 + FG^2")} alors le triangle EFG est rectangle en F.
            </Paragraphe>
        </div>
        <Paragraphe nom="Exemple de rédaction" couleur="blue">
            <div style="display: flex">
                <svg viewBox="0 0 200 200" style="width: 15em;">
                    <polygon points="0,0 0,200 200,200" fill="none" stroke="black" stroke-width="1" />
                    <text x="5" y="25" font-size="15">I</text>
                    <text x="10" y="190" font-size="15">J</text>
                    <text x="188" y="188" font-size="15">K</text>
                </svg>
               <p style="color: black">
                    Le triangle IJK est-il rectangle ?
               </p>
            </div>
            <u>D'une part : </u> {@html math("IK^2 = 29^2 = 841")} <br>
            <u>D'autre part : </u> {@html math("IJ^2 + JK^2 = 20^2 + 21^2 = 400 + 441 = 841")} <br>
            
        </Paragraphe>
    </Partie>
</Chapitre>