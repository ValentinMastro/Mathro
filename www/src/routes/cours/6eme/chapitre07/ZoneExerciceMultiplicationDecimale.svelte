<script lang="ts">
	import ZoneExercice from "$lib/exercices/ZoneExercice.svelte";
    import { Decimal } from "decimal.js";
    Decimal.set({ precision: 4, rounding: 4 })

    let enonce: string = "50 km = ? m";
    let reponse: Decimal;

    let prefixes: string[] = ["k", "h", "da", "", "d", "c", "m"];
    let unites: string[] = ["m", "g", "s", "A", "K", "mol", "cd"];

    function verifierReponse(valeur: string): boolean {
        return new Decimal(valeur).eq(reponse);
    }

    function genererQuestion() {
        let facteur_1 = Decimal.random().mul(Math.pow(10, Math.floor(Math.random() * 3)));
        let facteur_2 = Decimal.random().mul(Math.pow(10, Math.floor(Math.random() * 3)));
        reponse = facteur_1.mul(facteur_2);

        enonce = `${facteur_1} × ${facteur_2} = ?`;
    }

</script>

<ZoneExercice {enonce} {reponse} {verifierReponse} {genererQuestion} />