import type { PageLoad } from "./$types";

export const load: PageLoad = ( {params} ) => {
    var nombre_evaluations = 0;
    switch (params.niveau) {
        case "4eme":
            nombre_evaluations = 6;
            break;
        case "6eme":
            nombre_evaluations = 7;
            break;
    }

    return {
        niveau: params.niveau,
        nombre_evaluations: nombre_evaluations,
    }
}