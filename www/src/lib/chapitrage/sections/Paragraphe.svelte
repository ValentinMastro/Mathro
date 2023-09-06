<script lang="ts">
    export let couleur: string
    export let nom: string
</script>

<div style="color: {couleur};">
    <u>{nom} :</u><br />
    <slot />
</div>