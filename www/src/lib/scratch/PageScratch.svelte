<script lang="ts">
    import ListeDeBlocs from "./zones/ListeDeBlocs.svelte";
    import Programme from "./zones/Programme.svelte";
    import Enonce from "./zones/Enonce.svelte";
    import AffichageExecutionDuProgramme from "./zones/AffichageExecutionDuProgramme.svelte";
</script>

<div id="interface_scratch">
    <ListeDeBlocs />
    <Programme />
    <div style="width: 40%;">
        <Enonce />
        <AffichageExecutionDuProgramme />
    </div>
</div>


<style>
    #interface_scratch {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 95vh;
    }
</style>