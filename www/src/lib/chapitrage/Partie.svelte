<script lang="ts">
    export let numero: number
    export let titre: string

    function romain(i: number): string {
        switch (i) {
            case 1:
            case 2:
            case 3:
                return "I".repeat(i)
            case 4:
                return "IV"
            case 5: 
                return "V"
            case 6:
            case 7:
            case 8:
                return "V" + "I".repeat(i-5)
            default:
                return "ERREUR"
        }
    }
</script>

<h3 class="partie">{romain(numero)} - {titre}</h3>
<slot />

<style>
    h3.partie {
        color: rgb(225, 0, 0);
        font-size: x-large;
        font-weight: bold;
    }
</style>