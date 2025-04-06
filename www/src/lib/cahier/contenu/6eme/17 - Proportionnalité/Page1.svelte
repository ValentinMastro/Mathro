<script lang="ts">
	import { Chapitre, Contenu, Partie, SousPartie } from "$lib/cahier/composants/de_chapitrage/*";
	import { Definition, Exemples, Item, Propriete } from "$lib/cahier/composants/de_cours/*";
</script>

<Chapitre titre="Proportionnalité" />

<Contenu apres_un_titre>
    <Partie numero={1} titre="Grandeurs proportionnelles" />
        <SousPartie numero={1} titre="Concept" />
            <Definition lignes={2}>
                Une grandeur est une caractéristique quantifiable <br />
                (souvent associée à une unité).
            </Definition>
            <Exemples lignes={2}>
                Distance (m), Prix (€), Durée (s), Température (°C), Masse (kg), <br />
                Énergie (J), Puissance (W), Tension électrique (V)
            </Exemples>
            <Definition lignes={3}>
                Deux grandeurs sont proportionnelles si, pour obtenir les valeurs <br />
                de la première grandeur, on peut multiplier celles de la deuxième <br />
                par un même nombre : le <i>coefficient de proportionnalité</i>.
            </Definition>
            <Exemples lignes={2}>
                <Item>
                    Le côté et le périmètre d'un carré sont proportionnels.
                </Item>
                <Item>
                    L'âge et la taille d'une personne ne sont pas proportionnels.
                </Item>
            </Exemples>
</Contenu>
