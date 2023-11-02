<script lang="ts">
    export let categorie: string;
    export const type: string = "none";

    let backgroundColor: string;
    let borderColor: string;
    switch (categorie) {
        case "mouvement":
            borderColor = "rgb(51, 115, 204)";
            backgroundColor = "rgb(76, 151, 255)";
            break;
        case "apparence":
            borderColor = "rgb(119, 77, 203)";
            backgroundColor = "rgb(153, 102, 255)";
            break;
        case "évènements":
            borderColor = "rgb(204, 153, 0)";
            backgroundColor = "rgb(255, 191, 0)";
            break;
        case "contrôle":
            borderColor = "rgb(207, 139, 23)";
            backgroundColor = "rgb(255, 171, 25)";
            break;
        case "opérateurs":
            borderColor = "rgb(56, 148, 56)";
            backgroundColor = "rgb(89, 192, 89)";
            break;
        case "variables":
            borderColor = "rgb(255, 140, 26)";
            backgroundColor = "rgb(219, 110, 0)";
        default:
            borderColor = "white"
            backgroundColor = "black";
    }
</script>

<div 
    class="bloc"
    role="none"
    draggable="true"
    on:dragstart={(event) => {
        event.dataTransfer?.setData("text", type);
    }}
    on:drag={(event) => {
        event.preventDefault();
    }}
>
    <svg viewBox="0 0 1500 250" xmlns="http://www.w3.org/2000/svg">    
    <path   style="fill: {backgroundColor}; stroke: {borderColor};" 
            d="
            M 0 150 
            L 0 15 
            C 0 0 0 0 15 0 
            L 40 0 
            C 80 0 65 35 100 35 
            L 170 35 
            C 205 35 185 0 230 0 
            L 1485 0 
            C 1500 0 1500 0 1500 15 
            L 1500 200 
            C 1500 215 1500 215 1485 215 
            L 230 215 
            C 185 215 205 250 170 250 
            L 100 250 
            C 65 250 80 215 40 215 
            L 15 215 
            C 0 215 0 215 0 200 
            L 0 150 
            Z" />
        <text x="50" y="150" font-size="100"><slot /></text>
    </svg>
</div>

<style>
    .bloc {
        height: fit-content;
        cursor: grab;
        background-color: transparent;
    }
    svg {
        stroke-width: 10px;
        background-color: transparent;
    }
    text {
        fill: white;
        user-select: none;
    }
</style>


