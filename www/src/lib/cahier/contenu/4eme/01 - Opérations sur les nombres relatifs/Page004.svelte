<script lang="ts">
    import { Contenu, Partie, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
    import { Propriete, Item, Exemples } from '$lib/cahier/composants/de_cours/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';

    import { math } from 'mathlifier';
</script>

<Contenu>
    <Partie numero={2} titre="Les opérations de base" />
        <SousPartie numero={1} titre="Addition et soustraction" />
            <LigneVide />
            <Propriete lignes={6}>
                Pour additionner deux nombres relatifs :
                <Item lignes={2}>
                    s'ils sont de même signe, la somme a le même signe et on additionne les distances à zéro
                    ;
                </Item>
                <Item lignes={3}>
                    s'ils sont de signes différents, le signe de la somme est celui du terme de la plus
                    grande distance à zéro, et on soustrait les distances à zéro.
                </Item>
            </Propriete>
            <Exemples lignes={4}>
                <Item>
                    {@html math("17 + 5 = 22")}
                </Item>
                <Item>
                    {@html math("12 + (-4) = 8")}
                </Item>
                <Item>
                    {@html math("-3 + (-6) = -9")}
                </Item>
                <Item>
                    {@html math("-5 + (+14) = 9")}
                </Item>
            </Exemples>
            <Propriete>
                Soustraire un nombre revient à ajouter son opposé
            </Propriete>
            <Exemples lignes={4}>
                <Item>
                    {@html math("124 - 95 = 29")}
                </Item>
                <Item>
                    {@html math("12 - (-4) = 12 + (+4) = 16")}
                </Item>
                <Item>
                    {@html math("-12 - (+6) = -12 + (-6) = -18")}
                </Item>
                <Item>
                    {@html math("-89 - (-51) = -89 + (+51) = -38")}
                </Item>
            </Exemples>
        
</Contenu>