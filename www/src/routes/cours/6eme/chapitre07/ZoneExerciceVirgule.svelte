<script lang="ts">
    import ZoneExercice from "$lib/exercices/ZoneExercice.svelte";
    import { Decimal } from "decimal.js";
    Decimal.set({ precision: 5, rounding: 4 })

    let enonce: string = "50 × 100";
    let a, b, reponse: Decimal;
    let multiplication = true;

    function verifierReponse(valeur: string): boolean {
        return new Decimal(valeur).eq(reponse);
    }

    function genererQuestion() {
        a = Decimal.random().mul(Math.pow(10, Math.floor(Math.random() * 3)));
        b = new Decimal(10).pow(Math.floor(Math.random() * 2 + 1));
        multiplication = Math.random() < 0.5;

        enonce = `${a.toString().replace(".",",")} ${multiplication ? "×" : "÷"  } ${b}`;
        reponse = multiplication ? a.mul(b) : a.div(b);
    }
</script>

<ZoneExercice {enonce} {reponse} {genererQuestion} {verifierReponse} />