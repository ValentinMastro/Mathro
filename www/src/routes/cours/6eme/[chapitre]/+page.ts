import type { PageLoad } from "./$types";

export const load: PageLoad = ( {params} ) => {
    return {
        numero_chapitre: Number(params.chapitre),
    };
}