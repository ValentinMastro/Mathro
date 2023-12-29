<script lang="ts">
    export let numero: number
    export let titre: string

    function chiffres_romains(nombre: number) {
        switch (nombre) {
            case 1: return "i";
            case 2: return "ii";
            case 3: return "iii";
            case 4: return "iv";
            case 5: return "v";
            case 6: return "vi";
            case 7: return "vii";
            case 8: return "viii";
            case 9: return "ix";
            case 10: return "x";
        } 
    }
</script>

<h5 class="soussouspartie">{chiffres_romains(numero)}) {titre}</h5>
<slot />

<style>
    h5.soussouspartie {
        font-size: large;
        color: blue;
    }
</style>