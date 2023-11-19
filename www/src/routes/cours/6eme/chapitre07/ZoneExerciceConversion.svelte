<script lang="ts">
	import ZoneExercice from "$lib/exercices/ZoneExercice.svelte";
    import { Decimal } from "decimal.js";
    Decimal.set({ precision: 5, rounding: 4 })

    let enonce: string = "50 km = ? m";
    let reponse: Decimal;

    let prefixes: string[] = ["k", "h", "da", "", "d", "c", "m"];
    let unites: string[] = ["m", "g", "s", "A", "K", "mol", "cd"];

    function verifierReponse(valeur: string): boolean {
        return new Decimal(valeur).eq(reponse);
    }

    function genererQuestion() {
        let indice_prefixe_depart = Math.floor(Math.random() * prefixes.length);
        let indice_prefixe_arrivee = Math.floor(Math.random() * prefixes.length);
        if (indice_prefixe_depart == indice_prefixe_arrivee) { genererQuestion() }

        let unite_depart = prefixes[indice_prefixe_depart] + unites[Math.floor(Math.random() * unites.length)];
        let valeur_depart = Decimal.random().mul(Math.pow(10, Math.floor(Math.random() * 3)));
        reponse = valeur_depart.mul(Math.pow(10, indice_prefixe_arrivee - indice_prefixe_depart));

        enonce = `${valeur_depart} ${unite_depart} = ? ${prefixes[indice_prefixe_arrivee]}${unites[Math.floor(Math.random() * unites.length)]}`;
    }

</script>

<ZoneExercice {enonce} {reponse} {verifierReponse} {genererQuestion} />