import type { RequestHandler } from './$types';
import {$} from 'execa';
import { json } from '@sveltejs/kit';

 
export const POST: RequestHandler = async ({ request }) => {
    const { niveau, id_evaluation } = await request.json();
    let numero_evaluation = ("00" + id_evaluation).slice(-2)
    const { stdout } = await $`base64 src/routes/api/from_zip/${niveau}eme/${numero_evaluation}.zip`;

    return json(stdout, {
        headers: {
            'content-type': 'text/plain',
        }
    })
};