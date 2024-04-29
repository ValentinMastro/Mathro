import { parse } from "cookie";
import type { PageLoad } from "./$types";

function parseChapitre(chapitre: string): number {
    if (!Number.isNaN(Number.parseInt(chapitre, 10))) {
        return Number.parseInt(chapitre, 10);
    } else {
        let test = chapitre.match(/chapitre(\d+)/);
        if (test) {
            return Number.parseInt(test[1], 10);
        }
    }
    return 0;
}

export const load: PageLoad = ( {params} ) => {
    return {
        numero_chapitre: parseChapitre(params.chapitre),
    };
}