<script lang="ts">
    export let niveau: 6 | 5 | 4 | 3;
    export let nombre_de_classes: 5 | 6;
</script>

<div id="configuration">
    <div>
        Niveau <select bind:value={niveau}>
            <option value={6}>6ème</option>
            <option value={5}>5ème</option>
            <option value={4}>4ème</option>
            <option value={3}>3ème</option>
        </select>
    </div>
    <div>
        Nombre de classes <select bind:value={nombre_de_classes}>
            <option value={5}>5</option>
            <option value={6}>6</option>
        </select>
    </div>
</div>

<style>
    #configuration {
        background-color: red;
        height: 2.5vh;
        position: fixed;
        left: 2%;
        right: 2%;
        width: 96%;
        top: 0;

        display: flex;
        justify-content: space-evenly;
        
    }
</style>