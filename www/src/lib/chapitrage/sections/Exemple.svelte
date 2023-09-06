<script lang="ts">
    import type { Exercice } from '$lib/exercices/types';
	import Katex from 'svelte-katex';

    export let exercice: Exercice
    export let nombre: number

    let exemples = Array(nombre)

    function boucle() {
        for (var i = 0; i < exemples.length; i++) {
            exemples[i] = exercice.exemple_unitaire()
        }
        //setTimeout(boucle, 5000)
    }
    boucle()
</script>

<div>
    <u>{nombre > 1 ? "Exemples" : "Exemple"} :</u><br />
    <table>
        <slot />
        {#each exemples as exemple}
            <tr>
                {#each exemple as d}
                    {#if (d["type"] == "formule" )}
                        <td><Katex>{d["valeur"]}</Katex></td>
                    {:else if (d["type"] == "coche")}
                        {#if (d["valeur"])}
                            <td style="color: green;">{"\u2611"}</td>
                        {:else}
                            <td style="color: red;">{"\u2612"}</td>
                        {/if}
                    {:else if (d["type"] == "nombre")}
                        <td>{d["valeur"].toLocaleString()}</td>
                    {:else if (d["type"] == "texte")}
                        <td>{d["valeur"]}</td>
                    {:else}
                        {console.log(d)}
                        <td>{d}</td>
                    {/if}
                {/each}
            </tr>
        {/each}
    </table>
</div>

<style>
    div {
        color: blue;
    }
    table {
        columns: 50px;
    }
</style>