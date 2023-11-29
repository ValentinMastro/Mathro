import type { PageLoad } from "./$types";

export const load: PageLoad = ( {params} ) => {
    var niveau = 0;
    switch (params.niveau) {
        case "4eme":
            niveau = 4;
            break;
        case "6eme":
            niveau = 6;
            break;
    }

    return {
        niveau: niveau,
        numero: Number(params.numero),
    };
}