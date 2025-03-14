<script lang="ts">
	import { Chapitre, Contenu, Partie } from "$lib/cahier/composants/de_chapitrage/*";
	import { Definition, Methode } from "$lib/cahier/composants/de_cours/*";
	import Exemple from "$lib/cahier/composants/de_cours/Exemple.svelte";
	import Item from "$lib/cahier/composants/de_cours/Item.svelte";

    import { math } from "mathlifier";
</script>

<Chapitre titre="Horaires, Durées" />

<Contenu apres_un_titre>
    <Partie numero={1} titre="Unités de mesure du temps" />
        <Definition lignes={12}>
            <Item>
                Une année est la durée d'un tour de la Terre autour du Soleil.
            </Item>
            <Item lignes={2}>
                Un jour correspond à la durée d'un tour complet de la Terre sur elle-même.
            </Item>
            <Item>
                1 an {@html math("\\approx")} 365,25 jours
            </Item>
            <Item>
                1 semaine = 7 jours 
            </Item>
            <Item>
                1 décade  = 10 jours
            </Item>
            <Item>
                1 décennie = 10 ans
            </Item>
            <Item>
                1 siècle = 100 ans
            </Item>
            <Item>
                1 millénaire = 1000 ans 
            </Item>
            <Item>
                1 j = 24 h = 86400 s  
            </Item>
            <Item>
                1 h  = 60 min = 3600 s 
            </Item>
            <Item>
                1 min = 60 s
            </Item>
        </Definition>
        <Methode lignes={2}>
            Pour convertir des secondes en heures, minutes, secondes (hh:mm:ss), on utilise la division euclidienne.
        </Methode>
        <Exemple>
            35000 s = ?h?min?s
            <!-- -->
        </Exemple>
</Contenu>