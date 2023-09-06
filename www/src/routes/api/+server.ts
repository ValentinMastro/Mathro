import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

import {$} from 'execa';
 
export const POST: RequestHandler = async ({ request }) => {
    const { type, niveau, id_exercice } = await request.json();
    const { stdout } = await $`./exercices ${type} ${niveau} ${id_exercice}`
    return json(JSON.parse(stdout))
};