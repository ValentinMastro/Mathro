<script lang="ts">
    let nombre: number = 3;

    function updateNombre() {
        nombre++;
        if (nombre > 12) { nombre = 3 };
        setTimeout(updateNombre, 1000);
    }
    updateNombre()
</script>

<div id="animation" style="--nombre: {nombre};">
    <div id="nombre">
        <div id="nombre_texte">
            {nombre} = 
        </div>
        {#each Array(nombre) as _, index}
            <div class="petit_carre" />
        {/each}
    </div>
    <div id="carre">
        <div id="carre_texte">
            {nombre}² = 
        </div>
        {#each Array(nombre) as _, index}
            <div class="colonne">
                {#each Array(nombre) as __, index2}
                    <div class="petit_carre" />
                {/each}
            </div>
        {/each}
    </div>
</div>

<style>
    #animation {
        width: 100%;
        height: 200px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        color: black;
        font: "Katex_Main";
        font-size: 30px;
    }
    #nombre, #carre {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .petit_carre {
        --taille: calc((200px - 2px * var(--nombre)) / var(--nombre));
        width: var(--taille);
        height: var(--taille);
        background-color: black;
        margin: 2px;
    }
</style>