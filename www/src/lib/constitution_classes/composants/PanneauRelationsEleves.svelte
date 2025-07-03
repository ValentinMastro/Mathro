<script lang="ts">
    let retracte = true;

    function toggle() {
        retracte = !retracte;
    }
</script>

<div class="panneau" class:retracte={retracte} on:click={toggle} role="none">
    {#if retracte}
        <div id="pour_titre">
            <span id="titre">Relations élèves</span>
        </div>
    {/if}
</div>

<style>
    .panneau {
        position: fixed;
        top: 0;
        right: 0;
        width: 20%;
        height: 100%;
        color: black;
        background-color: #f1f1f1;
        z-index: 1;
        overflow-x: hidden;
        transition: 0.5s;
    }
    .retracte {
        width: 2%;
    }
    #pour_titre {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
    #titre {
        text-transform: uppercase;
        writing-mode: vertical-lr;
        text-orientation: upright;
        font-size: 2em;
        user-select: none;
    }
</style>