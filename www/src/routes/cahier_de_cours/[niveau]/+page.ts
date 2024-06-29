import type { PageLoad } from "./$types";

function parse(niveau: string): number {
    if (!Number.isNaN(Number.parseInt(niveau, 10))) {
        return Number.parseInt(niveau, 10);
    } else {
        let test = niveau.match(/(\d+)eme/);
        if (test) {
            return Number.parseInt(test[1], 10);
        }
    }
    return 0;
}

export const load: PageLoad = ( {params} ) => {
    return {
        niveau: parse(params.niveau),
    };
}