import type { PageLoad } from './$types';

function parse(niveau: string): 3 | 4 | 5 | 6 {
	let n: number | undefined;
	if (!Number.isNaN(Number.parseInt(niveau, 10))) {
		n = Number.parseInt(niveau, 10);
	} else {
		let test = niveau.match(/(\d+)eme/);
		if (test?.[1]) {
			n = Number.parseInt(test[1], 10);
		}
	}
	if (n === 3 || n === 4 || n === 5 || n === 6) return n;
	return 6;
}

export const load: PageLoad = ({ params }) => {
	return {
		niveau: parse(params.niveau)
	};
};
