import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

import {$} from 'execa';
 
export const POST: RequestHandler = async ({ request }) => {
    const { niveau, nombre_de_questions, id_max } = await request.json();
    const { stdout } = await $`./entrainement ${niveau} ${nombre_de_questions} ${id_max}`;

    return json(JSON.parse(stdout), {
        headers: {
            'content-type': 'application/json',
        }
    })
};