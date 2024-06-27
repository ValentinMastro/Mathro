<script lang="ts">
    import { couleur, texte } from './types';
    import type { Classe } from './types';
    export let classe: Classe;

    function option_activee(classe: Classe, option: string): boolean {
        switch (option) {
            case 'latin':
                return classe.options.latin;
            case 'grec':
                return classe.options.grec;
            case 'allemand_lv2':
                return classe.options.allemand_lv2;
            case 'allemand_bilangue':
                return classe.options.allemand_bilangue;
            case 'espagnol_lv2':
                return classe.options.espagnol_lv2;
            case 'hispanica':
                return classe.options.hispanica;
        }
        return false;
    }
</script>

<div style="display: flex; justify-content: space-evenly;">
    {#each Object.keys(classe.options) as option}
        {#if option_activee(classe, option)}
            <span style="background-color: {couleur(option)};">
                {texte(option)}
            </span>
        {/if}
    {/each}
</div>

<style>
    span {
        padding: 0.5em;
        margin: 0.5em;
        border-radius: 0.5em;
        color: white;
    }
</style>