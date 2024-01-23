<script lang="ts">
    interface Point {
        x: number;
        y: number;
    }

    let points: Point[] = [];
    
    function ajouterPoint(event: MouseEvent) {
        // Ajouter le point cliqué à la liste des points
        // Les coordonnées sont les entiers les plus proches de la position de la souris
        let nouveau_point = {
            x: 80*Math.round(event.offsetX/80),
            y: 80*Math.round(event.offsetY/80)
        }
        if (nouveau_point.x != points[points.length-1]?.x && nouveau_point.y != points[points.length-1]?.y) {
            points = [...points, nouveau_point];
        }
        console.log(points);
    }

    // Afficher les points dans le svg


</script>

<svg viewBox="0 0 1004 1004" width={300} height={300}
    on:click={ajouterPoint}
    role="none"
>
    <def>
        <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <rect width="100" height="100" fill="url(#smallGrid)"/>
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="grey" stroke-width="4"/>
          </pattern>
    </def>
    <!-- grille -->
    <rect width="100%" height="100%" fill="url(#grid)" />
</svg>